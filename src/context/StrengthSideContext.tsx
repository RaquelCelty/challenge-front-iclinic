/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, ReactNode, useContext, useState } from "react";
import api from '../services/apis';

interface StrengthSideProviderProps {
  children: ReactNode;
}

interface StrengthSide {
  name: string;
}

interface StrengthSideContextData {
  strengthSide: StrengthSide;
  getStrengthSide: () => void;
  clearStrengthSide: () => void;
  isLoading: boolean;
}

export const StrengthSideContext = createContext<StrengthSideContextData>({} as StrengthSideContextData);

export function StrengthSideProvider({ children }: StrengthSideProviderProps) {
  const [strengthSide, setStrengthSide] = useState<StrengthSide>({} as StrengthSide);
  const [isLoading, setIsLoading] = useState(false);

  function getStrengthSide() {  
    setIsLoading(true);
    const promiseLightSide = api.get('people/1/');
    const promiseDarkSide = api.get('people/4/');

    Promise
      .all([promiseLightSide, promiseDarkSide])
      .then(async([responseLightSide, responseDarkSide]) => {
        const durationResponseLightSide = await responseLightSide.headers.duration;
        const durationResponseDarkSide = await responseDarkSide.headers.duration;

        let response = responseDarkSide.data;        
        if (durationResponseLightSide < durationResponseDarkSide) {
          response = responseLightSide.data;
        }

        setStrengthSide(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  function clearStrengthSide() {  
    setStrengthSide({} as StrengthSide);
  }

  return (
    <StrengthSideContext.Provider value={{strengthSide, getStrengthSide, clearStrengthSide, isLoading}}>
      {children}
    </StrengthSideContext.Provider>
  );
}

export const useStrengthSide = () => useContext(StrengthSideContext);
