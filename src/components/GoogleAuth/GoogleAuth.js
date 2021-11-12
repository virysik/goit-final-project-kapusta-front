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
      clientId="441702863210-d6bc9fnvd7p92me9dedsb90r9fcsggdg.apps.googleusercontent.com"
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