'use client';

import { Container } from './styledPage';
import Logo from 'components/Logo/Logo';
import Card from 'components/Card/Card';
import Form from 'components/Form/Form';

// const handleOnSubmit = (event) => {
//   event.preventDefault();
//   console.log('Form submitted');
// };

// const handleOnChange = (event) => {
//   console.log(event.target.value);
// };

const Register = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Form />
      </Card>
    </Container>
  );
};

export default Register;
