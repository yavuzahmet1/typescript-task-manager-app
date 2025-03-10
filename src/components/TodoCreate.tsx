import {Input,Button, Typography} from '@mui/joy/';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';
import { TodoType } from '../types/Types';

const TodoCreate = () => {

    const dispatch=useDispatch()

    const [newTodo,setNewTodo]=useState<string>("")

    const handleCreateTodo=()=>{

    if(newTodo.trim().length===0){
        alert("Enter new todo")
        return;
    }
    const payload:TodoType={
        id:Math.floor(Math.random()*999999),
        content:newTodo
    }
    dispatch(createTodo(payload))

    setNewTodo("")

   }
  return (
    <div  className="todo-create" >
<Typography
fontSize={30}
  sx={{
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom:"1rem"
  }}
>
 BASIC TODO PROJECT
</Typography>


      <Input 
      sx={{ width: '500px' }} 
      size="lg" 
      placeholder="Enter todo..." 
      variant="solid"
      value={newTodo} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>

      <Button 
      style={{marginTop:"1rem", cursor:"pointer"}} 
      size="md" 
      onClick={handleCreateTodo}
      >Create</Button>
    </div>
  )
}

export default TodoCreate