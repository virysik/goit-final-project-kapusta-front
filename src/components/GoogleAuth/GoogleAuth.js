import GoogleLogin from 'react-google-login';
import GoogleAuthButton from './GoogleAuthButton';

const GoogleAuth = () => {

  return (
    <GoogleLogin
      clientId="441702863210-d6bc9fnvd7p92me9dedsb90r9fcsggdg.apps.googleusercontent.com"
      render={({ onClick, disabled }) => (
        <GoogleAuthButton onClick={onClick} disabled={disabled} />
      )}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleAuth;