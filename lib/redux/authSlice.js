const { default: Cookies } = require("universal-cookie");


const cookies = new Cookies();
const token = cookies.get("token");

const initialState = {
    user: null,
    isAuthenticated: !!token,
    loading: false,
    isVerified: false,
    error: null,
  };
  
  const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
      authRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      authSuccess: (state, action) => {
        state.user = action.payload;
        state.user = user;
        state.isAuthenticated = user.isVerified;
        state.loading = false;
        state.error = null;
      },
      verifyOtpSuccess: (state, ) => {
        state.isVerified = true;
        state.loading = false;
        if (state.user) {
          state.user.isVerified = true;
        }
      },
      authFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
      },
    }
  });

  export const { authRequest, authSuccess, authFailure, logout, verifyOtpSuccess } = authSlice.actions;
  export default authSlice.reducer;