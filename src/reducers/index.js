import { combineReducers } from 'redux';
import messageReducer from './message';
import theme from './theme'
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  form: formReducer,
  message: messageReducer,
  theme
});

export default rootReducer;
