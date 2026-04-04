export type Speaker = 'hiro' | 'master';

export interface Message {
  speaker: Speaker;
  text: string;
}

export interface Section {
  id: string;
  title: string;
  messages: Message[];
}

export interface Chapter {
  id: number;
  title: string;
  sections: Section[];
}
