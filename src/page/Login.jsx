import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../redux/authSlice';

const LogginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = {
      email,
      password,
    };
    dispatch(apiLoginUser(formData));
  };
  return (
    <div>
      <h2>LogginPage</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="userEmail" placeholder="email" />
        <input
          type="password"
          name="userPassword"
          placeholder="*********"
          minLength={7}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LogginPage;
