export type TNote = {
  text: string;
  id?: string|undefined;
}

export type TApp = TNote[]

export type TList = {
  info?: TNote[];
  deleteNote: Function;
  notesFromServer?: []
};

export type TInfo = {
  text: string;
  id?: string|undefined;
}

export type TItem = {
  info?: TInfo;
  deleteNote: Function;
  
};

export type TForm = {
  addNote: Function;
};

export type THeader = {
  getNotes: Function
}


