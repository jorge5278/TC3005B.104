import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

// Mock de useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn()
}));

describe('Login Component', () => {
  test('navigates after successful login', async () => {
    const mockLogin = jest.fn().mockResolvedValue({ success: true });
    const mockNavigate = useNavigate();
    const { getByLabelText, getByText } = render(<Login onLogin={() => {}} login={mockLogin} />);

    fireEvent.change(getByLabelText('Correo Electrónico'), { target: { value: 'user@example.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'password' } });
    fireEvent.click(getByText('Ingresar'));

    await new Promise(process.nextTick); // Simula el paso de tiempo hasta que se resuelva la promesa

    expect(mockLogin).toHaveBeenCalledWith('user@example.com', 'password');
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });
});
