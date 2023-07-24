import { useContext } from "react";
import {NotesContext} from "../App"
import { IPreview, NotesProps } from "./Interfaces";


export default function NotesPreview(Props: IPreview) {
  const notes = useContext<NotesProps[]>(NotesContext);
  return (
    <div>
      <h1>NOTES</h1>
    </div>
  );
}
