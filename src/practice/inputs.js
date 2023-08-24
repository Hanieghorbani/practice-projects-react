import React, { Component } from "react"

export default class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "",
      textareaVal : '',
      isLogin : false
    }
  }

  inputHandler(e) {
    this.setState({
      userName: e.nativeEvent.target.value,
    })
  }

  textareaHandler(e) {
    this.setState({
      textareaVal: e.nativeEvent.target.value,
    })
  }

  checkHandler(e){
      this.setState({
        isLogin : e.nativeEvent.target.checked
      })
  }

  render() {
    return (
      <div className="m-5">
        <h1>userName : {this.state.userName}</h1>
        <p>text :{this.state.textareaVal}</p>
        <p>is login : {String(this.state.isLogin)}</p>
        <input
          className="form-control"
          type="text"
          value={this.state.userName}
          onChange={this.inputHandler.bind(this)}
        />

        <textarea
        className="form-control my-5"
          value={this.state.textareaVal}
          onChange={this.textareaHandler.bind(this)}
        ></textarea>


        <label htmlFor="checkbox">is login</label>
        <input id="checkbox" type="checkbox" checked={this.state.isLogin} onChange={this.checkHandler.bind(this)}/>
      </div>
    )
  }
}
