import React, { Component } from 'react'

export default class User extends Component {
  clickHandler(id){
      this.props.onRemove(id)
  }
  render() {
    return (
      <div>
        <h1>{this.props.name} <button 
        onClick={this.clickHandler.bind(this,this.props.id)}
        >remove</button></h1>
      </div>
    )
  }
}
