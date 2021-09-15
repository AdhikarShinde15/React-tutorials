import React from "react";

const Option = (props) => {
    return (
        <div>
            <span>{props.optionText}</span>
             <button 
             onClick={(e) => {
                 props.handleDeleteOption(props.optionText)
             }}
             >Remove</button>
        </div>
    ); 
}

export default Option