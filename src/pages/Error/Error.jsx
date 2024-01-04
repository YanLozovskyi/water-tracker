import { NotFound } from 'components';
import { ErrorSection } from './Error.styled';

const Error = () => {
  return (
    <ErrorSection>
      <NotFound />
    </ErrorSection>
  );
};

export default Error;
