import { RiDeleteBin6Line } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { useState } from "react";
export default function NoteItem({ note, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);

  const handleDelete = (id) => {
    const confirm = window.confirm("Yakin mau di hapus?");
    if (confirm) {
      onDelete(id);
    }
  };

  const handleUpdate = (id) => {
    const confirm = window.confirm("Yakin mau mengakhiri note?");
    if (confirm) {
      onUpdate(id);
    }
  };

  return (
    <div
      className={`${
        note.checked ? "bg-green-300" : "bg-gray-300"
      } p-4 rounded-md w-44 mt-20`}
    >
      <h1 className="font-bold text-lg mb-2">{note.title}</h1>
      <p>{note.description}</p>
      <div className="pt-2 flex items-center gap-2">
        <RiDeleteBin6Line
          className="text-red-500 cursor-pointer"
          size={20}
          onClick={() => handleDelete(note.id)}
        />
        <div>
          <input
            type="checkbox"
            id={note.id}
            checked={note.checked}
            onClick={() => handleUpdate(note.id)}
            hidden
          />
          <label htmlFor={note.id}>
            <BiTask className="text-green-500 cursor-pointer" size={20} />
          </label>
        </div>
      </div>
    </div>
  );
}
