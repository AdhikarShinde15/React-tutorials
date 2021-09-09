let count = 0
const renderCounterApp = () => {
    const template = (
        <div>
           <h1>Count : {count}</h1>
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template,document.getElementById('app'))
}
renderCounterApp()

const addOne = () => {
    count++
    renderCounterApp()
}
const minusOne = () =>{
    count--
    renderCounterApp()
}
const reset = () => {
    count=0
    renderCounterApp()
}
renderCounterApp()

