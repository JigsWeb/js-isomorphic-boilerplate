import {
  SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILLURE,
  SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILLURE,
  LOAD
} from './actions'

export function load(){
  return { type: LOAD }
}

export function signin(data){
  return { types: [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILLURE], data }
}

export function signup(data){
  return { types: [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILLURE], data }
}