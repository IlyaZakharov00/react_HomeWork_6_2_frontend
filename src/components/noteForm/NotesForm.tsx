import { useState } from "react"
import { TForm } from "../types/types"

export const NotesForm = (props:TForm) => {

  const addNote = props.addNote
  const [note, setNote] = useState("")
  
  
  const headnlerSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    addNote(note);
  }

  const heandlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }

  return (
    <>
      <form className="form form-note" onSubmit={headnlerSubmit}>
        <label className="form-name">New Note</label>
        <input className ="input input-note" type="text" placeholder="Введите заметку" onChange={heandlerChange}/>
        <button type="submit" className="btn btn-submit">отправить</button>
      </form>
    </>
  )
}
