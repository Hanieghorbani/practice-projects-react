import React, { Component } from "react"

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count:0
    }
  }
  render() {
    return(
      <div className="bg-dark text-white d-flex justify-content-center flex-column align-items-center w-50 mt-5 mx-auto py-4">
        <h1>counter</h1>
        <h3 className="my-5">{this.state.count}</h3>
        <div>
          <button className="btn btn-success me-5" onClick={this.addCount.bind(this)}>add count</button>
          <button className="btn btn-danger" onClick={this.lowerCount.bind(this)}>lower count</button>
        </div>
      </div>
    )
  }
  

  addCount(){
     this.setState((prevState)=>{
          return {count : prevState.count + 1}
     })
  }

  lowerCount(){
      this.setState((prevState)=>{
          return {count : prevState.count - 1}
      })
  }
}
