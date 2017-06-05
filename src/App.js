import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';
import Snackbar from 'material-ui/Snackbar';

class App extends Component {

  closeSnackbar=()=>{
    this.props.hideMessage();
    console.log("hideMessage");
}
  render() {
    var snackbarOpen=false;
    var snackbarMessage="";
    if(typeof this.props.message.payload !=='undefined' && this.props.message.payload.show==true){
      snackbarOpen=this.props.message.payload.show
      snackbarMessage = this.props.message.payload.message;
}
    return (
      <div className="app-wrap">
        <h1>Welcome to react</h1>
        <button onClick={()=>this.props.showMessage("Hello")}>Click me to message</button>
        <Snackbar
          open ={snackbarOpen}
          message={snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={()=>this.closeSnackbar()}
        />
        {/* <Route exact path='/' component={Home}/>
          <Route exact path='/test' component={TestingComponent}/>
        <Route path="/coaching" component={Coachings} /> */}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    message:state.message
  };
}

export default connect(mapStateToProps,actions)(App);
