import { configureStore } from '@reduxjs/toolkit';
import userRducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    Users :userRducer,
  },
});
