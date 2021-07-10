import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { StrengthSideContext } from '../../context/StrengthSideContext';
import { Header } from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Header component', () => {      
  const getStrengthSide = jest.fn();
  const clearStrengthSide = jest.fn();
  const strengthSide = { name: 'Test' };

  beforeEach(() => {
    render(
      <StrengthSideContext.Provider value={{ getStrengthSide, strengthSide, clearStrengthSide, isLoading: false }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </StrengthSideContext.Provider>
    );
  });

  it('renders correctly', () => { 
    expect(screen.getByText('back')).toBeInTheDocument();
  });

  it('redirects to the home page when user clicks on back button', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

  it('calls clearStrengthSide function', () => {
    fireEvent.click(screen.getByRole('button'));
    expect(clearStrengthSide).toHaveBeenCalledWith();
  });
});