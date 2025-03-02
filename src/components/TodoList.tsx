import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

const TodoList = () => {

  const {todos}=useSelector((state:RootState)=>state.todo);

  return (
    <div>
      {todos&&todos.map((todo:TodoType)=>(
        <Todo key={todo.id} todo={todo}/>
      ))}
        
    </div>
  )
}

export default TodoList