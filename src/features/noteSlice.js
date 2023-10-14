import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const noteData = {
        id: nanoid(),
        noteData: action.payload,
      };
      state.notes.push(noteData);
    },
    updateNote: (state, action) => {
      const { title, highlight, description, id } = action.payload;
      state.notes.map((note) => {
        if (note.id === id) {
          note.noteData.title = title;
          note.noteData.highlight = highlight;
          note.noteData.description = description;
        }
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});
export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
