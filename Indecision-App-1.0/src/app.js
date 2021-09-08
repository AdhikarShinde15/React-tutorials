class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put Your Life In the Hands of Computer'
        const options = ['Thing one','Thing Two','Thing Three']
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={options}/>
            <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        
    }
    render () {
        return (
            <div>
              <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('remove all')
    }
    render() {
        return (
            <div>
              <button onClick={this.handleRemoveAll}>Remove All</button>
               {
                 this.props.options.map((option) => <Option key={option} optionText={option}/>)
               }
              <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <p>{this.props.optionText}</p>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
      e.preventDefault()

      if((e.target.elements.option.value).trim())
       console.log((e.target.elements.option.value).trim())
        e.target.elements.option.value=''
    }
    render() {
        return (
            <div>
             <form onSubmit={this.handleAddOption}>
               <input type="text" name="option"/>
                <button>Add Option</button>
             </form> 
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))