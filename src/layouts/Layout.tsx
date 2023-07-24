import { useState, createContext } from "react";
import Sidebar from "../components/Sidebar";
import { nanoid } from "nanoid";
import { NotesProps } from "../components/Interfaces";
import Header from "../components/Header";

import { Outlet } from "react-router-dom";

export const NotesContext = createContext<NotesProps[] | []>([]);

export default function Layout() {
  const [notes, setNotes] = useState<NotesProps[] | []>([]);

  function createNote() {
    const newNote = {
      id: nanoid(),
      body: "A new note created by yours truly",
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <>
      <div className="body">
        <NotesContext.Provider value={notes}>
          <Sidebar />

          <section className="main_content">
            <Header />
            <main>
              <div className="container">
                <Outlet/>
              </div>
            </main>
          </section>
        </NotesContext.Provider>
      </div>

      <div className={`no__notes ${notes.length && "now__notes"}`}>
        <h1>You Have No Notes</h1>
        <button type="button" onClick={createNote}>
          Create New Note
        </button>
      </div>
    </>
  );
}
