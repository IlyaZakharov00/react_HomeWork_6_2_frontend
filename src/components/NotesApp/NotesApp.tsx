import { NotesList } from "../noteList/NotesList"
import { NotesHeader } from "../noteHeader/NotesHeader"
import { NotesForm } from "../noteForm/NotesForm"
import { TInfo } from "../types/types"
import { useState } from "react"


export const NotesApp = () => {
const [notesFromServer, setNotesFromServer] = useState(undefined)

const deleteNote = async (id:string)=>{
  await deleteNoteFromServer(id)
  await getAllNotesFromServer()
}

const addNote = async (props:string)=>{
  let props_ = {
    text: props, 
    id: "0",
  }
  await sendNoteToServer(props_)
  await getAllNotesFromServer()

}

const sendNoteToServer = async (data:TInfo) => {
  let server_ = "https://react-homework-6-2-backend.onrender.com/notes";
  let method = "POST";
  const body = JSON.stringify(data);


  const response = await fetch(server_, {
    headers: { "Content-Type": "application/json" },
    method,
    body,
  });
  console.log(response, ' response get msg to server')
  return response;
};

const deleteNoteFromServer = async (id:string) => {
  let server_ = `https://react-homework-6-2-backend.onrender.com/notes/${id}`;
  let method = "DELETE";


  const response = await fetch(server_, {
    headers: { "Content-Type": "application/json" },
    method,
  });
  console.log(response, ' response delete msg from server')
  return response;
};

const getAllNotesFromServer = async () => {
  let server_ = "https://react-homework-6-2-backend.onrender.com/notes";
  let method = "GET";

  const response = await fetch(server_, {
    headers: { "Content-Type": "application/json" },
    method,
  }).then((response_) => {
    return response_.json();
  });

  console.log(response, ' response get all msg from server');
  setNotesFromServer(response)
  return response;
};

  return (
    <div className="container">
        <NotesHeader getNotes = {getAllNotesFromServer}/>
        <NotesList notesFromServer = {notesFromServer} deleteNote = {deleteNote} />
        <NotesForm addNote={addNote}/>
    </div>
  )
}
