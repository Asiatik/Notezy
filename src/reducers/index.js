import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import messageReducer from './message';

const rootReducer = combineReducers({
  form: formReducer,
  message:messageReducer
});

export default rootReducer;
