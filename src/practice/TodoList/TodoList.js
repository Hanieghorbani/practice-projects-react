import React, { Component, useState } from "react"
import Header from "./Header"
import Todo from "./Todo"
import "./todoList.css"
import { AiOutlinePlus } from "react-icons/ai"

// export default class TodoList extends Component {
//   constructor(props) {
//     super(props)
//     console.log("constructor in todo list")
//     this.state = {
//       todos: [],
//       todoTitle: "",
//       status: "all",
//     }
//   }

//   componentDidMount() {
//     console.log("componentDidMount in todo list")
//   }

//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate in todo list")
//     return true
//   }

//   static getDeriverStateFromProps() {
//     console.log("getDeriverStateFromProps in todo list")
//   }

//   inputHandler(e) {
//     this.setState({
//       todoTitle: e.target.value,
//     })
//   }

//   addHandler(e) {
//     e.preventDefault()
//     if (this.state.todoTitle) {
//       this.setState({
//         todos: [
//           ...this.state.todos,
//           {
//             id: this.state.todos.length + 1,
//             title: this.state.todoTitle,
//             completed: false,
//           },
//         ],
//         todoTitle: "",
//       })
//     }
//   }

//   completeHandler(todoId) {
//     // روش اول
//     // let completeTodo = this.state.todos.map((todo) => {
//     //   if (todo.id == todoId) {
//     //     return { id: todo.id, title: todo.title, completed: !todo.completed }
//     //   } else {
//     //     return todo
//     //   }
//     // })

//     //    روش دوم
//     let newTodo = [...this.state.todos]
//     newTodo.forEach((todo) => {
//       if (todo.id == todoId) {
//         todo.completed = !todo.completed
//       }
//     })
//     this.setState({
//       //   todos: completeTodo,
//       todo: newTodo,
//     })
//   }

//   statusHandler(e) {
//     this.setState({
//       status: e.target.value,
//     })
//   }

//   removeHandler(todoId) {
//     let afterRemove = this.state.todos.filter((todo) => {
//       return todo.id != todoId
//     })

//     this.setState({ todos: afterRemove })
//   }

// render() {
//   console.log("render in todo list")
//   return (
//     <>
//       <Header />
//       <form className="form">
//         <input
//           type="text"
//           value={this.state.todoTitle}
//           className="todo-input"
//           maxLength="40"
//           onChange={this.inputHandler.bind(this)}
//         />
//         <button className="todo-button" onClick={this.addHandler.bind(this)}>
//           <AiOutlinePlus />
//         </button>
//         <div className="select">
//           <select
//             name="todos"
//             className="filter-todo"
//             value={this.state.status}
//             onChange={this.statusHandler.bind(this)}
//           >
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="uncompleted">Uncompleted</option>
//           </select>
//         </div>
//       </form>

//       <div className="todo-container">
//         <ul className="todo-list">
//           {this.state.status == "all" &&
//             this.state.todos.map((todo) => (
//               <Todo
//                 key={todo.id}
//                 {...todo}
//                 onCompleted={this.completeHandler.bind(this)}
//                 onRemove={this.removeHandler.bind(this)}
//               />
//             ))}
//           {this.state.status == "completed" &&
//             this.state.todos
//               .filter((todo) => todo.completed)
//               .map((todo) => (
//                 <Todo
//                   key={todo.id}
//                   {...todo}
//                   onCompleted={this.completeHandler.bind(this)}
//                   onRemove={this.removeHandler.bind(this)}
//                 />
//               ))}

//           {this.state.status == "uncompleted" &&
//             this.state.todos
//               .filter((todo) => !todo.completed)
//               .map((todo) => (
//                 <Todo
//                   key={todo.id}
//                   {...todo}
//                   onCompleted={this.completeHandler.bind(this)}
//                   onRemove={this.removeHandler.bind(this)}
//                 />
//               ))}
//         </ul>
//       </div>
//     </>
//   )
// }
// }

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("")
  const [status, setStatus] = useState("all")

  const inputHandler = (e) => {
    setTodoTitle(e.target.value)
  }
  const addHandler = (e) => {
    e.preventDefault()
    if (todoTitle) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: todoTitle,
          completed: false,
        },
      ])
      setTodoTitle("")
    }
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  const completeHandler = (todoId) => {
    let newTodo = [...todos]
    newTodo.forEach((todo) => {
      if (todo.id == todoId) {
        todo.completed = !todo.completed
      }
    })
    setTodos(newTodo)
  }

  const removeHandler = (todoId) => {
    setTodos((prevTodos) => {
      let afterRemove = prevTodos.filter((todo) => {
        return todo.id != todoId
      })
      return afterRemove
    })
  }

  return (
    <>
      <Header />
      <form className="form">
        <input
          type="text"
          value={todoTitle}
          className="todo-input"
          maxLength="40"
          onChange={inputHandler}
        />
        <button className="todo-button" onClick={addHandler}>
          <AiOutlinePlus />
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            value={status}
            onChange={statusHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {status == "all" &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                onCompleted={completeHandler}
                onRemove={removeHandler}
              />
            ))}
          {status == "completed" &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onCompleted={completeHandler}
                  onRemove={removeHandler}
                />
              ))}

          {status == "uncompleted" &&
            todos
              .filter((todo) => !todo.completed)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  {...todo}
                  onCompleted={completeHandler}
                  onRemove={removeHandler}
                />
              ))}
        </ul>
      </div>
    </>
  )
}
