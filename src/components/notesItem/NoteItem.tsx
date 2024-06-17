import { TItem } from "../types/types";

export const NoteItem = (props:TItem) => {
  const { info, deleteNote } = props;
  const id = info?.id
  return (
    <>
      <li className="notes-list-item" id={id}>
        <div className="item-text">{info?.text}</div>
        <button className="btn item-delete" onClick={()=>deleteNote(id)}>delete</button>
      </li>
    </>
  )
}
