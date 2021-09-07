'use strict';

var appRoot = document.getElementById('app');
var data = void 0;
var buttonText = 'Show Details';

var genDetail = function genDetail() {
    if (buttonText === 'Show Details') {
        data = 'Here are Your Details !!! Boy';
        buttonText = 'Hide Details';
        renderToggle();
        return;
    }
    if (buttonText !== 'Show Details') {
        data = null;
        buttonText = 'Show Details';
        renderToggle();
        return;
    }
};

var renderToggle = function renderToggle() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: genDetail },
            buttonText
        ),
        React.createElement(
            'p',
            { disabled: data },
            data
        )
    );

    ReactDOM.render(template, appRoot);
};
renderToggle();
