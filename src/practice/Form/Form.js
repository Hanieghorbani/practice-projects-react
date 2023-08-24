import React from "react"
import "./Form.css"

export default class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstNameData: "",
      lastNameData: "",
      emailData: "",
      submitted: false,
      allValid: false,
    }
  }

  submitBtn(e) {
    e.preventDefault()
    this.setState({
      submitted: true,
    })

    if (
      this.state.firstNameData &&
      this.state.lastNameData &&
      this.state.emailData
    ) {
      this.setState({
        allValid: true,
      })
      setTimeout(() => {
        this.setState({
          allValid: false,
        })
      }, 3000)
    } else {
    }
  }

  firstNameHandler(e) {
    this.setState({
      firstNameData: e.nativeEvent.target.value,
    })
  }

  lastNameHandler(e) {
    this.setState({
      lastNameData: e.nativeEvent.target.value,
    })
  }

  emailHandler(e) {
    this.setState({
      emailData: e.nativeEvent.target.value,
    })
  }

  render() {
    return (
      <div className="form-container">
        <form className="register-form" autoComplete="off">
          {this.state.allValid && (
            <div className="success-message">
              Success! Thank you for registering
            </div>
          )}

          <input
            id="first-name"
            className="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstNameData}
            onChange={this.firstNameHandler.bind(this)}
          />
          {this.state.submitted && !this.state.firstNameData && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          <input
            id="last-name"
            className="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastNameData}
            onChange={this.lastNameHandler.bind(this)}
          />
          {this.state.submitted && !this.state.lastNameData && (
            <span id="first-name-error">Please enter a last name</span>
          )}

          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.emailData}
            onChange={this.emailHandler.bind(this)}
          />
          {this.state.submitted && !this.state.emailData && (
            <span id="first-name-error">Please enter an email address</span>
          )}

          <button
            className="form-field"
            type="submit"
            onClick={this.submitBtn.bind(this)}
          >
            Register
          </button>
        </form>
      </div>
    )
  }
}
