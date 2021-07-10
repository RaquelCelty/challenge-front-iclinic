import { BrowserRouter, Route } from 'react-router-dom';

import { Main } from './components/Main';
import { StrengthSide } from './components/StrengthSide';
import { StrengthSideProvider } from "./context/StrengthSideContext";

export function App () {
  return (
    <StrengthSideProvider>
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route path="/yourSideIs" component={StrengthSide} />
      </BrowserRouter>
    </StrengthSideProvider>
  );
}
