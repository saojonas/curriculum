import React from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Other from './components/other'

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center text-neonGreen">
      <div className="max-w-2xl mx-auto">
        {/*} <h1 className="text-4xl font-bold text-center mb-8">Jonas Muniz</h1> {*/}
        <Personal />
        <Education />
        <Experience />
        <Skills />
        <Other />
      </div>
    </div>
  );
};

export default App;
