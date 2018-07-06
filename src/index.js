import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './redux/configStore';
import App from './App.jsx';
import { createBoard,deleteBoard } from './redux/actions/boardActions';

const store = configStore();

store.dispatch(createBoard({ title: 'Javascript' }));
store.dispatch(createBoard({ title: 'Javascript concepts' }));
// store.dispatch(deleteBoard({ title: "Javascript" }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
