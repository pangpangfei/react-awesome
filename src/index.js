import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './static/css/public.css';
import * as serviceWorker from './serviceWorker';
import routers from './routers';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>{routers}</Fragment>
  </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();