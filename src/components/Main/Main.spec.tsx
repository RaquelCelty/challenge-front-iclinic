import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Main } from '.';
import { StrengthSideContext } from '../../context/StrengthSideContext';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Main component', () => {  
  const getStrengthSide = jest.fn();
  const clearStrengthSide = jest.fn();
  const strengthSide = { name: 'Test' }

  beforeEach(() => {
    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: false }}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );
  });

  it('renders correctly', () => {
    expect(screen.getByText('FRONTEND CHALLENGE')).toBeInTheDocument();
    expect(screen.getByText('START')).toBeInTheDocument();
  });

  it('redirects to the test page when user clicks on start button', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/yourSideIs');
  });

  it('calls clearStrengthSide function', () => {    
    fireEvent.click(screen.getByRole('button'));
    expect(getStrengthSide).toHaveBeenCalledWith();
  });
});
