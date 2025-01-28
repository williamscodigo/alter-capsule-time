import { useState, type FormEvent, type ChangeEvent } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import StyledButton from '../common/StyledButton';

import Auth from '../../utils/auth';

const SignupForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [addUser] = useMutation(ADD_USER);
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
    if (!formState.username || !formState.email || !formState.password || !formState.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Check matching passwords
    if (formState.password !== formState.confirmPassword) {
      setError("Confirm password must match!");
      return;
    }

    // If validation passes, clear error message
    setError("");

    //modify data as expected in backed (taking out confirmPassword field)
    const {confirmPassword, ...userFormData} = formState;

    try {
      const { data } = await addUser({
        variables: { input: { ...userFormData } },
      });

      // Store user info (excluding password) in local storage
      localStorage.setItem(
        "user",
        JSON.stringify(data.addUser.user)
      );

      Auth.login(data.addUser.token);
    } catch (e) {
      // display username or email already exists
      setError("The provided username or email is already in use.");
      // console.error(e);
    }
  };

  return (
    <div className="card">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <div>
                <label className="block">Username</label>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                </div>

                <div>
                <label className="block">Email</label>
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
                <label className="block">Password</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </div>

                <div>
                <label className="block">Confirm Password</label>
                <input
                  className="form-input"
                  placeholder="******"
                  name="confirmPassword"
                  type="password"
                  value={formState.confirmPassword}
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

export default SignupForm;
