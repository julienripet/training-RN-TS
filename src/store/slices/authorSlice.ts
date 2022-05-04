import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Author} from '../../types/authors.type';

export interface AuthorState {
  authors: Author[];
}

const initialState: AuthorState = {
  authors: [],
};

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    updateAuthorsList: (state, action: PayloadAction<Array<Author>>) => {
      state.authors = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateAuthorsList} = authorSlice.actions;

export default authorSlice.reducer;
