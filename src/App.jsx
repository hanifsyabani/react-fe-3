import { useState } from 'react'
import Navbar from './components/Navbar'
import NotedList from './components/NotedList'
import FormAdd from './components/FormAdd';
function App() {

  const [notes, setNotes] = useState([]);

  const addNote =(note)=>{
    setNotes([...notes, note])
  }


  return (
    <>
      <Navbar/>
      <FormAdd addNote={addNote} />
      <NotedList notes={notes} />
    </>
  )
}

export default App
