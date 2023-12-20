import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import DeleteDoctor from '../components/DeleteDoctor';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Tests DeleteDoctor component', () => {
  it('should render page', () => {
    const DeleteDoctorComponent = renderer.create(
      <BrowserRouter>
        <DeleteDoctor />
      </BrowserRouter>,
    );
    expect(DeleteDoctorComponent).toMatchSnapshot();
  });
});
