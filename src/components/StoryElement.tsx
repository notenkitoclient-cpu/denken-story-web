import { useEffect, useState } from 'react';
import type { StoryItem } from '../types';

export interface StoryElementProps {
  item: StoryItem;
  delay?: number;
}

export const StoryElement = ({ item, delay = 0 }: StoryElementProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  const style = { opacity: isVisible ? 1 : 0 };

  if (item.type === 'narration') {
    return (
      <div className={`narration-row ${isVisible ? 'animate-fade-in' : ''}`} style={style}>
        <div className="narration-text">{item.text}</div>
      </div>
    );
  }

  if (item.type === 'formula') {
    return (
      <div className={`formula-row ${isVisible ? 'animate-fade-in' : ''}`} style={style}>
        <div className="formula-box glass-container">
          {item.formulaTitle && <h4 className="formula-title">💡 {item.formulaTitle}</h4>}
          <div className="formula-content">{item.formula}</div>
          {item.formulaDesc && <p className="formula-desc">{item.formulaDesc}</p>}
        </div>
      </div>
    );
  }

  // default to chat
  const speakerName = item.speaker === 'hiro' ? 'ヒロ (アルバイト)' : 'マスター (元・凄腕技術者)';
  const avatarClass = item.speaker === 'hiro' ? 'hero' : 'master';
  const avatarLetter = item.speaker === 'hiro' ? 'ヒ' : 'マ';

  return (
    <div className={`chat-row ${avatarClass} ${isVisible ? 'animate-fade-in' : ''}`} style={style}>
      <div className="chat-wrapper">
        <div className={`avatar ${avatarClass}`}>{avatarLetter}</div>
        <div className="bubble-wrapper">
          <div className="name-label">{speakerName}</div>
          <div className="bubble glass-container">{item.text}</div>
        </div>
      </div>
    </div>
  );
};
