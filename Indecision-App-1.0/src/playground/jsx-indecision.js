const appRoot = document.getElementById('app')

const app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of Computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault()
   const option = e.target.elements.option.value
   if(option){
    app.options.push(option)
    e.target.elements.option.value = ''
    renderIndecsionApp()
   }
   else
   console.log('Nothing') 
}

const removeAll = () => {
    app.options = []
    renderIndecsionApp()
}

const makeDcision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    // renderIndecsionApp()
    alert(option)
}
const renderIndecsionApp = () => {
    const template = (
        <div>
           <h1>{app.title}</h1> 
           {(app.subtitle) && <p>{app.subtitle}</p>}
           <button disabled={!(app.options.length)} onClick= {removeAll}>Remove All</button>
           <button disabled={!(app.options.length)} onClick={makeDcision}>What Should I Do??</button>
           <p>  {(app.options) && (app.options).length > 0 ? 'Here Are  Your Options':'No Options'} </p>
           <ol>
           {
            app.options.map((option) => <li key={option}>{option}</li>)
           }
           </ol>
           <form onSubmit={onFormSubmit}>
              <input type="text" name="option" />
              <button>Add Options</button>
           </form>
        </div>
   );
   
   ReactDOM.render(template,appRoot)
}
renderIndecsionApp()

