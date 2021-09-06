console.log("App . js is running")

const appRoot = document.getElementById('app')
var app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of Computer',
    options: [""]
};
var template = (
     <div>
        <h1>{app.title}</h1> 
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>  {(app.options) && (app.options).length > 0 ? 'Here Are  Your Options':'No Options'} </p>
     </div>
);

var templateTwo = (
    <div>
       <h1>Adhikar Shinde</h1>
       <p>Age : 22</p>
       <p>Location : India </p>
    </div>
);

ReactDOM.render(template,appRoot)