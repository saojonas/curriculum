import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiSvelte, SiVuedotjs } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <section className="mb-6 p-6 border border-neonGreen rounded-lg bg-gray-950 shadow-neon transition-all hover:shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full md:w-1/2">
          <p className="font-bold text-white mb-2">Pessoais</p>
          <ul className="list-disc list-inside text-white flex flex-col gap-4">
            <li>Aplicação de cursos e treinamentos</li>
            <li>Preparação de equipe com metodologias ágeis</li>
            <li>Alta maleabilidade profissional</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <p className="font-bold text-white mb-2">Técnicas</p>
          <ul className="list-disc list-inside text-white">
            <li className="flex items-center"><FaJs className="mr-2 text-yellow-500" /> Javascript, HTML5 e CSS3</li>
            <li className="flex items-center"><FaReact className="mr-2 text-cyan-400" /> React</li>
            <li className="flex items-center"><FaNodeJs className="mr-2 text-green-400" /> Node & npm</li>
            <li className="flex items-center"><FaPython className="mr-2 text-blue-500" />Python</li>
            <li className="flex items-center"><SiSvelte className="mr-2 text-orange-500" /> Noções de Svelte</li>
            <li className="flex items-center"><SiVuedotjs className="mr-2 text-green-400" /> Noções de Vue.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
