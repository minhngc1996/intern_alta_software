import React from "react";

interface GreetProps{
    name?: string; 
    age?: number;
    onClick: () => void;
    isLoggedIn? :boolean;
  };
const Greet = (props:GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? 
            
            <div>
                <h2>Hello, My name is {props.name}! I'm {props.age} Yrs</h2>
                <button onClick={props.onClick}>Click Me</button>
            </div>
            
            :
            <div>
                <p>Hello, <strong>Guest</strong> !!!</p>
            </div>
        }
      
    </div>
  )
}

export default Greet
