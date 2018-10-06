import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Snackbar from "material-ui/Snackbar";
import * as actions from "./actions";
import Home from "./components/Home";
import Theme from "./components/Theme";

import "./App.css";
class App extends Component {
  closeSnackbar = () => {
    this.props.hideMessage();
    console.log("hideMessage");
  };
  render() {
    var snackbarOpen = false;
    var snackbarMessage = "";
    if (
      typeof this.props.message.payload !== "undefined" &&
      this.props.message.payload.show === true
    ) {
      snackbarOpen = this.props.message.payload.show;
      snackbarMessage = this.props.message.payload.message;
    }

    const theme = {
      backgroundColor: this.props.theme.background
    }

    return (
      <div className="app-wrap" style={theme}>
        <link href='https://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css' />
        <Route exact path="/" component={Home} />
        <Route path="/theme" component={Theme} />
        {/*message*/}
        <Snackbar
          open={snackbarOpen}
          message={snackbarMessage}
          autoHideDuration={4000}
          onRequestClose={() => this.closeSnackbar()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    theme: state.theme
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
