import { makeStore } from '@/lib/store.js';
import axiosInstance from './url.service.js';
import { authFailure, authRequest, authSuccess } from '@/lib/redux/authSlice.js';

const dispatch = makeStore.dispatch;

export const signupUser = async (data) => {
    dispatch(authRequest)
  try {
    const response = await axiosInstance.post('/auth/signup', data);
    dispatch(authSuccess(response.data.data));
    return response.data;
  } catch (error) {
    dispatch(authFailure(error));
  }
};
export const signinUser = async (data) => {
    dispatch(authRequest)
  try {
    const response = await axiosInstance.post('/auth/signin', data);
    dispatch(authSuccess(response.data.data));
    return response.data;
  } catch (error) {
    dispatch(authFailure(error));
  }
};