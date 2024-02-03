import { useState } from "react"
import Item from "./Item"
import Tasks from "./Tasks"

const TodoList=()=>{

const [tasks, setTasks]=useState([])
const [todo,setTodo]=useState('')

console.log(todo,tasks)

const addTask=()=>{
const task={
id:Math.random(),
value:todo,
status:false,
}
let newTask=[...tasks,task]
setTasks(newTask)
setTodo("")

}
const deleteItem=(e)=>{
console.log(e)
let newTasks=tasks.filter(el=>el.id!==e)
setTasks(newTasks)


}

return(
    <div>
<Item setTodo={setTodo} todo={todo} addTask={addTask} />
<Tasks tasks={tasks }  deleteItem={deleteItem}/>
        TodoList
    </div>
)

}

export default TodoList