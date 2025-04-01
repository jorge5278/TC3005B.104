import { render, fireEvent } from '@testing-library/react';
import Login from './Login'; // Asumiendo que el componente está exportado desde './Login'

describe('Login Component', () => {
  test('input fields update state', () => {
    const { getByLabelText } = render(<Login onLogin={() => {}} />);

    const emailInput = getByLabelText('Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});
