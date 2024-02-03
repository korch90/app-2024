


const Tasks=(props)=>{ 

    return(
        <div>
    <ul>
{props.tasks.map(el=>{
    return(
        <li  key={el.id}> {el.value} <input type="checkbox" onChange={(e)=>props.deleteItem(el.id)}/>  </li>
    )

})}
     
</ul>   </div>
    )
    
    }
    
    export default Tasks