import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  {Stateprovider}  from './datalayer'
import App from './App';
import reportWebVitals from './reportWebVitals';
import  reducer,{ initialState }  from './reducer';


ReactDOM.render(
<React.StrictMode>
<div>
 <Stateprovider initialState={initialState} reducer={reducer}>
  <App />
 </ Stateprovider>
</div>
</React.StrictMode>,
document.getElementById('root')

);

reportWebVitals();
