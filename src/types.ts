export type Speaker = 'hiro' | 'master';
export type ItemType = 'chat' | 'narration' | 'formula';

export interface StoryItem {
  type: ItemType;
  speaker?: Speaker;
  text?: string;
  formula?: string;
  formulaTitle?: string;
  formulaDesc?: string;
}

export interface Section {
  id: string;
  title: string;
  items: StoryItem[];
}

export interface Chapter {
  id: number;
  title: string;
  sections: Section[];
}
