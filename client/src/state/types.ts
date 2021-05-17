// markdown is not a language, but in tnis context it is
export type Languages = 'javascript' | 'typescript' | 'markdown';

export interface Cell {
  id: string;
  language: Languages;
  content: string;
}
