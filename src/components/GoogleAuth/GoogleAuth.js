// import GoogleLogin from 'react-google-login';
// import GoogleAuthButton from './GoogleAuthButton';
import { ReactComponent as GoogleIcon } from '../../images/svg/google.svg';
import s from './GoogleAuth.module.css';
// import { useDispatch } from 'react-redux';
// import { googleLogIn } from '../../redux/auth/auth-slice';

const BASE_URL = 'https://kapusta-team-project.herokuapp.com/api';
// const BASE_URL = 'http://localhost:3030/api';

const GoogleAuth = () => {
  // const dispatch = useDispatch();

  // const successLogin = async ({ tokenId, profileObj }) => {
  //   const { email, name, balance } = profileObj;
  //   const newUser = {
  //     email,
  //     name,
  //     balance,
  //     tokenId,
  //   };

  // dispatch(googleLogIn(newUser));
  // };
  return (
    <>
      <a href={`${BASE_URL}/users/google`} className={s.buttonGoogle}>
        <GoogleIcon className={s.googleSvg} />
        Google
      </a>
      {/* <GoogleLogin
        // clientId="247340085219-f8vpeflsvkcin8lei0r36j2eu8gqj2uh.apps.googleusercontent.com"
        clientId="208854685975-urv5h1d3c44rt5o3esntuec8m5rrrovc.apps.googleusercontent.com"
        render={({ onClick, disabled }) => (
          <GoogleAuthButton onClick={onClick} disabled={disabled} />
        )}
        onSuccess={successLogin}
        cookiePolicy={'single_host_origin'}
      /> */}
    </>
  );
};

export default GoogleAuth;
