export const selectAuthToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserData = state => state.auth.userData;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;
