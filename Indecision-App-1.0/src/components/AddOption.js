import React from "react";

export default class AddOption extends React.Component {
    state = {
        error : undefined
    };
    addOption = (e) => {
      e.preventDefault()
      const opt = (e.target.elements.option.value).trim()
      const error = this.props.addOption(opt)
      this.setState (() => ({error}))//same as return {error : error}
      if(!error)
      e.target.elements.option.value = '' 
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
             <form className="input-form" onSubmit={this.addOption}>
                <input className="input-box" type="text" name="option"/>
                <button className="button">Add Option</button>
             </form> 
            </div>
        )
    };
};