import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

// injectTapEventPlugin(); // removed this because https://github.com/zilverline/react-tap-event-plugin#deprecated
const persistedReducer = persistReducer(persistConfig, reducers);
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(persistedReducer);
const persistor = persistStore(store);

const Main = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <MuiThemeProvider>
          <main>
            <Switch>
              <Route path='/' component={App}/>
            </Switch>
          </main>
      </MuiThemeProvider>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(
      <Main />

  , document.getElementById('root'));
  registerServiceWorker();
