import {
  SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILLURE,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILLURE,
  LOAD
} from './actions'

let initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case LOAD:
      return {...state, user: null};
    case SIGNIN:
      return {...state};
    case SIGNIN_SUCCESS:
      return {...state};
    case SIGNIN_FAILLURE:
      return {...state};
    case SIGNUP:
      return {...state};
    case SIGNUP_SUCCESS:
      return {...state};
    case SIGNUP_FAILLURE:
      return {...state};
    default:
      return {...state};
  }
}