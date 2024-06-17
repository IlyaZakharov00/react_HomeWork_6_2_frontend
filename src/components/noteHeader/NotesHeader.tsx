import { THeader } from "../types/types"

export const NotesHeader = (props:THeader) => {
  const { getNotes } = props
  return (
    <div className="header-container">
      <div className="header-name">Notes</div>
      <button className="btn btn-update" onClick={()=>getNotes()}>update</button>
    </div>
  )
}
