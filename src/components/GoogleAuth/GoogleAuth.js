import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';
import { useDispatch } from 'react-redux';
import { googleLogIn } from '../../redux/auth/auth-slice';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObj }) => {
    const { email, name, balance } = profileObj;
    const newUser = {
      email,
      name,
      balance,
      tokenId,
    };

    dispatch(googleLogIn(newUser));
  };
  return (
    <>
      <GoogleLogin
        clientId="247340085219-f8vpeflsvkcin8lei0r36j2eu8gqj2uh.apps.googleusercontent.com"
        render={({ onClick, disabled }) => (
          <GoogleAuthButton onClick={onClick} disabled={disabled} />
        )}
        onSuccess={successLogin}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default GoogleAuth;
