import React, { Component } from "react"

export default class Temp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: 10,
      tempClass: "bg-info",
    } 
  }


  add() {

    if (this.state.temp >= 30) {
      return false
    }

    if (this.state.temp >= 15) {
      this.setState({ tempClass: "bg-danger" })
    }
    this.setState((prevS) => {
      return { temp: prevS.temp + 1 }
     
    })
  }

  lower() {


    if (this.state.temp <= 0) {
      return false
    }
    if (this.state.temp < 15) {
       this.setState({ tempClass: "bg-info" })
    }
    this.setState((prevS) => {
      return { temp: prevS.temp - 1 }
    })
  }

  //   if (this.state.temp >= 15) {
  //     console.log('no no');
  //   }

  render() {
    return (
      <div className="bg-success w-25 shadow-lg rounded-3 d-flex flex-column align-items-center mx-auto mt-5 py-5 ">
        <div
          className={`d-flex ${this.state.tempClass} rounded-circle p-5 border border-white mb-5 text-white`}
        >
          <h1>{this.state.temp}</h1>
          <h1>°C</h1>
        </div>
        <div>
          <button
            className="btn btn-secondary rounded-circle border-2 border-white me-4 py-3 px-4 fw-bold fs-2"
            onClick={this.add.bind(this)}
          >
            +
          </button>
          <button
            className="btn btn-secondary rounded-circle border-2 border-white py-3 px-4 fw-bold fs-2"
            onClick={this.lower.bind(this)}
          >
            -
          </button>
        </div>
      </div>
    )
  }
}
