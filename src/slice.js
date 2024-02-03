import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetcher = createAsyncThunk('greetings/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    if (response.ok) {
      return await response.json();
    }
    return rejectWithValue('not found');
  } catch (error) {
    return rejectWithValue(error);
  }
});

const slice = createSlice({
  name: 'greetings',
  initialState: { text: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetcher.fulfilled, (state, { payload }) => (
      {
        ...state,
        text: payload.text,
        loading: false,
        error: null,
      }));
    builder.addCase(fetcher.rejected, (state, { error }) => (
      { ...state, loading: false, error: error.name }));
  },
});

export default slice.reducer;
