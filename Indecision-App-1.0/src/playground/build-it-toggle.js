const appRoot  = document.getElementById('app')
let data 
let buttonText = 'Show Details'

const genDetail = () => {
    if(buttonText === 'Show Details'){
        data = 'Here are Your Details !!! Boy'
        buttonText = 'Hide Details'
        renderToggle()
        return
    }
    if(buttonText !== 'Show Details'){
        data = null
        buttonText = 'Show Details'
        renderToggle()
        return
    }
    
}


const renderToggle = () => {
    const template = (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={genDetail}>{buttonText}</button>
          <p disabled={data}>{data}</p>
        </div>
    );
    
    ReactDOM.render(template,appRoot)
}
renderToggle()
