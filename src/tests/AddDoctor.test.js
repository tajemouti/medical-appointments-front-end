import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddDoctor from '../components/AddDoctor';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Tests AddDoctor component', () => {
  it('should render page', () => {
    const AddDoctorComponent = renderer.create(
      <BrowserRouter>
        <AddDoctor />
      </BrowserRouter>,
    );
    expect(AddDoctorComponent).toMatchSnapshot();
  });

  it('should display "Add Doctor"', () => {
    render(
      <BrowserRouter>
        <AddDoctor />
      </BrowserRouter>,
    );

    const text = screen.getAllByText('Add Doctor');
    expect(text[2]).toBeInTheDocument();
  });
});
