import { useOutletContext, Link } from "react-router-dom";

export default function NotesPage() {
  const { notes }= useOutletContext();

  return (
    <div>
      <h1>NOTES</h1>
      {notes.length < 1 && <p>No Notes Available <Link to="/create-note">Create New Note</Link></p>}
      <div className="note__layout">
        {notes.map((note) => (
          <div className="note__card" key={note.id}>
            <div><h2 className="note__title">{note.title}</h2></div>
            <div className="note__body-container custom__scrollbar">
              <p className="note__body">{note.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
