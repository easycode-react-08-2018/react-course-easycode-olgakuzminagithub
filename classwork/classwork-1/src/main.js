import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

// const HelloWorld = () => <h1>Hello world</h1>;

const ShowFrameworks = (props) => {
    console.log(props.frameworks);
    return <ul>
        {
            props.frameworks.map(elem => {
                return <li>{elem}</li>
            })
        }
    </ul>

};


ReactDOM.render(<ShowFrameworks frameworks={['Vue', 'Angular', 'React']}/>, mountNode);

/*Напишите счетчик кторый будет каждую секунду обновляться в DOM при помощт React + ReactDOM*/

let counter = 0;

// setInterval(function() {
//     counter ++;
//     const h1 =  React.createElement(
//         'h1',
//         null,
//         counter,
//     );
//     ReactDOM.render(h1, mountNode);
// }, 1000);

