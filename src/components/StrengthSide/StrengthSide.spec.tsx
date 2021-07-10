import { fireEvent, render, screen, cleanup  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { StrengthSide } from '.';
import { StrengthSideContext } from '../../context/StrengthSideContext';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('StrengthSide component', () => {  
  afterEach(cleanup);

  it('renders correctly when Darth Vader is the master', () => {    
    const getStrengthSide = jest.fn();
    const clearStrengthSide = jest.fn();
    const strengthSide = { name: 'Darth Vader' }

    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: false }}>
        <MemoryRouter>
          <StrengthSide />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );

    expect(screen.getByText('Darth Vader')).toBeInTheDocument();
  });  

  it('renders correctly when Luke Skywalker is the master', () => {    
    const getStrengthSide = jest.fn();
    const clearStrengthSide = jest.fn();
    const strengthSide = { name: 'Luke Skywalker' }

    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: false }}>
        <MemoryRouter>
          <StrengthSide />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  }); 
  
  it('renders spinner when data is loading', () => {    
    const getStrengthSide = jest.fn();
    const clearStrengthSide = jest.fn();
    const strengthSide = { name: 'Luke Skywalker' }

    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: true }}>
        <MemoryRouter>
          <StrengthSide />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );

    expect(screen.getByText('loading...')).toBeInTheDocument();
  }); 

  it('calls getStrengthSide when click on retry button', () => {    
    const getStrengthSide = jest.fn();
    const clearStrengthSide = jest.fn();
    const strengthSide = { name: 'Luke Skywalker' }

    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: false }}>
        <MemoryRouter>
          <StrengthSide />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );

    fireEvent.click(screen.getByTitle('retry'));
    expect(getStrengthSide).toHaveBeenCalled();
  });
});
