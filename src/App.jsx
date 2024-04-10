import { useState } from 'react'
import Navbar from './components/Navbar'
import NotedList from './components/NotedList'
import FormAdd from './components/FormAdd';
function App() {

  const [notes, setNotes] = useState([]);

  const addNote =(note)=>{
    setNotes([...notes, note])
  }

  const deleteNotes =(id) =>{
    const filter = notes.filter((note) => note.id !==id);
    setNotes(filter)
  }

  const updateNotes = (id) => {
    const newNote = notes.map((note) => {
      if (note.id === id) {
        return { ...note, checked: !note.checked };
      }
      return note;
    });

    setNotes(newNote);
  };


  return (
    <>
      <Navbar/>
      <FormAdd addNote={addNote} />
      <NotedList notes={notes} onDelete={deleteNotes} onUpdate={updateNotes}/>
    </>
  )
}

export default App
