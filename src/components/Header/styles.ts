import styled from 'styled-components';

interface StypeProps {
  isDarkSide: boolean;
}

export const HeaderContent = styled.header<StypeProps>`
  width: 100%;
  height: 5rem;
  margin: 0 auto; 
  padding: 0 2rem; 
  background: ${props => props.isDarkSide ? `var(--black)` : `var(--yellow)` };

  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    border: 0;
    background: none;
    color: ${props => props.isDarkSide ? `var(--white)` : `var(--black)` };
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 1.13rem;
    line-height: 1.38rem;
    font-weight: normal;

    span {
      margin-left: 10px;
    }
  }
`;