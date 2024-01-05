import { ResetPasswordForm } from 'components';
// import { Navigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {
   // const searchParam = useSearchParams();

   // if (!searchParam[0].has("token")) {
   //    return <Navigate to={"/"} />
   // }

   return (
      <section>
         <ResetPasswordForm />
      </section>
   );
};

export default ResetPassword;
