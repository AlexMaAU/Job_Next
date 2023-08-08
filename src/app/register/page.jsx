'use client';

import { Container } from './styledPage';
import Logo from 'components/Logo/Logo';
import Card from 'components/Card/Card';
import Form from 'components/Form/Form';
import { useAppContext } from 'context/appContext';

const Register = () => {
  const { state } = useAppContext();
  const user = state.user;
  console.log(user);

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
