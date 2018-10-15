import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Col } from "react-flexbox-grid";
import Card from "@material-ui/core/Card";
import * as actions from "../actions";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

class Notepad extends PureComponent {

  constructor(props) {
    super(props);
  }

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

  onDragStart = event => {
    event.dataTransfer.effectAllowed = "move";
    event.currentTarget.classList.add("growCardMoving");   
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
  };

  onDrop = event => {
    event.preventDefault();
    console.log('drop');
    if (event.currentTarget.classList.contains("notepad-wrap")) {
      let data = event.dataTransfer.getData("text/plain");
      let childNode = event.currentTarget.firstChild;
      let replaceNode = document.getElementById(data);
      let parentReplaceNode = replaceNode.parentNode;
      let parentChildNode = childNode.parentNode;
      parentReplaceNode.replaceChild(childNode, replaceNode); 
      childNode.classList.remove("growCardMoving");
      parentChildNode.appendChild(replaceNode);                   
      replaceNode.classList.remove("growCardMoving", "hideCard");
    }    
  }

  onDragEnd = event => {
    event.preventDefault();
    console.log('end');
    if (event.currentTarget.classList.contains('notepad-wrap') && event.currentTarget.firstChild) {
      event.currentTarget.firstChild.classList.remove("growCardMoving", "hideCard");
    }
  }

  onDragLeave = event => {
    event.preventDefault();
    console.log("leave")
    document.querySelectorAll('.growCardMoving').forEach(element => {
      element.classList.remove('growCardMoving')
    })
  }

  onDragOver = event => {
    event.preventDefault();
    console.log('over');
    if (!event.currentTarget.firstChild.classList.contains('growCardMoving')) {  
      event.currentTarget.firstChild.classList.add('growCardMoving');
      event.dataTransfer.dropEffect = "move";   
    }
  }

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
     <Col      
      xs={12} md={3} className="notepad-wrap"
      onDrop={this.onDrop}
      onDragOver={this.onDragOver}    
      onDragLeave={this.onDragLeave}
      onDragEnd={this.onDragEnd}
      id={`Col-${JSON.parse(this.props.noteData).id}`}
     >
        <Card    
        id={`Card-${JSON.parse(this.props.noteData).id}`}     
        className="sticky"
        draggable="true"
        onDragStart={this.onDragStart}
        >
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
