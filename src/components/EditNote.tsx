import { FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { IEditNote } from "./Interfaces";

export default function EditNote(Props: IEditNote) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    Props.setCurrentNote((PrevNote) => ({
      ...PrevNote,
      [name]: value,
    }));
  }

  return (
    <div className="edit-note__page">
      <h2>Edit Note </h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Make some changes</legend>

          <div className="form__group">
            <label htmlFor="add__note__title">Title</label>
            <input
              type="text"
              name="title"
              id="add__note__title"
              placeholder="Edit your title"
              onChange={handleChange}
              value={Props.currentNote?.title}
            />
          </div>

          <div className="form__group">
            <label htmlFor="add__note">Details</label>
            <textarea
              name="body"
              id="add__note"
              className="custom__scrollbar"
              cols={30}
              rows={10}
              placeholder="Edit your notes"
              onChange={handleChange}
              value={Props.currentNote?.body}
            ></textarea>
          </div>
          <button className="btn-form" onClick={Props.updateNote}>
            <Link className="form__link" to="/">
              Edit Note
            </Link>
          </button>
        </fieldset>
      </form>
    </div>
  );
}
