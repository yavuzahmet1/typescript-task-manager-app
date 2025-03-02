import {Input,Button} from '@mui/joy/';

const TodoCreate = () => {
  return (
    <div  className="todo-create" >
      <Input sx={{ width: '500px' }} size="lg" placeholder="Type in here…" variant="solid"/>
      <Button style={{marginTop:"1rem", cursor:"pointer"}} size="lg">Create</Button>
    </div>
  )
}

export default TodoCreate