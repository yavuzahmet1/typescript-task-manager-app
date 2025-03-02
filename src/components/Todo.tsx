import DeleteIcon from '@mui/icons-material/Delete';

import CheckIcon from '@mui/icons-material/Check';

import EditNoteIcon from '@mui/icons-material/EditNote';

const Todo = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", border:"1px solid orange", padding:"1rem", marginTop:"1.5rem", borderRadius:"10px"}}>
        <div>Todo</div>
        <div>
<DeleteIcon style={{fontSize:"2rem", cursor:"pointer"}} />
<EditNoteIcon style={{fontSize:"2rem", cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Todo