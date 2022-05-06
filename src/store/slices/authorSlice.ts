import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import {getAuthorById, getAuthors} from '../../services/authors.service';
import {Author} from '../../types/authors.type';

export interface AuthorState {
  list: Author[];
  loading: Boolean;
  error: SerializedError | null;
  detailedAuthor: Author | null;
}

const initialState: AuthorState = {
  list: [],
  loading: true,
  error: null,
  detailedAuthor: null,
};

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAll',
  async (params, {rejectWithValue}) => {
    try {
      const res = await getAuthors();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const fetchAuthorById = createAsyncThunk(
  'authors/fetchById',
  async (id: Number, {rejectWithValue}) => {
    try {
      const res = await getAuthorById(id);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const authorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    updateAuthorsList: (state, action: PayloadAction<Array<Author>>) => {
      state.list = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAuthors.pending, state => {
      state.loading = true;
      state.list = [];
      state.error = null;
    });
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAuthors.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
    builder.addCase(fetchAuthorById.pending, state => {
      state.loading = true;
      state.detailedAuthor = null;
      state.error = null;
    });
    builder.addCase(fetchAuthorById.fulfilled, (state, action) => {
      state.detailedAuthor = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAuthorById.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default authorSlice.reducer;
