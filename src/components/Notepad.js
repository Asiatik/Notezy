import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "react-flexbox-grid";
import { Card } from "material-ui/Card";
import * as actions from "../actions";
import TextField from "material-ui/TextField";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

class Notepad extends Component {
  state = { rotate: 1 };

  handleChange = event => {
    let noteData = JSON.parse(this.props.noteData);
    console.log(event.target.name);
    if (event.target.name === "title") {
      noteData.title = event.target.value;
    } else if (event.target.name === "message") {
      noteData.content = event.target.value;
    }
    console.log(noteData);
    this.props.updateNote(noteData);
  };

  render() {
    const styles = {
      cardTitle: {
        fontFamily: "Gloria Hallelujah, cursive",
        width: "100%",
        backgroundColor: "transparent",
        border: "none"
      }
    };
    return (
      <Col xs={12} md={3} className="notepad-wrap">
        <Card className="sticky">
          <div>
            <input
              hintText="Title"
              fullWidth={true}
              value={JSON.parse(this.props.noteData).title}
              name="title"
              onChange={this.handleChange}
              placeholder="Title..."
            />
            <textarea
              id="message"
              name="message"
              className="form-control"
              required=""
              value={JSON.parse(this.props.noteData).content}
              onChange={this.handleChange}
              placeholder="Things you want to say.."
            />
          </div>
          <div>
            <IconButton
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px" }}
              onClick={this.props.remove}
            >
              <Delete />
            </IconButton>
          </div>
        </Card>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  actions
)(Notepad);
