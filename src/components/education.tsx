import React from 'react';

const Education: React.FC = () => {
  const educations = [
    {
      title: "Graduação",
      course: "Licenciatura em Computação",
      institution: "Instituto Federal Sul de Minas - Campus Machado",
      year: "2013 - 2016",
    },
    {
      title: "Pós-Graduação",
      course: "Docência de Informática no Ensino Superior",
      institution: "FAVENI Faculdade Venda Nova do Imigrante",
      year: "2018 - 2019",
    },
    {
      title: "Mestrado",
      course: "Educação e Sociedade: sujeitos, ideias e políticas",
      institution: "UNIFAL - Universidade Federal de Alfenas",
      year: "2025 - Atual",
    },
  ];

  return (
    <section className="mb-8 p-6 ">
      <h2 className="text-3xl text-white font-semibold mb-6">Formação Acadêmica</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educations.map((education, index) => (
          <div
            key={index}
            className="p-6 border border-neonGreen rounded-xl bg-gray-950 shadow-neon hover:shadow-lg"
          >
            <h3 className="text-xl text-white font-bold mb-2">{education.title}</h3>
            <p className="text-lg text-neonGreen font-semibold">{education.course}</p>
            <p className="text-sm text-gray-400">{education.institution}</p>
            <p className="text-sm text-gray-500">{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
