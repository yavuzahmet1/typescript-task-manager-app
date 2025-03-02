import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

const Todo = ({todo}:TodoProps) => {
  const {id,content}=todo;
  const dispatch=useDispatch()

  const handleRemoveTodo=()=>{
dispatch(removeTodoById(id))
  }
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid orange", padding:"0.5rem", marginTop:"1.5rem", borderRadius:"10px"}}>
        <div>{content}</div>
        <div>
<DeleteIcon onClick={handleRemoveTodo} style={{fontSize:"2rem", cursor:"pointer"}} />
<EditNoteIcon style={{fontSize:"2rem", cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Todo