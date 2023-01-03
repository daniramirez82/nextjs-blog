import {configureStore, createSlice, current} from '@reduxjs/toolkit'

const initialState = {category: "Home"};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        updateCategory: (state,action)=>{
            console.log('el estado es', current(state));
            console.log('eso es lo que llega al store', action.payload);
            
            state.category = action.payload;


            console.log('despues de la actualizacion del estado:::::', current(state));
        }
    }
});
export const {updateCategory} = categorySlice.actions;

const store = configureStore({
    reducer: {
        category: categorySlice.reducer
    }
});

export default store;