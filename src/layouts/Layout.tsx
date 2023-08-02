import { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { NotesProps } from "../components/Interfaces";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export const NotesContext = createContext<NotesProps[] | []>([]);

export default function Layout() {
  const [notes, setNotes] = useState<NotesProps[] | []>([]);
  const [isNew, setIsNew] = useState<boolean>(true);

  function createNote(
    title = "Title",
    text = "A new note created by yours truly"
  ) {
    const newNote = {
      id: nanoid(),
      title: title,
      body: text,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function openApp() {
    setIsNew((prevBoolean) => !prevBoolean);
  }

  return (
    <>
      {/* Router Layout  */}
      <div className="body">
        <NotesContext.Provider value={notes}>
          <Sidebar />

          <section className="main_content">
            <Header />

            <main>
              <div className="container">
                <Outlet context={{ createNote, notes }} />
              </div>
            </main>

            <footer>
              <small> &copy; Copyright Reserved @Akhi's Dev</small>
            </footer>
          </section>
        </NotesContext.Provider>
      </div>

      <div
        className={`no__notes ${(!isNew || notes.length > 0) && "now__notes"}`}
      >
        <h1>You Have No Notes</h1>
        <button className="btn-new" type="button" onClick={openApp}>
          <Link className="link" to="create-note">
            Create New Note
          </Link>
        </button>
      </div>
    </>
  );
}
