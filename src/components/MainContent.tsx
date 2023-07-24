import {Routes, Route} from "react-router-dom"
import NotesPreview from "./NotesPreview";
import { IPreview } from "./Interfaces";
import AddNote from "./AddNote";
import Header from "./Header";

export default function MainContent(Props: IPreview) {

  return (
    <section className="main_content">
      <Header />
      <main>
        <div className="container">
        <Routes>
          <Route path="/" element= {<NotesPreview createNote={Props.createNote} />}/>
          <Route path="/create-note" element={<AddNote />}/>
          </Routes>
        </div>
        
      </main>
    </section>
  );
}
