export interface NotesProps {
    id: string;
    title: string;
    body: string;
}
export interface INoteData {
    note__title?: string;
    note__details?: string;
}

export interface IPreview {
    createNote: () => void;
}

export interface ICreateNote {
    createNote: (title: string | undefined, text: string | undefined) => void;
  }