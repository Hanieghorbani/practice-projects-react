import React, { Component } from "react"
import "./style.css"
export default class NotifCount extends Component {
  constructor() {
    super()
    this.state = {
      notifs: [
        "notif1",
        "notif2",
        "notif3",
        "notif4",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
        "notif5",
      ],
    }
  }
  render() {
    return (
      <div className="bg-dark text-white d-flex align-items-center nav-div p-3">
        <h1 className="me-5">hello world</h1>

        {this.state.notifs.length > 0 && (
          <div className="position-relative">
            <p className="position-absolute rounded-pill p-1 text-dark">
              {this.state.notifs.length}
            </p>
            <h3 className="text-secondary">NEWS</h3>
          </div>
        )}
      </div>
    )
  }
}
