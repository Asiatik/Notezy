import {
  SHOW_MESSAGE
} from './../actions/types';

export default function(state = {},action){
  switch(action.type){
    case SHOW_MESSAGE:
    return {...state,payload:action.payload};
  }
  return state;
}
