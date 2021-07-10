import { FiLoader } from 'react-icons/fi';

import { useStrengthSide } from '../../context/StrengthSideContext';
import { Header } from '../Header';

import { Container, Content } from './styles';
import imgDarthVader from '../../assets/darth-vader.png';
import imgLuckSkywalker from '../../assets/luke-skywalker.png';

export function StrengthSide() {  
  const { getStrengthSide, strengthSide, isLoading } = useStrengthSide();
  const isDarkSide = strengthSide.name === 'Darth Vader';  

  if (isLoading) {
    return (<><FiLoader textRendering="loading" size="5rem"/><span>loading...</span></>);
  }

  return (
    <>      
      <Header />
      <Container isDarkSide={isDarkSide}>
        <Content isDarkSide={isDarkSide}>
          <button title="retry" onClick={getStrengthSide} disabled={isLoading}>choose your path again, Padawan</button>
          <div>          
            <img src={isDarkSide ? imgDarthVader : imgLuckSkywalker} alt={strengthSide.name}></img>
            <h1>Your master is <span>{strengthSide.name}</span></h1>   
          </div>        
        </Content>
      </Container>
    </>
  );
}
