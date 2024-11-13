import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <header className="mb-10 p-4 border border-neonGreen rounded-lg bg-gray-950 shadow-neon">
        <img
          src="src/assets/profile.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-neonGreen shadow-lg"
        />
        <h1 className="text-3xl font-bold text-white">Jonas Muniz</h1>
        <p className="text-white text-sm mt-2">Professor | Aspirante a desenvolvedor</p>
      </header>
  );
};

export default PersonalInfo;
