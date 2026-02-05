
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Position {
  x: number;
  y: number;
}