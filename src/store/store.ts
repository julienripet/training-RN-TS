import {configureStore} from '@reduxjs/toolkit';
import logger from './middleware/logger';
import thunkMiddleware from 'redux-thunk';
import authorReducer from './slices/authorSlice';
import monitorReducersEnhancer from './enhancers/monitorReducer';

export const store = configureStore({
  reducer: {
    author: authorReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, thunkMiddleware),
  enhancers: [monitorReducersEnhancer],
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
