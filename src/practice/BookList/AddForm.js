import React, { Component } from "react"
import Book from "./Book"

export default class AddForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      title: "",
      author: "",
      year: "",
    }
    this.arrayBooks = [] 
  }

  

  titleHandler(e) {
    this.setState({ title: e.target.value })
  }

  authorHandler(e) {
    this.setState({ author: e.target.value })
  }

  yearHandler(e) {
    this.setState({ year: e.target.value })
  }

  addHandler(e){
    e.preventDefault()
    let {title,author,year} = this.state
    if (title && author && year) {

        let newBook = {
            id:this.arrayBooks.length + 1,
            title,
            author,
            year
        }

         this.setState({
            books : [...this.state.books,newBook],
            title:'',
            year:'',
            author:''
         })
    }
   
  }

  render() {
    return (
      <div className="mx-5">
        <form id="book-form" autocomplete="off">
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={this.state.title}
              onChange={this.titleHandler.bind(this)}
            />
          </div>

          <div className="form-group my-3">
            <label for="author">Author</label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={this.state.author}
              onChange={this.authorHandler.bind(this)}
            />
          </div>

          <div className="form-group">
            <label for="year">Year</label>
            <input
              type="text"
              id="year"
              className="form-control"
              value={this.state.year}
              onChange={this.yearHandler.bind(this)}
            />
          </div>
          <button
            className="col-12 btn btn-warning btn-block add-btn"
            onClick={this.addHandler.bind(this)}
          >Add Book</button>
        </form>
        <table className="table table-striped mt-5 text-center">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody id="book-list">
          {this.state.books.map(book=>(
            <Book key={book.id} {...book}/>
          ))}
            
          </tbody>
        </table>
      </div>
    )
  }
}
