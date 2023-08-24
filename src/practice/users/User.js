import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div className='border'>
        <h1>id ={this.props.id}</h1>
        <h1>name ={this.props.name}</h1>
        <h1>age ={this.props.age}</h1>
      </div>
    )
  }
}
