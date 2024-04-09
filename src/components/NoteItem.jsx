import { RiDeleteBin6Line } from "react-icons/ri";
export default function NoteItem({note}) {

  return (
    <div className='bg-gray-300 p-4 rounded-md w-44 mt-20'>
      <h1 className="font-bold text-lg">{note.title}</h1>
      <p>{note.description}</p>
      <div className="pt-2">
        <RiDeleteBin6Line className="text-red-500" size={20}/>
      </div>
    </div>
  )
}
