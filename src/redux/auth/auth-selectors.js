// type tuser = {
//   name: string | null,
//   email: string | null,
//   balance: string | null
// };

// interface IinitialState {
//   user: tuser,
//   token: string | null,
//   isLoggedIn: boolean,
//   isFetchingCurrentUser: boolean,
//   error: string | null,
// }


export const getIsLoggedIn = (state) => 
{  console.log(state);
return state.auth.isLoggedIn;}

export const getUserName = (state) => state.auth.user.name;

export const getCurrentUser = (state) => state.auth.current.user.name;

export const getUserEmail = (state) => state.auth.user.email;

export const getUserBalance = (state) => state.auth.user.balance;

export const getToken = (state) => state.auth.token;

export const getIsFetchingCurrent = (state) => state.auth.isFetchingCurrentUser;

export const getError = (state) => state.auth.error;
