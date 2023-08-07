import { SetStateAction } from "react";

export interface NotesProps {
    id: string;
    title: string;
    body: string;
}
export interface INoteData {
    note__title?: string;
    note__details?: string;
}

export interface ICreateNote {
    createNote: (title: string | undefined, text: string | undefined) => void;
  }

export interface IEditNote {
    updateNote?: () => void;
    currentNote?: NotesProps ;
    setCurrentNote:(value: SetStateAction<NotesProps>) => void
}