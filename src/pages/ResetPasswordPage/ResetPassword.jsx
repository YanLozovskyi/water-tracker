import { ResetPasswordForm } from 'components';
import { ResetPasswordSection } from './ResetPassword.styled';
import { Navigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
  const searchParam = useSearchParams();

  if (!searchParam[0].has('resetToken')) {
    return <Navigate to={'/'} />;
  }

  return (
    <ResetPasswordSection>
      <ResetPasswordForm />
    </ResetPasswordSection>
  );
};

export default ResetPassword;
