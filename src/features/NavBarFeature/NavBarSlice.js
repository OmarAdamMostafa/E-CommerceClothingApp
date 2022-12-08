import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    menuItemIndex: 0,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    changeMenuItemIndex: (state,action) =>{
        state.menuItemIndex = action.payload;
    }
  },
});

export const {
  changeMenuItemIndex,
} = navbarSlice.actions;

export default navbarSlice.reducer;
