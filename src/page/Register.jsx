import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../redux/authSlice';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(apiRegisterUser(formData));
  };
  return (
    <div>
      <h2>RegisterPage</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="userName" placeholder="name" />
        <input type="email" name="userEmail" placeholder="email" />
        <input
          type="password"
          name="userPassword"
          placeholder="*********"
          minLength={7}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
