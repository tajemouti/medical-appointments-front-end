import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookAppointment from '../components/BookAppointment';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Tests BookAppointment component', () => {
  it('should display "Book Appointment" button"', () => {
    render(
      <BrowserRouter>
        <BookAppointment />
      </BrowserRouter>,
    );

    const text = screen.getAllByText('Book Appointment');
    expect(text[2]).toBeInTheDocument();
  });
});
