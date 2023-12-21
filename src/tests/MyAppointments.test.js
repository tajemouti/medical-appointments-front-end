import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MyAppointments from '../components/MyAppointments';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

const initState = {
  appointments: [
    {
      id: 30,
      appointment_time: '2023-12-19T13:28:20.830Z',
      user_id: 6,
      doctor_id: 2,
      created_at: '2023-12-19T13:29:04.845Z',
      updated_at: '2023-12-19T13:29:04.845Z',
      city: 'Addis',
      doctor_name: 'Dr. William A. Abdu',
    },
    {
      id: 31,
      appointment_time: '2023-12-19T13:28:20.830Z',
      user_id: 6,
      doctor_id: 3,
      created_at: '2023-12-19T13:29:22.188Z',
      updated_at: '2023-12-19T13:29:22.188Z',
      city: 'Bahir Dar',
      doctor_name: 'Dr. Myles. B. Abbott',
    },
  ],
};

describe('Tests MyAppointments component', () => {
  it('should render page', () => {
    useDispatch();
    useSelector.mockReturnValue(initState.appointments);
    const aptComponent = renderer.create(
      <BrowserRouter>
        <MyAppointments />
      </BrowserRouter>,
    );
    expect(aptComponent).toMatchSnapshot();
  });

  it('should display navigation buttons "My Appointments"', () => {
    render(
      <BrowserRouter>
        <MyAppointments />
      </BrowserRouter>,
    );
    const button1 = screen.getAllByText('My Appointments');
    expect(button1[1]).toBeInTheDocument();
  });
});
