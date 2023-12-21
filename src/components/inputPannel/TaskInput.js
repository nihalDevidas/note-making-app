import React,{useState,useEffect,useRef}  from 'react'
import { useContext } from 'react';
import todoContext from '../context/TodoContext';

const TaskInput = () => {

    const[showNotePannel, setShowIndicator] = useState(false)
    const{todoData,AddNotesToTodo,deleteNote} = useContext(todoContext)

    const titleValue = useRef();
    const notesValue = useRef();


    function openNotePannel(){
      setShowIndicator(true)
    }

    function closeNotePannel(){
        
        if(titleValue.current && notesValue.current){
          if(titleValue.current.innerText !== "" && notesValue.current.innerText !== ""){
             AddNotesToTodo(titleValue.current.innerText, notesValue.current.innerText)
           }
        }

      setShowIndicator(false)
    }

    function handleTitleContent(event){
        event.stopPropagation()

    }

    function handleNotesContent(event){
      event.stopPropagation()
    }


    useEffect(()=>{
      document.addEventListener('click',()=>closeNotePannel())

      return ()=>{
        document.removeEventListener('click',()=>closeNotePannel())
      }

    },[])


  return (
    <div className='input-con'>

        <div className='input-box'>

        {!showNotePannel && <div className='temp'>
                             <input onFocus={openNotePannel} placeholder="make notes..."  />
                            </div>}

        {showNotePannel && <div className='main-content'>
                              <div className='inp-title-label'>title :</div>
                              <div className='inp-title' ref={titleValue} onClick={(event)=>handleTitleContent(event)} contentEditable = "true" ></div>

                              <div className='inp-note-label'>notes :</div>
                              <div className='inp-note' ref = {notesValue} onClick={(event)=>handleNotesContent(event)} contentEditable = "true"  ></div>
                              
                              
                              <div className='inp-btn'>
                                  <button onClick = {closeNotePannel}>close</button>
                              </div>
                        </div>}
        </div>

    </div>
  )
}

export default TaskInput