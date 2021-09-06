'use strict';

console.log("App . js is running");

var appRoot = document.getElementById('app');
var app = {
   title: 'Indecision App',
   subtitle: 'Put Your Life in the Hands of Computer',
   options: [""]
};
var template = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      app.title
   ),
   app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
   ),
   React.createElement(
      'p',
      null,
      '  ',
      app.options && app.options.length > 0 ? 'Here Are  Your Options' : 'No Options',
      ' '
   )
);

var templateTwo = React.createElement(
   'div',
   null,
   React.createElement(
      'h1',
      null,
      'Adhikar Shinde'
   ),
   React.createElement(
      'p',
      null,
      'Age : 22'
   ),
   React.createElement(
      'p',
      null,
      'Location : India '
   )
);

ReactDOM.render(template, appRoot);
