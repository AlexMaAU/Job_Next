import { useState } from 'react';
import { FormTitle } from '../../app/register/styledPage';
import FormInputRow from 'components/FormInputRow/FormInputRow';
import {
  FormContainer,
  StyledButton as Button,
  ToggleText,
} from './styledForm.jsx';
import axios from 'axios';
// import reducer from '../../context/reducer';
import { useAppContext } from '../../context/appContext';
import { addUserToLocalStorage } from '../../context/utils';
import { useRouter } from 'next/navigation'


const Form = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useAppContext();

  const handleOnSubmit = async (event) => {
    
    event.preventDefault();

    if (!email || !password) {
      alert('Please fill out fields');
      return;
    }

    try {
      if (isLogin) {
        const data = await axios.post(
          'http://127.0.0.1:5000/api/v1/users/login',
          { email, password }
        );
        const { user, token } = data.data;
        alert('Login Success');
        dispatch({
          type: 'SETUP_USER_SUCCESS',
          payload: user,
        });
        addUserToLocalStorage({ user, token });
        router.push('/dashboard');
      } else {
        const data = await axios.post(
          'http://127.0.0.1:5000/api/v1/users/register',
          { username, email, password }
        );
        const { newUser, token } = data.data;
        alert('Register Success');
        dispatch({
          type: 'SETUP_USER_SUCCESS',
          payload: newUser,
        });
        addUserToLocalStorage({ newUser, token });
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'SETUP_USER_ERROR',
        payload: { msg: error.message },
      });
    }
    // console.log(username, email, password);
  };

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnClick = (value) => {
    setIsLogin(value);
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      {isLogin ? (
        <>
          <FormTitle>Login</FormTitle>
          <FormInputRow
            name='email'
            type='email'
            value={email}
            handleOnChange={handleEmailChange}
          />
          <FormInputRow
            name='password'
            type='password'
            value={password}
            handleOnChange={handlePasswordChange}
          />
          <Button type='submit'>Login</Button>
          <ToggleText>
            Not a member yet?{' '}
            <span onClick={() => handleOnClick(false)}>Register</span>
          </ToggleText>
        </>
      ) : (
        <>
          <FormTitle>Register</FormTitle>
          <FormInputRow
            name='name'
            type='text'
            value={name}
            handleOnChange={handleNameChange}
          />
          <FormInputRow
            name='email'
            type='email'
            value={email}
            handleOnChange={handleEmailChange}
          />
          <FormInputRow
            name='password'
            type='password'
            value={password}
            handleOnChange={handlePasswordChange}
          />
          <Button type='submit'>Signup</Button>
          <ToggleText>
            Already a member?{' '}
            <span onClick={() => handleOnClick(true)}>Login</span>
          </ToggleText>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
