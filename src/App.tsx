import { useState, useEffect } from 'react';
import './App.css';
import './story.css';
import { StoryElement } from './components/StoryElement';
import { chapters } from './data/chapters';
import type { Chapter, Section } from './types';

function App() {
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initial state: Show some welcome text or the first section
  useEffect(() => {
    // If you want to start from chapter 1, section 1-1 by default:
    // setCurrentChapter(chapters[0]);
    // setCurrentSection(chapters[0].sections[0]);
  }, []);

  const selectSection = (chapter: Chapter, section: Section) => {
    setCurrentChapter(chapter);
    setCurrentSection(section);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setCurrentChapter(null);
    setCurrentSection(null);
    setIsSidebarOpen(false);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Navigation Backdrop */}
      {isSidebarOpen && <div className="backdrop" onClick={() => setIsSidebarOpen(false)} />}

      {/* Sidebar Navigation */}
      <nav className={`sidebar glass-container ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="home-btn" onClick={goHome}>🏠 ホーム</button>
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>✕</button>
        </div>
        <div className="sidebar-content">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="sidebar-chapter">
              <h3>{chapter.id}章 {chapter.title}</h3>
              <ul>
                {chapter.sections.map((section) => (
                  <li 
                    key={section.id} 
                    className={currentSection?.id === section.id ? 'active' : ''}
                    onClick={() => selectSection(chapter, section)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay toggle for mobile */}
      <button className="menu-toggle glass-container" onClick={() => setIsSidebarOpen(true)}>
        📚 目次
      </button>

      <header className="header glass-container" onClick={goHome} style={{ cursor: 'pointer' }}>
        <h1>電験3種ストーリー</h1>
        <p>〜やさしく学ぶ機械の世界〜</p>
      </header>

      <main>
        {!currentSection ? (
          <div className="home-view animate-fade-in">
            <h2>ようこそ、電験3種ストーリーへ！</h2>
            <p>このサイトでは、難解な電験3種の「機械」科目を、ヒロ君とマスターの対話を通してストーリー形式で学んでいきます。</p>
            <div className="toc-grid">
              {chapters.map(chapter => (
                <div key={chapter.id} className="toc-card glass-container">
                  <h4>{chapter.id}章</h4>
                  <p>{chapter.title}</p>
                  {chapter.sections && chapter.sections.length > 0 ? (
                    <button onClick={() => selectSection(chapter, chapter.sections[0])}>
                      学習を始める
                    </button>
                  ) : (
                    <button disabled style={{ opacity: 0.5 }}>
                      準備中
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="scenario-title">
              {currentChapter?.id}章：{currentChapter?.title}
              <div className="section-subtitle">{currentSection.title}</div>
            </div>
            
            <div className="story-container">
              {currentSection.items && currentSection.items.length > 0 ? (
                currentSection.items.map((item, index) => (
                  <StoryElement 
                    key={`${currentSection.id}-${index}`} 
                    item={item} 
                    delay={index} 
                  />
                ))
              ) : (
                <div className="empty-message glass-container">
                  このセクションの内容は現在準備中です。
                </div>
              )}
            </div>
            
            <div className="navigation-footer">
              <button 
                className="glass-container" 
                onClick={() => {
                  const flatSections = chapters.flatMap(c => c.sections || []).filter(s => s !== undefined);
                  const currentIndex = flatSections.findIndex(s => s.id === currentSection.id);
                  if (currentIndex > 0) {
                    const prevSection = flatSections[currentIndex - 1];
                    const prevChapter = chapters.find(c => c.sections?.some(s => s.id === prevSection.id));
                    if (prevChapter) selectSection(prevChapter, prevSection);
                  }
                }}
                disabled={(() => {
                  const flatSections = chapters.flatMap(c => c.sections || []).filter(s => s !== undefined);
                  return flatSections.length > 0 && flatSections[0].id === currentSection.id;
                })()}
              >
                前の回へ
              </button>
              <button 
                className="glass-container active"
                onClick={() => {
                  const flatSections = chapters.flatMap(c => c.sections || []).filter(s => s !== undefined);
                  const currentIndex = flatSections.findIndex(s => s.id === currentSection.id);
                  if (currentIndex < flatSections.length - 1) {
                    const nextSection = flatSections[currentIndex + 1];
                    const nextChapter = chapters.find(c => c.sections?.some(s => s.id === nextSection.id));
                    if (nextChapter) selectSection(nextChapter, nextSection);
                  }
                }}
                disabled={(() => {
                   const flatSections = chapters.flatMap(c => c.sections || []).filter(s => s !== undefined);
                   return flatSections.length > 0 && flatSections[flatSections.length - 1].id === currentSection.id;
                })()}
              >
                次の回へ
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
