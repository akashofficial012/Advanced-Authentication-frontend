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