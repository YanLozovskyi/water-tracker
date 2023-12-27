import { SignUpForm } from 'components';
import { SignUpSection, SignUpBox } from './SignUp.styled';

const SignUp = () => {
  return (
    <SignUpSection>
      <SignUpForm />

      <SignUpBox></SignUpBox>
    </SignUpSection>
  );
};

export default SignUp;
