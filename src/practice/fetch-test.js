import React, { Component } from "react"
import { Alert, Table } from "react-bootstrap"
export default class FetchTest extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
  }

  render() {
    return (
      <div className="container mt-5">
        {this.state.users.length ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Alert variant="info">Loading...</Alert>
        )}
      </div>
    )
  }
}
