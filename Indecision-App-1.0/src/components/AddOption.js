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
                {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.addOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
             </form> 
            </div>
        )
    };
};