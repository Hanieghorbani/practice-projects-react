import React, { Component } from 'react'

export default class ColorBox extends Component {
  clickHandler(color){
    this.props.onColored(color)
  }
    render() {
        return (
            <div className='color-box' style={{backgroundColor: this.props.color}} onClick={this.clickHandler.bind(this,this.props.color)}>
            </div>
        )
    }
}
