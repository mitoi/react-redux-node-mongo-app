import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
