import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

let num = 0;
const handleClick = (n) => {
  num = n;
};
describe('Tests login component', () => {
  it('should render page', () => {
    const loginComponent = renderer.create(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
    expect(loginComponent).toMatchSnapshot();
  });

  it('should isplay "Welcome to Health Clinic"', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const h1 = screen.getByText('Welcome to');
    const h2 = screen.getByText('Health Clinic');
    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  });

  it('should allow click on signup button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const loginButton = screen.getByText('Login');
    loginButton.onclick = handleClick(2);
    fireEvent.click(loginButton);
    expect(num).toBe(2);
  });

  it('should allow click on signup button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const signUpButton = screen.getByText('Sign up');
    signUpButton.onclick = handleClick(1);
    fireEvent.click(signUpButton);
    expect(num).toBe(1);
  });

  it('should get value from username field', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );

    const usernameInput = screen.getByRole('textbox');
    expect(usernameInput).toBeInTheDocument();
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');
  });
});
