import { NoteItem } from "../notesItem/NoteItem"
import { TList } from "../types/types"

export const NotesList = (props:TList) => {
  const {deleteNote, notesFromServer} = props
  return (
    <div className="container-notes">
      <ul className="notes-list">
        {notesFromServer? notesFromServer.map((item, index)=>{ 
          return(
          <NoteItem key = {index} info = {item} deleteNote = {deleteNote}/>
          )
        }): null}
      </ul>
    </div>
  )
}
