import styled from 'styled-components';

interface StypeProps {
  isDarkSide: boolean;
}

export const Container = styled.div<StypeProps>`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)`};
`;

export const Content = styled.div<StypeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };   

  @media (max-width: 800px) {
    flex-direction: column-reverse;    

    button {
      margin-top: 40px;
    }

    div {
      margin-top: 0;
    }
  } 

  button {
    width: 347px;
    height: 3.5rem;
    border: 0;
    border-radius: 0.62rem;
    background: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };
    color: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)` };

    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    &:disabled {
      filter: opacity(5);
      cursor: default;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    
    margin-top:  72px;

    img {
      border-radius: 50%;
    }
   
    h1 {      
      font-size: 2.25rem;
      line-height: 2.8rem;
      font-weight: 400;
      margin-top: 40px;

      span {
        font-weight: 700;
      } 
    }  

    p {
      font-size: 0.88rem;
      line-height: 1.1rem;
      letter-spacing: 0.35em;
    }   
  }    
`;