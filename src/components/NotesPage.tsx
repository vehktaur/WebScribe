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

  const [currentNote, setCurrentNote] = useState<NotesProps>(notes[0]);

  const [noEdit, setNoEdit] = useState(true); //Boolean State for opening/closing the edit note page

  function deleteNote(noteId: string) {
    //this function filters through the notes array and only returns/leaves note objects
    //whose ID is not the currentNote's (note being clicked) ID
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }

  function editNote(noteId: string) {
    //This opens the edit form component
    setNoEdit((prevState) => !prevState);

    //here we find the current note in the notes array using its ID
    //and set it to the currentNote state
    const theCurrentNote = notes.find(
      (note) => note.id == noteId
    ) as SetStateAction<NotesProps>;
    setCurrentNote(theCurrentNote);
  }

  function updateNote() {
    //This closes the edit form component
    setNoEdit((prevState) => !prevState);

    //This actually updates the current note
    setNotes((prevNotes) => {
      //Here we map through the notes array and when the current note is found
      //we update it with the new form data gotten from the edit form component

      prevNotes.map((note) => {
        if (note.id == currentNote?.id) {
          note.body = currentNote.body;
          note.title = currentNote.title;
          return note;
        } else {
          return note;
        }
      });

      //after updating the current note, we sort through the notes array to bring
      //the updated note to the start of the array, making it the most recent note

      prevNotes.sort((noteA, noteB) => {
        if (noteA.id === currentNote.id) {
          return -1;
        } else if (noteB.id === currentNote.id) {
          return 1;
        } else {
          return 0;
        }
      });
      return prevNotes;
    });
  }

  return (
    <div className="notes__page">
      <div className={`overlay ${noEdit && "no-edit"}`}>
        <EditNote
          updateNote={updateNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
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
