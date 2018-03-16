import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Grid, Col, Row} from 'react-flexbox-grid';
import _ from 'lodash';
import * as actions from './../actions';
import Notepad from './Notepad';


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            notesData:[
                {
                    id:0,
                    title:"",
                    content:""
                }
            ]
        }
    }
    updateNote = (noteDataReceived) =>{
        let {notesData}=this.state;
        console.log("Received in props:");
        var  noteData=noteDataReceived;;
        var index = _.findIndex(notesData, {id:noteData.id});
        console.log(index);
        // Replace item at index using native splice
        notesData.splice(index, 1, noteData);
        this.setState({notesData:notesData});
    }
    handleAddNotepad = (event) =>{
        console.log("Length:"+this.state.notesData.length);
        let newNoteData={
            id:this.state.notesData.length,
            title:"",
            content:""
        }
        let notesData=this.state.notesData;
        notesData.push(newNoteData);
        this.setState({notesData});
    }
    render() {
        const styles={
            floatingButton:{
                marginRight:"20px",
                position:"fixed",
                right:"20px",
                bottom:"20px"
            }
        }
        return (
            <div className="home-wrap">
                <h1 style={{textAlign:"center"}}>Notezy</h1>
                <Grid fluid>
                    <Row>
                        {this.state.notesData.map((noteData)=>{
                            return (
                                <Notepad key={noteData.id} noteData={JSON.stringify(noteData)} updateNote={this.updateNote} />
                            )
                        })}
                    </Row>
                </Grid>
                <FloatingActionButton style={styles.floatingButton} onClick={this.handleAddNotepad}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
    };
}

export default connect(mapStateToProps,actions)(Home);
