import {
  CHANGE_THEME
} from "../actions/types"

const initialState = {
  background: '#aa73ff',
  cardBackground: 'yellow',
  cardText: 'rgb(57, 57, 57)'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
    console.log(action.payload)
      return {
        ...state,
        [Object.keys(action.payload)[0]]: Object.values(action.payload)[0]
      };
    default:
      return state;
  }
}
