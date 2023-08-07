import { useOutletContext, Link } from "react-router-dom";
import { NotesProps } from "./Interfaces";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";
import { Dispatch, SetStateAction, useState } from "react";
import EditNote from "./EditNote";

export default function NotesPage() {
  const { notes, setNotes } = useOutletContext() as {
    notes: NotesProps[];
    setNotes: Dispatch<SetStateAction<NotesProps[] | []>>;
  };

  const [currentNote, setCurrentNote] = useState<NotesProps>(
    notes[0]
  );

  const [noEdit, setNoEdit] = useState(true);

  function deleteNote(noteId: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    console.log("works", noteId);
  }

  function editNote(noteId: string) {
    setNoEdit((prevState) => !prevState);
    const theCurrentNote = notes.find((note) => note.id == noteId) as SetStateAction<NotesProps>;
    setCurrentNote(theCurrentNote);
  }
  function updateNote() {
    setNoEdit((prevState) => !prevState);
    notes.map((note) => {
      if (note.id == currentNote?.id) {
        note.body = currentNote.body;
        note.title = currentNote.title;
        return note;
      } else {
        return note;
      }
    });
  }

  return (
    <div className="notes__page">
      <div className={`overlay ${noEdit && "no-edit"}`}>
        <EditNote updateNote={updateNote} currentNote={currentNote} setCurrentNote = {setCurrentNote} />
      </div>
      <h1>NOTES</h1>
      {notes.length < 1 && (
        <p>
          No Notes Available <Link to="/create-note">Create New Note</Link>
        </p>
      )}
      <div className="note__layout">
        {notes.map((note) => (
          <div className="note__card" key={note.id}>
            <div>
              <h2 className="note__title">{note.title}</h2>
            </div>
            <div className="note__body-container custom__scrollbar">
              <p className="note__body">{note.body}</p>
            </div>

            <img
              className="delete__icon"
              src={delete_icon}
              alt="delete-icon"
              onClick={() => {
                deleteNote(note.id);
              }}
            />

            <img
              className="edit__icon"
              src={edit_icon}
              alt="edit-icon"
              onClick={() => {
                editNote(note.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
