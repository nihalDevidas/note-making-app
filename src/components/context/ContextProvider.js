import React,{useReducer} from 'react'
import TodoContext from "./TodoContext"

const ContextProvider = (props) => {

  const ADD = "ADD"
  const DELETE = "DELETE"
  const UPDATE = "UPDATE"


    const[state, dispatch] = useReducer(reducer, [])


    function reducer(state, action){

        switch(action.type){
          
           case ADD : let arr = [...state]
                      let newTask = {id : JSON.stringify(Date.now()), title : action.payload.title, note: action.payload.note}
                      arr.push(newTask)
                      return arr
    
           case DELETE : let filterdArr = state.filter((obj)=>obj.id !== action.id) 
                         return filterdArr


           case UPDATE : let updatedArr = state.map((obj)=>{
                                          if(obj.id === action.payload.id){
                                            return{...obj, title: action.payload.title, note: action.payload.note}
                                          }
                                          return {...obj}
                          }) 
                          return updatedArr             
                    
           default : return state              
    
        }
    
    }
     

    function addDataToList(title, note){
     
        let payload = {title: title, note:note}
         dispatch({type: ADD, payload})

    }


    function deleteDataFromList(id){
          
        dispatch({type: DELETE, id : id})

    }
    
    function updateList(id,title, note){

      let payload = {id, title, note}
      dispatch({type: UPDATE, payload})
    }
    
    
  return (
    <TodoContext.Provider value = {
        {
             todoData :state,
             AddNotesToTodo : addDataToList,
             deleteNote : deleteDataFromList,
             updateList : updateList
        }
    }>
      {props.children}
    </TodoContext.Provider>
  )


  }
export default ContextProvider