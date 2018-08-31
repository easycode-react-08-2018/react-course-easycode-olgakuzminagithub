import React from 'react';
import ReactDOM from 'react-dom';


const mountNode = document.getElementById('app');

const HelloWorld = () => <h1>Hello world</h1>;

ReactDOM.render(<HelloWorld/>, mountNode);