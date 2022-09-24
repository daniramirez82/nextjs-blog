import {configureStore, createSlice} from '@reduxjs/toolkit'

const initialState = {category: 'Latest'};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory(state,action){
            
            state.category = action.payload;
        }
    }
});
const store = configureStore({
    reducer: {
        category: categorySlice.reducer
    }
});
export const {updateCategory} = categorySlice.actions;

export default store;