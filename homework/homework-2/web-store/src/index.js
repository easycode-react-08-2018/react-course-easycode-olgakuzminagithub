import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// const mountNode = document.getElementById('root');
//
// const render = (Component = App) => {
//     ReactDOM.render(<Component/>, document.getElementById('root'));
// };
//
// render();
//
// if(module.hot) {
//     module.hot.accept('./App', () => {
//         render(App);
//     })
// }

