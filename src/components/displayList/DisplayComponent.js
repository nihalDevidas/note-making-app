import React,{useState} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEditNote } from "react-icons/md";
import { useContext } from 'react';
import todoContext from '../context/TodoContext';


const DisplayComponent = () => {

  const{todoData,AddNotesToTodo,deleteNote,updateList} = useContext(todoContext)

  return (
    <div className='main-container'>

        {
            todoData.length > 0 &&
             
            todoData.map((obj)=>{
                return(
                    <div className='note-card'>

                        <div  className='note-title'> 
                            {obj.title}
                        </div>

                        <div  className='note-content'>
                           {obj.note}
                        </div>

                        <div className='buttons-container'>
                            <div className='delete-btn' onClick = {()=>deleteNote(obj.id)}>
                            <RiDeleteBin6Line size={20}/>
                            </div>

                            <div className='edit-btn' >
                                <MdOutlineEditNote size={20}/>
                            </div>
                        </div>
                   </div>
                )
            })
        }
    </div>
  )
}

export default DisplayComponent