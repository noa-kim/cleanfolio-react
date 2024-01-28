const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://noa-kim.github.io',
  title: 'Noa Kim, Product Design Manager',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Noa Kim, MSI',
  role: 'Product Manager, Healthcare Design',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: '#',
  social: {
    linkedin: 'https://www.linkedin.com/in/noakim/',
    // github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Diabetes Cost and Coverage Navigator',
    description:
      'A suite of tools developed for primary care teams to navigate the burdensome process of diabetes medication and supplies coverage, cost, prior authorization, and DME ordering',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.mct2d.org/resource-library?media-type=&tags=Coverage_Guides&target-audience=&collections=&page=1',
  },
  {
    name: 'Low Carb Jumpstart',
    description:
      'A digital behavioral health tool to jumpstart a low carbohydrate lifestyle for individuals with type 2 diabetes',
    stack: ['SASS', 'TypeScript', 'React'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://jumpstart.mct2d.org/',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hifromnoa@gmail.com',
}

export { header, about, projects, skills, contact }
