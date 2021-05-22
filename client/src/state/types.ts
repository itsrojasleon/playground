// markdown is not a language, but in tnis context it is
export type Languages = 'javascript' | 'typescript' | 'markdown';

export interface Cell {
  id: string;
  language: Languages;
  content: string;
}

export interface Playground {
  _id: string;
  updatedAt: Date;
  creatdeAt: Date;
  cells: Cell[];
}
