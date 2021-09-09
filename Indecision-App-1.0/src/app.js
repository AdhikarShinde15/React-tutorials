class IndecisionApp extends React.Component {
    constructor (props) {
        super(props)
        this.deleteAll = this.deleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options : []
        }
    }
    deleteAll () {
         this.setState (() => {
             return {
                 options : []
             }
         })
    }
    handlePick () {
     const randomNum = Math.floor(Math.random() * this.state.options.length)
     alert(this.state.options[randomNum])
    }
    handleAddOption (opt) {
        if(!opt)
         return 'Enter a Valid Value to add Item'
        else if(this.state.options.indexOf(opt) > -1)
         return 'Enter a Unique Value' 

        this.setState ((prevState) => {
            return {
                options : prevState.options.concat(opt)
            }
        })
    }
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put Your Life In the Hands of Computer'
        
        return (
            <div>
            <Header title={title} subtitle={subtitle} />
            <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
            />
            <Options options={this.state.options}
                     deleteAll={this.deleteAll}
            />
            <AddOption addOption={this.handleAddOption}/>
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
    render () {
        return (
            <div>
              <button onClick={this.props.handlePick}
               disabled={!this.props.hasOptions}
              >What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
              <button onClick={this.props.deleteAll}>Remove All</button>
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
    constructor (props) {
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error : undefined
        }
    }
    addOption(e) {
      e.preventDefault()
      const opt = (e.target.elements.option.value).trim()
      const error = this.props.addOption(opt)
      this.setState (() => {
          return {error}//same as return {error : error}
      })
      e.target.elements.option.value = ''
    }
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
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
