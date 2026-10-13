import type { TimelineItem } from '../types/content'

export const timeline: TimelineItem[] = [
  {
    step: '01',
    title: 'Técnico em Administração',
    description:
      'Minha primeira formação, que me deu noção de processos, organização e rotina profissional.',
    tags: ['Administração', 'Processos'],
  },
  {
    step: '02',
    title: 'Engenharia de Software na UVV',
    description:
      'Início da graduação presencial, no período da manhã, construindo a base técnica para atuar na área.',
    tags: ['UVV', 'Graduação'],
  },
  {
    step: '03',
    title: 'Lógica e bancos de dados',
    description:
      'Lógica proposicional e de predicados, tabelas-verdade e teoria dos conjuntos. Em bancos de dados: modelagem, modelo relacional, normalização e SQL com MySQL.',
    tags: ['Lógica', 'Modelo relacional', 'SQL', 'MySQL'],
  },
  {
    step: '04',
    title: 'Programação e desenvolvimento web',
    description:
      'Python, JavaScript, HTML e CSS, junto com UX/UI, requisitos de software e Scrum, aprendendo a pensar o produto além do código.',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'UX/UI', 'Scrum'],
  },
  {
    step: '05',
    title: 'Projetos próprios',
    description:
      'Colocando o aprendizado em prática: invistasimplificado, Vitão Cell, análises comerciais com Python e MySQL e este portfólio.',
    tags: ['FastAPI', 'SQLAlchemy', 'React', 'GSAP'],
  },
]