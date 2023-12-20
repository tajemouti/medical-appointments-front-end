import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Tests home component', () => {
  it('should render page', () => {
    const homeComponent = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(homeComponent).toMatchSnapshot();
  });

  it('should display navigation buttons "Doctors"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const button1 = screen.getByText('Delete Doctor');
    expect(button1).toBeInTheDocument();
  });

  it('should display navigation buttons "Add Doctor"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const button1 = screen.getByText('Add Doctor');
    expect(button1).toBeInTheDocument();
  });

  it('should display navigation buttons "Doctors"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const button1 = screen.getByText('Doctors');
    expect(button1).toBeInTheDocument();
  });

  it('should display navigation buttons "My Appointments"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const button1 = screen.getByText('My Appointments');
    expect(button1).toBeInTheDocument();
  });

  it('should display navigation buttons "Book Appointment"', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const button1 = screen.getByText('Book Appointment');
    expect(button1).toBeInTheDocument();
  });
});
