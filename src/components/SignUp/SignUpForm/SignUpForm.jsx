import { SignUpContainer, SignUpContainericon } from './SignUpForm.styled.jsx';
import sprite from 'src/assets/images/sprite/sprite.svg';
export const SignUpForm = () => {
  return (
    <>
      <SignUpContainer>
        <div className="sign-up-forms-container">
          <h2>Sign Up</h2>
          <form>
            <div className="sign-up-form-container">
              <label>Enter your email</label>
              <input placeholder="E-mail"></input>
            </div>
            <div className="sign-up-form-container">
              <label>Enter your password</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Password"
              ></input>
              <SignUpContainericon>
                <use href={`${sprite}#icon-settings`}></use>
              </SignUpContainericon>
            </div>
            <div className="sign-up-form-container">
              <label>Repeat password</label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Repeat password"
              ></input>
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
