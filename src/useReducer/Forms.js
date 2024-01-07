import React, { useReducer, useState } from "react"

// export default function Forms() {
//   const [name, setName] = useState("")
//   const [age, setAge] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [email, setEmail] = useState("")
//   return (
//     <div className="container m-5 p-5">
//       <input
//       className="form-control border-4"
//       placeholder="name"
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//       className="form-control my-5 border-4"
//       placeholder="age"
//        type="text" value={age} onChange={(e) => setAge(e.target.value)} />
//       <input
//       className="form-control mb-5 border-4"
//       placeholder="lastName"
//         type="text"
//         value={lastName}
//         onChange={(e) => setLastName(e.target.value)}
//       />
//       <input
//       className="form-control border-4"
//       placeholder="email"
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </div>
//   )
// }

function inputHandler(state, action) {
  console.log("state=>>>:", state)
  console.log("action=>>>:", action)

  switch(action.type){
    case 'name' : {
        return {
            name : action.e.target.value
        }
    }
    case 'lastName' : {
        return {
            lastName : action.e.target.value
        }
    }
    case 'email' : {
        return {
            email : action.e.target.value
        }
    }
    case 'age' : {
        return {
            age : action.e.target.value
        }
    }
  }
}

export default function Forms() {
  const [inputs, dispatch] = useReducer(inputHandler, {
    name: "",
    age: "",
    email: "",
    lastName: "",
  })
  console.log('inputs are => ',inputs);
  return (
    <div className="container m-5 p-5">
      <input
        className="form-control border-4"
        placeholder="name"
        type="text"
        value={inputs.name}
        onChange={(e)=>dispatch({ type: "name",e })}
      />
      <input
        className="form-control my-5 border-4"
        placeholder="age"
        type="text"
        value={inputs.age}
        onChange={(e)=>dispatch({ type: "age",e })}
      />
      <input
        className="form-control mb-5 border-4"
        placeholder="lastName"
        type="text"
        value={inputs.lastName}
        onChange={(e)=>dispatch({ type: "lastName",e })}
      />
      <input
        className="form-control border-4"
        placeholder="email"
        type="text"
        value={inputs.email}
        onChange={(e)=>dispatch({ type: "email",e })}
      />
    </div>
  )
}
