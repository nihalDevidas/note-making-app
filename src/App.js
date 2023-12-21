import React,{useState,useEffect} from "react"
import TaskInput from "./components/inputPannel/TaskInput";
import { useContext } from 'react';
import TodoContext from './components/context/TodoContext';
import DisplayComponent from "./components/displayList/DisplayComponent";
import app from "./app.css"


function App() {
  const{todoData,AddNotesToTodo,deleteNote} = useContext(TodoContext)

 console.log(todoData)
  return (
    <div>
      
     <TaskInput/> 
     <DisplayComponent/>
    </div>
  );
}

export default App;
