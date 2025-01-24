import { useState, type FormEvent, type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import StyledButton from './StyledButton';

import Auth from '../utils/auth';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { data }] = useMutation(LOGIN_USER);
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Check if fields are filled
    if (!formState.email || !formState.password ) {
      setError("All fields are required.");
      return;
    }

    // If validation passes, clear error message
    setError("");

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div>
                <label className="block text-gray-700">Email</label>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                </div>

                <div>
                <label className="block text-gray-700">Password</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </div>

                <StyledButton type='submit' primary>
                  Submit
                </StyledButton>
              </form>
            )}

            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
  );
};

export default LoginForm;
