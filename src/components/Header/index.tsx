import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useStrengthSide } from '../../context/StrengthSideContext';

import { HeaderContent } from './styles';

export function Header() {  
  let history = useHistory()

  const { strengthSide, clearStrengthSide,  } = useStrengthSide();
  const isDarkSide = strengthSide.name === 'Darth Vader';  

  function redirectToHome() {
    clearStrengthSide();
    history.push("/")
  }

  return (   
    <HeaderContent isDarkSide={isDarkSide}>       
      <button onClick={redirectToHome}><FiArrowLeft size="2rem" /><span>back</span></button>      
    </HeaderContent>    
  );
}
