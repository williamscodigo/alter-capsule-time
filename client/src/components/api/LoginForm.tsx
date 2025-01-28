import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import StyledButton from '../common/StyledButton';

import Auth from '../../utils/auth';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);
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
    if (!formState.email || !formState.password) {
      setError("All fields are required.");
      return;
    }
  
    // If validation passes, clear error message
    setError("");
  
    try {

      const { data } = await login({
        variables: { ...formState },
      });
  
      // Store user info (excluding password) in local storage
      localStorage.setItem(
        "user",
        JSON.stringify(data.login.user)
      );
  
      // Store token in Auth service

      Auth.login(data.login.token);
    } catch (e) {
      // console.error(e);
      setError("Login failed. Please try again.");
    }
  
    setFormState({
      email: "",
      password: "",
    });
  };
  

  return (
    <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
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

                <StyledButton type='submit' primary={true}>
                  Submit
                </StyledButton>
              </form>

            {error && <p className="error-message">{error}</p>}
          </div>
         </div>
  );
};

export default LoginForm;
