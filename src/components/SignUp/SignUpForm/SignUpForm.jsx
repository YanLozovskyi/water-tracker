import {
  SignUpContainer,
  EyeSlashIcon,
  SignStyledLabel,
  SignStyledInput,
  SignImgBubble,
  SignImgButle,
} from './SignUpForm.styled';
import sprite from 'src/assets/images/sprite/sprite.svg';
export const SignUpForm = () => {
  return (
    <>
      <picture>
        <SignImgBubble
          src="src/assets/images/background/homePage/desktop/bgHomeBubbleDesc.png"
          media="(min-width: 1200px)"
        ></SignImgBubble>
        <source
          srcSet="src/assets/images/background/homePage/tablet/bgHomeTabBubble.png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="src/assets/images/background/homePage/mobile/bgHomePhoneBubble.png"
          media="(min-width: 480px)"
        />
      </picture>
      <picture>
        <SignImgButle
          src="src/assets/images/background/homePage/desktop/bgHomeButleDesc.png"
          media="(min-width: 1200px)"
        ></SignImgButle>
        <source
          srcSet="src/assets/images/background/homePage/tablet/bgHomeTabButle.png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="src/assets/images/background/homePage/mobile/bgHomePhoneButle.png"
          media="(min-width: 480px)"
        />
      </picture>
      <SignUpContainer>
        <div className="sign-up-forms-container">
          <h2>Sign Up</h2>
          <form>
            <div className="sign-up-form-container">
              <SignStyledLabel>
                Enter your email
                <SignStyledInput placeholder="E-mail" />
              </SignStyledLabel>
            </div>
            <div className="sign-up-form-container">
              <SignStyledLabel>
                Enter your password
                <SignStyledInput
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                />
                <EyeSlashIcon>
                  <use href={`${sprite}#icon-to-hide`}></use>
                </EyeSlashIcon>
              </SignStyledLabel>
            </div>
            <div className="sign-up-form-container">
              <SignStyledLabel>
                Repeat password
                <SignStyledInput
                  autoComplete="off"
                  type="password"
                  placeholder="Repeat password"
                />
                <EyeSlashIcon>
                  <use href={`${sprite}#icon-to-hide`}></use>
                </EyeSlashIcon>
              </SignStyledLabel>
            </div>
          </form>
          <button type="button" className="sign-up-button">
            Sign Up
          </button>
          <a className="sign-up-link" href="#">
            Sign in
          </a>
        </div>
      </SignUpContainer>
    </>
  );
};
