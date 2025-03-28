import { configureStore, createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'users',
    initialState: { list: [], selectedUser: null},
    reducers: {
        setUsers: (state, action ) => { state.list = action.payload; },
        selectUser: ( state, action ) => { state.selectedUser = action.payload; }, 
        updateUser: ( state, action) => {
            const index = state.list.findIndex(user => user.id === action.payload.id);
            if (index !== -1) state.list[index] = action.payload; 
        },
    },
});

export const { setUsers, selectUser, updateUser } = usersSlice.actions;
export const store = configureStore({ reducer: { users: usersSlice.reducer}})