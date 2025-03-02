import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodoById } from '../redux/todoSlice';
import React, { useState } from 'react';
import { Input } from '@mui/joy';

interface TodoProps {
    todo: TodoType
}

const Todo = ({todo}:TodoProps) => {

  const {id,content}=todo;

  const dispatch=useDispatch()

const [edit,setEdit]=useState<boolean>(false)
const [editedTodo,setEditedTodo]=useState<string>(content)

  const handleRemoveTodo=()=>{
dispatch(removeTodoById(id))
  }
  const handleEditTodo=()=>{
    const payload={
      id:id,
      content:editedTodo
    }
    dispatch(editTodo(payload))
    setEdit(false)
  }

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid orange", padding:"0.5rem", marginTop:"1.5rem", borderRadius:"10px"}}>
    {edit?<Input type='text' sx={{ width: '400px' }}  value={editedTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEditedTodo(e.target.value)} />:<div>{content}</div>}    
        <div>
<DeleteIcon onClick={handleRemoveTodo} style={{fontSize:"2rem", cursor:"pointer"}} />
{edit?<CheckIcon onClick={handleEditTodo}/>:<EditNoteIcon onClick={()=>setEdit(true)} style={{fontSize:"2rem", cursor:"pointer"}}/>}

        </div>
    </div>
  )
}

export default Todo