import { createSlice } from '@reduxjs/toolkit';

export const modalClassesSlice = createSlice({
    name: "modalClasses",
    initialState: {value: {loginModalClasses: "hide", modalBackgroundClasses: "hide"}},
    reducers: {
        setModalClasses: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { setModalClasses } = modalClassesSlice.actions;
export default modalClassesSlice.reducer;