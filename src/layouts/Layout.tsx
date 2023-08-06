import { useState, createContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { nanoid } from "nanoid";

import { NotesProps } from "../components/Interfaces";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

//Context to pass state variables to all the nested routes and components in the layout
export const NotesContext = createContext<NotesProps[] | []>([]);

export default function Layout() {
  // State variables declaration

  //Notes Array and setter function that will hold each note object
  const [notes, setNotes] = useState<NotesProps[] | []>([]);
  // State variable which determines whether or not to show the no-note
  // overlay if the notes array is empty
  const [isNew, setIsNew] = useState<boolean>(true);

  function createNote(
    title = "Title",
    body = "A new note created by yours truly"
  ) {
    //Create note function which creates a new note object
    //and adds it to the notes Array using the setNotes setter
    //function. It is initializes the note title and body with
    //default values

    const newNote = {
      id: nanoid(),
      title: title,
      body: body,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function openApp() {
    //function which removes the no-notes overlay upon
    //new user entrance

    setIsNew((prevBoolean) => !prevBoolean);
  }

  return (
    <>
      {/* Router Layout  */}
      <div className="body">
        <NotesContext.Provider value={notes}>
          <Sidebar />

          <section className="main__content">
            <Header />

            <main>
              <div className="container">
                {/* Routes get displayed here */}
                <Outlet context={{ createNote, notes }} />
              </div>
            </main>
            <footer>
              <small> &copy; Copyright Reserved @Akhi's Dev</small>
            </footer>
          </section>
        </NotesContext.Provider>
      </div>

      {/* No-notes Overlay */}
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
