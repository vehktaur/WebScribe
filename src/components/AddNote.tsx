export default function AddNote() {
  return (
    <div className="container">
      <h1>Create Notes 📝</h1>

      <form>
        <fieldset>
            <legend>Whats on your mind</legend>

            <div className="form__group">
                <label htmlFor="add__note__title">Title</label>
                <input type="text" name="note__title" id="add__note__title" placeholder="Enter your title"/>
            </div>

            <div className="form__group">
                <label htmlFor="add__note">Details</label>
                <textarea name="note_details" id="add__note" cols="30" rows="10" placeholder="Write your notes"></textarea>
            </div>
            <button>Create Note</button>
        </fieldset>
      </form>
    </div>
  );
}
