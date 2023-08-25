import React, { Component } from 'react'
import {BiSolidUserRectangle} from 'react-icons/bi'
import {BsChatHeart} from 'react-icons/bs'
import {MdLanguage} from 'react-icons/md'

export default class User extends Component {
  render() {
    return (
      <div className='border'>
        <h1 style={{ color : 'red' }}>id ={this.props.id} <BiSolidUserRectangle /></h1>
        <h1 style={{background:'pink',color:'white'}}>name ={this.props.name} <BsChatHeart /></h1>
        <h1 style={{color:'green'}}>age ={this.props.age} <MdLanguage /></h1>
      </div>
    )
  }
}
