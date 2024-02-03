


const Item=(props)=>{

    return(
        <div>
    
    Item <input onChange={(e)=>props.setTodo(e.target.value)} value={props.todo} type="text" />
    <button onClick={()=>props.addTask()}  >+</button>
        </div>
    )
    
    }
    
    export default Item