import UserMenuHeader from '../UserMenuHeader';
import Header from '../Header'
import { authSelectors } from 'redux/auth'
import { useSelector } from 'react-redux'

export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <>
            {isLoggedIn ? <UserMenuHeader /> : <Header />}
        </>
    )
}