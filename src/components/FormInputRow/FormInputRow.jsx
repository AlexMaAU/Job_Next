import { Container, Label, Input } from './styledFormInputRow';

const FormInputRow = ({ name, type, handleOnChange }) => {
  return (
    <Container>
      <Label htmlFor={name}>{name}</Label>
      <Input type={type} id={name} name={name} onChange={handleOnChange} />
    </Container>
  );
};

export default FormInputRow;
