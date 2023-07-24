import { useState, createContext } from "react";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { nanoid } from "nanoid";
import { NotesProps } from "./components/Interfaces";

export const NotesContext = createContext<NotesProps[] | []>([]);

function App() {
  const [notes, setNotes] = useState<NotesProps[] | []>([]);

  function createNote(): void {
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
          <MainContent createNote = {createNote}/>
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

export default App;
