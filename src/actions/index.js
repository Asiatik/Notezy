import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SHOW_MESSAGE} from './types';

export function hideMessage(){
  return function(dispatch){
    dispatch({type:SHOW_MESSAGE,payload:{show:false,message:""}});
  }
}
export function showMessage(str){
  return function(dispatch){
    dispatch({type:SHOW_MESSAGE,payload:{show:true,message:str}});
  }
}

export function postRequest(url,values,type="entry",errMessage="Error! Email or Phone already taken"){
  return function(dispatch){
    axios.post(url, values).then(function(response) {
      var message="Success! Added a new "+type;
      dispatch({type:SHOW_MESSAGE,payload:{show:true,message:message}});
      console.log(response.data);
    }).catch(function(error) {
      dispatch({type:SHOW_MESSAGE,payload:{show:true,message:errMessage}});
      console.log("error response");
      console.log(error);

    });

  }
}

  //
  // export function signinUser({email,password}){
  //   return function(dispatch){
  //   //submit email, password to server.
  //   axios.post(`${ROOT_URL}/signin`, {email,password})
  //   .then(response =>{
  //     //if request is good...
  //     // - update state to indicate user is authenticated
  //     dispatch({type: AUTH_USER});
  //     //save jwt
  //     localStorage.setItem('token',response.data.token);
  //       // redirect to route '/feature
  //       browserHistory.push('/feature');
  //
  //
  //   })
  //   .catch(()=>{
  //     // dispatch(authError(response.data.errorx));
  //     dispatch({type: AUTH_USER});
  //     //save jwt
  //     localStorage.setItem('token','toeknsecret');
  //       // redirect to route '/feature
  //       browserHistory.push('/feature');
  //   });
  //
  // }
  // }
