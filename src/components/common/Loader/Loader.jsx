import { RotatingLines, ThreeDots } from 'react-loader-spinner';
import { WrapThreeDotsDiv } from './Loader.styled';

export const Loader = () => {
  return (
    <WrapThreeDotsDiv>
      <ThreeDots
        height="90"
        width="90"
        radius="9"
        color="#407bff"
        ariaLabel="three-dots-loading"
        visible={true}
        timeout={2000}
      />
    </WrapThreeDotsDiv>
  );
};

export const ContentLoader = ({ width = "18px", height = "18px", strokeColor = "white" }) => {
  return (
    <RotatingLines
      visible={true}
      height={width}
      width={height}
      strokeColor={strokeColor}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}