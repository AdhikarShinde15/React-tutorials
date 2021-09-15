import React from "react"
import Options from "./Options"
import Header from "./Header"
import AddOption from "./AddOption"
import Action from "./Action"

export default class IndecisionApp extends React.Component {
    state = {
        options : []
    }
    
    deleteAll = () => this.setState( () => ({ options : []}))

    handleDeleteOption = (option) => {
       this.setState((prevState) => ({
        options : prevState.options.filter((opt) => opt !== option)
       }))
    }
    handlePick = () => {
     const randomNum = Math.floor(Math.random() * this.state.options.length)
     alert(this.state.options[randomNum])
    }
    handleAddOption = (opt) => {
        if(!opt)
         return 'Enter a Valid Value to add Item'
        else if(this.state.options.indexOf(opt) > -1)
         return 'Enter a Unique Value' 
    this.setState ((prevState) => ({options : prevState.options.concat(opt)}) )
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
            this.setState(() => ({options}))
        }catch (e) {

        }
    }
    componentDidUpdate(prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    render() {
        
        const subtitle = 'Put Your Life In the Hands of Computer'
        
        return (
            <div>
            <Header subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
            />
            <Options options={this.state.options}
                     deleteAll={this.deleteAll}
                     handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption addOption={this.handleAddOption}/>
            </div> 
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}