import React from 'react'
import {useState} from "react";

const MyButton = () => {

const [count,setCount]=useState(0);
    const AddCount=()=>{
        setCount(count+1);
        console.log("Button clicked:",count);
    }
    const DecreaseCount=()=>{
        setCount(count-1);
        console.log("Button clicked:",count);
    }
  return (
    <div>
        <p>Click on the button</p>
        <h2>Button clicked:{count}</h2>
        <button onClick={AddCount}>Count+1</button><br /><br />
        <button onClick={DecreaseCount}>Count-1</button>
    </div>

  );
};

export default MyButton