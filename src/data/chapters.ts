import type { Chapter } from '../types';
import { chapter0 } from './chapters/chapter0';
import { chapter1 } from './chapters/chapter1';
import { chapter2 } from './chapters/chapter2';
import { chapter3 } from './chapters/chapter3';
import { chapter4 } from './chapters/chapter4';

export const chapters: Chapter[] = [
  chapter0,
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  { id: 5, title: 'パワーエレクトロニクス', sections: [] },
  { id: 6, title: '電動機応用', sections: [] },
  { id: 7, title: '照明', sections: [] },
  { id: 8, title: '電熱と電気加工', sections: [] },
  { id: 9, title: '電気化学', sections: [] },
  { id: 10, title: '自動制御', sections: [] },
  { id: 11, title: '電子計算機', sections: [] }
];
