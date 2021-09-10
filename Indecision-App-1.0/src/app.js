class IndecisionApp extends React.Component {
    constructor (props) {
        super(props)
        this.deleteAll = this.deleteAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : props.options
        }
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
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    deleteAll () {
         this.setState( () => ({ options : []}))
    }
    handleDeleteOption (option) {
       this.setState((prevState) => ({
        options : prevState.options.filter((opt) => opt !== option)
       }))
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
    this.setState ((prevState) => ({options : prevState.options.concat(opt)}) )
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

const Header = (props) => {
    return (
        <div>
           <h1>{props.title}</h1>
           {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision'
}

const Action = (props) => {
    return (
        <div>
          <button onClick={props.handlePick}
           disabled={!props.hasOptions}
          >What Should I do?</button>
        </div>
    );
}


const Options = (props) => {
    return (
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
}


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
      this.setState (() => ({error}))//same as return {error : error}
      if(!error)
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
