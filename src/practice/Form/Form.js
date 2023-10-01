import React, { useState ,useEffect} from "react"
import "./Form.css"

export default function Form(props) {
  const [firstNameData, setFirstNameData] = useState("")
  const [lastNameData, setLastNameData] = useState("")
  const [emailData, setEmailData] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [allValid, setAllValid] = useState(false)

  function submitBtn(e) {
    e.preventDefault()
    setSubmitted(true)
    if (firstNameData && lastNameData && emailData) {
      setAllValid(true)

      let userObj = {
        firstNameData,
        lastNameData,
        emailData
      }

      fetch('https://react-test-1-dc233-default-rtdb.firebaseio.com/users.json',{
        method:'POST',
        body:JSON.stringify(userObj)
      }).then(res=>console.log(res))

      setTimeout(() => {
        setEmailData("")
        setFirstNameData("")
        setLastNameData("")
        setAllValid(false)
        setSubmitted(false)
      }, 3000)

    
    }
  }


  function firstNameHandler(e) {
    setFirstNameData(e.nativeEvent.target.value)
  }

  function lastNameHandler(e) {
    setLastNameData(e.nativeEvent.target.value)
  }

  function emailHandler(e) {
    setEmailData(e.nativeEvent.target.value)
  }

  

  return (
    <div className="form-container">
      <form className="register-form" autoComplete="off">
        {allValid && (
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
          value={firstNameData}
          onChange={firstNameHandler}
        />
        {submitted && !firstNameData && (
          <span id="first-name-error">Please enter a first name</span>
        )}

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={lastNameData}
          onChange={lastNameHandler}
        />
        {submitted && !lastNameData && (
          <span id="first-name-error">Please enter a last name</span>
        )}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={emailData}
          onChange={emailHandler}
        />
        {submitted && !emailData && (
          <span id="first-name-error">Please enter an email address</span>
        )}

        <button className="form-field" type="submit" onClick={submitBtn}>
          Register
        </button>
      </form>
    </div>
  )
}
