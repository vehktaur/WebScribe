import { FormEvent, useState, ChangeEvent } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { ICreateNote, INoteData } from "./Interfaces";

export default function AddNote() {
  const { createNote } = useOutletContext() as ICreateNote;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  const [noteData, setNoteData] = useState<INoteData>({});

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setNoteData((prevNoteData) => ({
      ...prevNoteData,
      [name]: value,
    }));
  }

  function formSubmit() {
    createNote(noteData.note__title, noteData.note__details);
  }

  return (
    <div className="container">
      <h1>Create Note 📝</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Whats on your mind</legend>

          <div className="form__group">
            <label htmlFor="add__note__title">Title</label>
            <input
              type="text"
              name="note__title"
              id="add__note__title"
              placeholder="Enter your title"
              onChange={handleChange}
            />
          </div>

          <div className="form__group">
            <label htmlFor="add__note">Details</label>
            <textarea
              name="note__details"
              id="add__note"
              className="custom__scrollbar"
              cols={30}
              rows={10}
              placeholder="Write your notes"
              onChange={handleChange}
              value={noteData.note__details}
            ></textarea>
          </div>
          <button onClick={formSubmit}>
            <Link className="form__link" to="/">
              Create Note
            </Link>
          </button>
        </fieldset>
      </form>
    </div>
  );
}
