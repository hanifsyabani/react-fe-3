import { useState } from "react"


export default function FormAdd({addNote}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")



  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const data = {
      title,
      description
    }
    addNote(data)
    setTitle('')
    setDescription('')
  }

  return (
    <div className="px-10 mx-auto w-1/2  mt-4">
      <h1 className="text-center font-bold text-xl">Form ADD Note</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-3">
          <label htmlFor="judul" className="block text-sm font-semibold">Judul</label>
          <input type="text" name="judul" id="title" className="w-full border border-violet-400 py-3 px-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="judul" className="block text-sm font-semibold">Deskripsi</label>
          <textarea type="text" name="deskripsi" id="deskripsi" className="w-full border border-violet-400 py-3 px-2" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <button className="bg-violet-600 text-white py-3 px-4 text-center rounded-lg hover:bg-violet-800">Submit</button>
      </form>

    </div>
  )
}
