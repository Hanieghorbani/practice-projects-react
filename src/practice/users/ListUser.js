import React, { Component } from "react"
import User from "./User"

export default class ListUser extends Component {
  state = {
    users: [
      { id: 1, name: "hanie", age: 20 },
      { id: 2, name: "mina", age: 24 },
      { id: 3, name: "zahra", age: 18 },
      { id: 4, name: "fateme", age: 27 },
      { id: 5, name: "mmd", age: 19 },
      { id: 6, name: "amir", age: 30 },
    ],
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => (
            <div key={user.id}>
                <User {...user} />
            </div>
            
        ))}
      </div>
    )
  }
}
