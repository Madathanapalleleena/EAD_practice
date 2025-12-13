import {createSlice,configureStore} from '@reduxjs/toolkit';
const studentSlice=createSlice({
    name:'students',
    initialState:[{name:'Alice',marks:85},{name:'Bob',marks:92},{name:'Charlie',marks:78}],
    reducers:{
        sortAsc(state){
            state.sort((a,b)=>a.marks-b.marks)
        },
        sortDesc(state){
            state.sort((a,b)=>b.marks-a.marks)
        }
    }
})
export const {sortAsc,sortDesc}=studentSlice.actions;
export const store=configureStore({
    reducer:{
    students:studentSlice.reducer
}
})
