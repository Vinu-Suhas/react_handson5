import React, { useState } from "react";

export function HOC(){
    const [count,setCount]=useState(0)
  


    return(<>
    <h2>Count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment++</button>
        <button onClick={()=>setCount(count-1)}>Decre--</button>
    </>)
}
 