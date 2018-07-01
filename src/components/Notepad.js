import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "react-flexbox-grid";
import { Card } from "material-ui/Card";
import * as actions from "../actions";
import TextField from "material-ui/TextField";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

class Notepad extends Component {
  state = {};

  handleChange = event => {
    let noteData = JSON.parse(this.props.noteData);
    console.log(event.target.name);
    if (event.target.name === "title") {
      noteData.title = event.target.value;
    } else if (event.target.name === "content") {
      noteData.content = event.target.value;
    }
    console.log(noteData);
    this.props.updateNote(noteData);
  };

  render() {
    const styles = {
      card: {
        padding: "20px",
        marginBottom: "20px"
      }
    };
    return (
      <Col xs={12} md={4} className="notepad-wrap">
        <Card style={styles.card}>
          <div>
            <TextField
              hintText="Title"
              fullWidth={true}
              value={JSON.parse(this.props.noteData).title}
              name="title"
              onChange={this.handleChange}
            />
            <textarea
              id="message"
              name="message"
              className="form-control"
              required=""
              placeholder="Things you want to say.."
            />
            {/* <TextField
                        hintText="Your Notes.."
                        value={JSON.parse(this.props.noteData).content}
                        name="content"
                        fullWidth={true}
                        rows={4}
                        multiLine={true}
                        onChange={this.handleChange}
                    /> */}
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
