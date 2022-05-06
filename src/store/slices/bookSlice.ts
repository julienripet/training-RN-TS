import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import {getBooksByAuthorId} from '../../services/books.service';
import {Book} from '../../types/books.type';

export interface BookState {
  list: Book[];
  loading: Boolean;
  error: SerializedError | null;
  detailedBook: Book | null;
}

const initialState: BookState = {
  list: [],
  loading: true,
  error: null,
  detailedBook: null,
};

export const fetchBooksByAuthorId = createAsyncThunk(
  'books/fetchById',
  async (id: Number, {rejectWithValue}) => {
    try {
      const res = await getBooksByAuthorId(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateBooksList: (state, action: PayloadAction<Array<Book>>) => {
      state.list = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBooksByAuthorId.pending, state => {
      state.loading = true;
      state.list = [];
      state.error = null;
    });
    builder.addCase(fetchBooksByAuthorId.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchBooksByAuthorId.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default bookSlice.reducer;
