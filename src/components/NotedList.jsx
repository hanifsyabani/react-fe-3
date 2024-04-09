import NoteItem from "./NoteItem";

export default function NotedList({notes, onDelete}) {
  console.log(notes)
  return (
    <div className="flex justify-center items-center gap-6">
    {notes.map((note) =>{
      return(
        <NoteItem key={note.id} note={note} onDelete={onDelete}/>
      )
    })}
    </div>
  )
}
