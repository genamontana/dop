import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import App1 from './dop1/App1';
import App2 from './dop2/App2';
import {BrowserRouter} from 'react-router-dom';
//import App3 from './dop3/App3';
//import App4 from './dop4/App4';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App2/>
    </BrowserRouter>
    /*
    <React.StrictMode>
        {/!*<App/>*!/}
        {/!*<App1/>*!/}
        {/!*<App2/>*!/}
        {/!*<App3/>*!/}
        {/!* <App4/>*!/}
    </React.StrictMode>
    */
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
