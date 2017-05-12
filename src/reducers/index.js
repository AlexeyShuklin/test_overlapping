import {
  RESTART
} from '../actions'

export default createReducer(

  {},

  {
    [ RESTART ] (state, action) {

		let { points } = state;
		return {
		...state,
		points: [].concat(action.points)
		}

    }
  }
)


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
