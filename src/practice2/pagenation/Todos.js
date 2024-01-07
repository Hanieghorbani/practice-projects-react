import React, { useEffect, useRef, useState } from "react"
import "./pageTodos.css"
export default function Todos() {
  const [todos, setTodos] = useState([])
  const [pageTodos, setPageTodos] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const pageSize = 10
  const pageCount = Math.ceil(todos.length / pageSize)
  const pageNumbers = Array.from(Array(pageCount).keys())

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas)
        setPageTodos(datas.slice(pageSize * (currPage - 1), pageSize * currPage))
      })
  }, [])

  useEffect(() => {
    setPageTodos(todos.slice(pageSize * (currPage - 1), pageSize * currPage))
  }, [currPage])

  return (
    <div className="todos">
      {!todos ? (
        "Loading"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {pageTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td>{todo.title}</td>
                <td>
                  <p
                    className={
                      todo.completed ? "btn btn-success" : "btn btn-danger"
                    }
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <nav className="d-flex justify-content-center">
        <ul class="pagination">
          {pageNumbers &&
            pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber + 1}
                className={
                  pageNumber + 1 == currPage ? "page-item active" : "page-item"
                }
                onClick={() => setCurrPage(pageNumber + 1)}
              >
                <span class="page-link">{pageNumber + 1}</span>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}
