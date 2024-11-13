import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AdditionalInfo: React.FC = () => {
  return (
    <section className="mb-6 p-6 border border-neonGreen rounded-lg bg-gray-950 shadow-neon transition-all hover:shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-white">Informações Complementares</h2>
      
      <p className="text-white mb-2">Buscando por experiências profissionais na área de desenvolvimento.</p>
      <p className="text-white mb-4">Idiomas: Inglês de nível intermediário, Espanhol de nível básico.</p>

      <div className="flex justify-center space-x-6">
  <a
    href="https://github.com/saojonas"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-green-400 transition-colors"
  >
    <FaGithub size={30} />
  </a>
  <a
    href="https://www.linkedin.com/in/saojonas/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-green-400 transition-colors"
  >
    <FaLinkedin size={30} />
  </a>
</div>

    </section>
  );
};

export default AdditionalInfo;
