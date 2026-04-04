import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export interface ChatBubbleProps {
  speaker: 'hiro' | 'master';
  message: ReactNode;
  delay?: number;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ speaker, message, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 100); // 100ms delay per index roughly
    return () => clearTimeout(timer);
  }, [delay]);

  const speakerName = speaker === 'hiro' ? 'ヒロ (初学者)' : 'マスター (講師)';
  const avatarClass = speaker === 'hiro' ? 'hero' : 'master';
  const avatarLetter = speaker === 'hiro' ? 'ヒ' : 'マ';

  return (
    <div className={`chat-row ${avatarClass} ${isVisible ? 'animate-fade-in' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
      <div className="chat-wrapper">
        <div className={`avatar ${avatarClass}`}>
          {avatarLetter}
        </div>
        <div className="bubble-wrapper">
          <div className="name-label">{speakerName}</div>
          <div className="bubble glass-container">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};
