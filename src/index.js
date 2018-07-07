import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import App from './App.jsx';
import { createBoard,deleteBoard } from './redux/actions/boardActions';

const store = configStore();

store.dispatch(createBoard({ title: 'Javascript' }));
store.dispatch(createBoard({ title: 'avascript' }));
store.dispatch(createBoard({ title: 'Javascrip' }));
store.dispatch(createBoard({ title: 'Javacipt' }));
store.dispatch(createBoard({ title: 'Javasript' }));
store.dispatch(createBoard({ title: 'Javacript' }));
store.dispatch(createBoard({ title: 'Javascript concept' }));
store.dispatch(createBoard({ title: 'Jaascript concts' }));
store.dispatch(createBoard({ title: 'Javascript cocepts' }));
store.dispatch(createBoard({ title: 'Javscript concpts' }));
store.dispatch(createBoard({ title: 'Jaascript concepts' }));
store.dispatch(createBoard({ title: 'Javascrpt cocepts' }));
store.dispatch(createBoard({ title: 'Javascript cncepts' }));
store.dispatch(createBoard({ title: 'Javacript oncepts' }));
// store.dispatch(deleteBoard({ title: "Javascript" }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
