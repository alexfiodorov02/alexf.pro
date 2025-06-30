'use client';

import AuthorSection from './components/AuthorSection';
import IntroSection from './components/IntroSection';
import ProjectsList from './components/ProjectsList';
import './globals.css';
import './App.css';

export default function Home() {
  return (
    <div className="App">
      <div id="main">
        <AuthorSection />
        <IntroSection />
        <ProjectsList />
      </div>
    </div>
  );
}
