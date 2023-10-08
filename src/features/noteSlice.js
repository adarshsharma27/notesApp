import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    notes:[]
  }
export const noteSlice= createSlice({
    name:"notes",
    initialState,
    reducers: {
        addNote:(state,action)=>{
            const noteData={
                id:nanoid(),
                noteData:action.payload
            }
            state.notes.push(noteData);
        },
        deleteNote:(state,action)=>{
            state.notes= state.notes.filter((note)=>note.id !==action.payload)
           
        }
    }
})
export const{addNote,deleteNote}=noteSlice.actions
export default  noteSlice.reducer;