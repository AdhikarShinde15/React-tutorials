class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (e) {
      this.setState({value:e.target.value})
    }
    handleSubmit (e) {
        alert('A name Was Submitted ' + this.state.value)
        e.preventDefault()
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<NameForm/>,document.getElementById('app'))