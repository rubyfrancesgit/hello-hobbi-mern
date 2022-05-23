import { createSlice } from '@reduxjs/toolkit';

export const selectedHobbySlice = createSlice({
    name: "selectedHobby",
    initialState: {value: null},
    reducers: {
        selectHobby: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { selectHobby } = selectedHobbySlice.actions;
export default selectedHobbySlice.reducer;