import React from "react";

const Option = (props) => (
    <div>
        <span>{props.optionText}</span>
         <button 
         onClick={(e) => {
             props.handleDeleteOption(props.optionText)
         }}
         >Remove</button>
    </div>
); 

export default Option