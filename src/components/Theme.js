import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, Row, Col } from "react-flexbox-grid"
import { TwitterPicker } from 'react-color'
import { changeTheme } from '../actions/theme'

import Notepad from './Notepad'

const ThemePiker = ({ title, changeHandler, color }) => (
  <React.Fragment>
    <h3>{title}</h3>
    <TwitterPicker
      color={ color }
      onChangeComplete={ changeHandler }
    />
  </React.Fragment>
)

class Theme extends Component {
  state = {
    background: '#fff',
    cardBackground: '#fff',
    cardText: '#fff'
  }

  handleChange = (color, stateProp) => {
    this.setState({ [stateProp]: color.hex })
    this.props.changeTheme({
      [stateProp]: color.hex
    })
  }

  render () {
    const { background, cardBackground, cardText } = this.state
    const noteData = {
      title: 'Title test',
      content: 'Content test'
    }
    return (
      <Grid fluid>
        <h1>Make your own theme!</h1>

        <Row>
          <Col xs={4}>
            <ThemePiker
              title='Background'
              color={background}
              changeHandler={(color) => this.handleChange(color, 'background')}
            />
          </Col>
          <Col xs={4}>
            <ThemePiker
              title='Card'
              color={cardBackground}
              changeHandler={(color) => this.handleChange(color, 'cardBackground')}
            />
            <Notepad
              style={{
                maxWidth: '100%',
                top: '5%',
                left: '50%',
                position: 'relative'
              }}
              bgColor={this.props.theme.cardBackground}
              color={this.props.theme.cardText}
              noteData={JSON.stringify(noteData)}
            />
          </Col>
          <Col xs={4}>
            <ThemePiker
              title='Card Text'
              color={cardText}
              changeHandler={(color) => this.handleChange(color, 'cardText')}
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapStaetToProps = (state) => ({
  theme: state.theme
})

const mapDispatchToProps = (dispatch) => ({
  changeTheme: bindActionCreators(changeTheme, dispatch)
})

export default connect(
  mapStaetToProps,
  mapDispatchToProps
)(Theme)
