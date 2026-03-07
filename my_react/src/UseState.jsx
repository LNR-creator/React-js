                             /* UseState */
//                  ==============================   
// What is useState?
// A React Hook that lets you add state variables to functional components.
// State = data that changes over time and triggers re-render of the component.

/* Common Uses of UseState */

// Form input handling
// Toggle buttons (show/hide password, dark mode)
// Counters
// Shopping cart (add/remove items)
// Search & filters
import { useEffect } from "react";
import { useState } from "react";
import UseEffect from "./UseEffect";

function UseState(){
  let [input,setinput] = useState("");
  let [name,setname] = useState("");

useEffect(()=>{
  console.log("Hi hello");
},[])
// state → current value.
// setState → function to update the value.
// initialValue → starting value (string, number, boolean, object, array, etc.)

  function HandlekeyDown(event){
    if(event.key === "Enter"){
      setname(input);
      setinput("");
    }

  }
  return(
    <div>
      <div>
        <h1>{name}</h1>
        <input type="text" value={input} onChange={
          (event)=> setinput(event.target.value) }
          onKeyDown={HandlekeyDown}
        
        />
        <button onClick={()=>{
          setname(input);
          setinput("");
        }}>Click</button>
      </div>
    </div>
  )
}

export default UseState;