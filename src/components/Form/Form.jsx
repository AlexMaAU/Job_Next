import { useState } from 'react';
import { FormTitle } from '../../app/register/styledPage';
import FormInputRow from 'components/FormInputRow/FormInputRow';
import {
  FormContainer,
  StyledButton as Button,
  ToggleText,
} from './styledForm.jsx';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(name, email, password);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
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
            handleOnChange={handleNameChange}
          />
          <FormInputRow
            name='password'
            type='password'
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
            handleOnChange={handleNameChange}
          />
          <FormInputRow
            name='email'
            type='email'
            handleOnChange={handleEmailChange}
          />
          <FormInputRow
            name='password'
            type='password'
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
