import { logDOM } from "@testing-library/react"
import React from "react"
import { useState, useMemo } from "react"

export default function MemoHook2() {
  const [value, setValue] = useState("")
  const [notes, setNotes] = useState([])

  function addNote() {
    let newNote = {
      id: notes.length + 1,
      title: value,
    }

    setNotes((prev) => [...prev, newNote])
    setValue("")
  }
  return (
    <div className="m-5">
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="btn btn-secondary ms-5" onClick={addNote}>
        add
      </button>
      <div>
        <h1>all notes</h1>
        <ol>
          {notes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ol>
      </div>
      <hr />

      <div>
        <h1>js notes</h1>
        <ol>
          <FilteredNotes allNotes={notes}/>
        </ol>
      </div>
    </div>
  )
}

const FilteredNotes = ({allNotes}) => {
  return (
    <>
      {useMemo(() => {
        return allNotes
          .filter((note) => {
            console.log('filter')
            return note.title.includes("js")
          })
          .map((note) => <li key={note.id}>{note.title}</li>)
      }, [allNotes])}
    </>
  )
}
