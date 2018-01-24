import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as JwtDecode from 'jwt-decode';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { UserStore } from './types';
import { userLoggedIn } from './actions/index';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (sessionStorage.getItem('bookwormJWT')) {
  const token: string = sessionStorage.getItem('bookwormJWT') || '';
  const decoded: any = JwtDecode(token);
  const user: UserStore = {
    email: decoded.email,
    token
  };
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
