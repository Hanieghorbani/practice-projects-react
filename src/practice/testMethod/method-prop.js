import React, { Component } from 'react'
import User from './user'

export default class MethodProp extends Component {
  constructor(){
    super()

    this.state = {
         users : [
          {id:1,name:'hanie'},
          {id:2,name:'zahra'},
          {id:3,name:'amir'},
          {id:4,name:'mmd'},
         ]
    }
  }

  removeHandler(userId){
    let indexUser = this.state.users.findIndex(user=>{
     return user.id == userId
    })
    let newUser = [...this.state.users]
    newUser.splice(indexUser,1)
    this.setState({
      users:newUser
    })
  }

  render() {
    return (
      <div>
        {this.state.users.map(user=>(
          <User key={user.id} {...user} onRemove={this.removeHandler.bind(this)}/>
        ))}
      </div>
    )
  }
}
