import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <button onClick={props.deleteAll}>Remove All</button>
     {!props.options.length && <p> No Options Available</p>}
     {
       props.options.map((option) => (
           <Option 
            key={option} 
            optionText={option}
            handleDeleteOption={props.handleDeleteOption} 
            />
          ))
     }
    
  </div>
);

export default Options