import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:"sa",title:"Peace",highlight:"Important",description:"My Name is Adarsh Sharma"}]
  }
export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo:(state,action)=>{
            const todoData={
                id:nanoid(),
                textData:action.payload
            }
            state.todos.push(todoData);
        },
        deleteTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>todo.id !==action.payload)
           
        }
    }
})
export const{addTodo,deleteTodo}=todoSlice.actions
export default  todoSlice.reducer;