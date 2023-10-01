import React, { Component, useState } from "react"
import Note from "./Note"
import ColorBox from "./ColorBox"
import "./noteApp.css"
import { RiEraserFill } from "react-icons/ri"
import { AiOutlinePlus } from "react-icons/ai"

// export default class NoteApp extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       colors: [
//         "#fff",
//         "#FFD37F",
//         "#FFFA81",
//         "#D5FA80",
//         "#78F87F",
//         "#79FBD6",
//         "#79FDFE",
//         "#7AD6FD",
//         "#7B84FC",
//         "#D687FC",
//         "#FF89FD",
//       ],
//       notes: [],
//       noteTitle: "",
//       inputColor: "#fff",
//     }
//   }

//   inputHandler(e) {
//     this.setState({ noteTitle: e.target.value })
//   }

//   changeColor(color) {
//     this.setState({
//       inputColor: color,
//     })
//   }

//   addNote() {
//     let { notes, noteTitle, inputColor } = this.state

//     if (noteTitle) {
//       let newNote = { id: notes.length + 1, noteTitle, inputColor }
//       this.setState({
//         notes: [...notes, newNote],
//         noteTitle: "",
//         inputColor: "#fff",
//       })
//     }
//   }

  // clearHandler() {
  //   this.setState({ noteTitle: "" })
  // }

//   removeHandler(noteId) {
//     let afterRemove = this.state.notes.filter((note) => {
//       return note.id != noteId
//     })
//     this.setState({
//       notes: afterRemove,
//     })
//   }

//   render() {
//     return (
//       <>
//         <div>
//           <section id="home">
//             <div className="container">
//               <div className="header upper text-center">Note App</div>
//               <br />
//               <br />
//               <div className="flex row-gt-sm">
//                 <div className="flex flex-50-gt-sm">
//                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
//                     <input
//                       id="input-field"
//                       className="form-control"
//                       type="text"
//                       style={{ backgroundColor: this.state.inputColor }}
//                       placeholder="Something here..."
//                       value={this.state.noteTitle}
//                       onChange={this.inputHandler.bind(this)}
//                     />
//                   </div>
//                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
//                     <div id="color-select">
//                       {this.state.colors.map((color) => (
//                         <ColorBox
//                           key={color}
//                           color={color}
//                           onColored={this.changeColor.bind(this)}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 d-flex flex-row-reverse">
//                     <button
//                       id="btn-delete"
//                       type="button"
//                       className="btn btn-outline-danger"
//                       onClick={this.clearHandler.bind(this)}
//                     >
//                       <RiEraserFill />
//                     </button>
//                     <button
//                       id="btn-save"
//                       type="button"
//                       className="btn btn-outline-info"
//                       onClick={this.addNote.bind(this)}
//                     >
//                       <AiOutlinePlus />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex row-gt-sm">
//                 <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
//                   <div className="container">
//                     <div className="row justify-content-center">
//                       <div
//                         id="listed"
//                         className="col-11 col-sm-11 col-md-6 col-lg-4 col-xl-11 p-3 card-columns d-flex flex-wrap justify-content-center"
//                       >
//                         {this.state.notes.map((note) => (
//                           <Note
//                             key={note.id}
//                             {...note}
//                             onRemove={this.removeHandler.bind(this)}
//                           />
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </>
//     )
//   }
// }

export default function NoteApp() {
  const [colors, setColors] = useState([
    "#fff",
    "#FFD37F",
    "#FFFA81",
    "#D5FA80",
    "#78F87F",
    "#79FBD6",
    "#79FDFE",
    "#7AD6FD",
    "#7B84FC",
    "#D687FC",
    "#FF89FD",
  ])
  const [notes,setNotes] = useState([])
  const [noteTitle,setNoteTitle] = useState('')
  const [inputColor,setInputColor] = useState('#fff')

  const inputHandler = (e) => {
    setNoteTitle(e.target.value)
  }

  const changeColor = (color) => {
    setInputColor(color)
  }

  const clearHandler = () => {
    setNoteTitle('')
  }

  const addNote = () => {
    if (noteTitle) {
      setNotes([...notes,{id: notes.length + 1, noteTitle : noteTitle, inputColor:inputColor }])
        setNoteTitle('')
    }
        
  }

  const removeHandler = (noteId)=> {
    setNotes(prevNotes=>{
      let afterRemove = prevNotes.filter((note) => {
        return note.id != noteId
      })
      return afterRemove
    })
  }

  return (
    <>
      <div>
        <section id="home">
          <div className="container">
            <div className="header upper text-center">Note App</div>
            <br />
            <br />
            <div className="flex row-gt-sm">
              <div className="flex flex-50-gt-sm">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                  <input
                    id="input-field"
                    className="form-control"
                    type="text"
                    style={{ backgroundColor: inputColor }}
                    placeholder="Something here..."
                    value={noteTitle}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                  <div id="color-select">
                    {colors.map((color) => (
                      <ColorBox
                        key={color}
                        color={color}
                        onColored={changeColor}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 d-flex flex-row-reverse">
                  <button
                    id="btn-delete"
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={clearHandler}
                  >
                    <RiEraserFill />
                  </button>
                  <button
                    id="btn-save"
                    type="button"
                    className="btn btn-outline-info"
                    onClick={addNote}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex row-gt-sm">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      id="listed"
                      className="col-11 col-sm-11 col-md-6 col-lg-4 col-xl-11 p-3 card-columns d-flex flex-wrap justify-content-center"
                    >
                      {notes.map((note) => (
                        <Note
                          key={note.id}
                          {...note}
                          onRemove={removeHandler}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
