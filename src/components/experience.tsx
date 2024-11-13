import React from 'react';

import Ti from '../assets/icons/intership.svg'
import Bolsista from '../assets/icons/coordinator.svg'
import Data from '../assets/icons/data.svg'
import Professor from '../assets/icons/professor.svg'


const WorkExperience: React.FC = () => {
  const workExperiences = [
    {
      title: "Estágio",
      company: "Instituto Federal Sul de Minas - Campus Machado",
      position: "Estagiário do Departamento de TI",
      period: "2014 - 2016",
      tag: Ti,
    },
    {
      title: "Bolsista Tecnológico",
      company: "Universidade Aberta e Integrada de Minas Gerais (UAITEC)",
      position: "Coordenador do Polo Machado",
      period: "2017 - 2020",
      tag: Bolsista,
    },
    {
      title: "Análise de Dados Industriais",
      company: "CSM - Manutenção Industrial",
      position: "Técnico de Programação e Controle de Manutenção",
      period: "2021 - 2023",
      tag: Data,
    },
    {
      title: "Docência",
      company: "Instituto Federal Sul de Minas - Campus Passos",
      position: "Professor Substituto de Ensino Básico Técnico e Tecnológico (EBTT)",
      period: "2023 - 2025",
      tag: Professor,
    },
  ];


  return (
    <section className="mb-8 p-6">
      <h2 className="text-3xl text-white font-semibold mb-6">Experiências Profissionais</h2>
      <div className="space-y-6">
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="flex items-center p-6 border border-neonGreen rounded-xl bg-gray-950 shadow-neon hover:shadow-lg"
          >
            <div className="flex-shrink-0 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mr-6">
            <img src={experience.tag} alt={`${experience.title} icon`} className="w-12 h-12 object-contain" />{/* Exibe a inicial do cargo */}
            </div>
            <div>
              <p className="text-lg font-semibold text-neonGreen">{experience.position}</p>
              <p className="text-sm text-gray-400">{experience.company}</p>
              <p className="text-sm text-gray-500">{experience.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
