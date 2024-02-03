import { useState } from "react"


const Header=()=>{

    const [count, setCount]=useState(0)
    return (
    <div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)} >+</button>
    
    ----Header-----</div>
    
    
    )
    
    
    }
    
    export default Header