export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getCurrentUser = state => state.current.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getToken = state => state.token;

export const getIsFetchingCurrent = state => state.isFetchingCurrent;

export const getError = state => state.error;
