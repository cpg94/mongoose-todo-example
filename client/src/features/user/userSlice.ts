import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface UserState {
  email: string;
  _id: string;
}

const initialState: UserState = {
  email: '',
  _id: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setId: (state, action: PayloadAction<string>) => {
      state._id = action.payload
    },
  },
});

export const { setEmail, setId } = userSlice.actions;

export const selectEmail = (state: RootState) => state.user.email;
export const selectId = (state: RootState) => state.user._id;

export default userSlice.reducer;
