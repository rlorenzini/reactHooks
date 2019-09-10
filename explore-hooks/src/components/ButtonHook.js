import React, { useState } from 'react';
//import useState which is a function and not a class
//useState is the most used React Hook
//all hooks should start with 'use' to clarify they use Hooks logic

function ButtonHook () {
  const [buttonText, setButtonText] = useState("Click me, please");
  //useState, and all hooks, uses DECONSTRUCTION, which turns const into an array
  //and removes needing to put this.state.variable for every variable call

  return (
    <button onClick = { () => setButtonText("Thanks, been clicked via Hooks!")}>
    {buttonText}
    </button>
  )
}
//with hooks, we no longer are required to use classes for components
//the hook also removes the need to setState and call the state in each function
//deconstruction, which is part of ES6, allows state to be set and called at once
//also sets variable names to each state, effectively removing this.state
export default ButtonHook

//hooks are functions but are used very similar to classes
//export default class becomes export default function
//you no longer need extends react since functions do not inherit properties like classes
