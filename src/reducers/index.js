import { combineReducers } from 'redux';
import messageReducer from './message';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  form: formReducer,
  message:messageReducer
});

export default rootReducer;
