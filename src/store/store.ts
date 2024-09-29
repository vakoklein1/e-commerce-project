import { configureStore } from '@reduxjs/toolkit';
import firstReducer from './firstSlice'; 

const store = configureStore({
  reducer: {
    firstSlice: firstReducer, 
  },
});

export default store;