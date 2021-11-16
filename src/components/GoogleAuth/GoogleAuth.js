import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObj }) => {
    const { email, name } = profileObj;
    const newUser = {
      email,
      name,
      tokenId,
    };

    dispatch(logIn(newUser));
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
