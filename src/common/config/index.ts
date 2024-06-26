import { DeveloperCardType } from 'common/types/DeveloperCardType';

type DefaultCardType = {
  iconSrc: string;
  title: string;
  content: string;
};

type HeaderArrayType = {
  text: string;
  link: string;
};

type AccordionDataType = {
  title: string;
  content: string;
};

type TechComponentDataType = {
  title: string;
};

type SocialNetworksArrayType = {
  icon: string;
  link: string;
};

type ContactsArrayType = {
  iconSrc: string;
  altInfo: string;
  info: string;
  link: string;
};

type OptionsArrayType = {
  value: string;
  label: string;
};

export const companyMembers: DeveloperCardType[] = [
  {
    jobPosition: 'Ivan Buhaienko',
    name: 'CEO',
  },
  {
    jobPosition: 'Ivan Hurinovich',
    name: 'Front-end',
  },
  {
    jobPosition: 'Maksim Piatlitskii',
    name: 'DevOps',
  },
  {
    jobPosition: 'Ivan',
    name: 'Back-end/Front-end',
  },
  {
    jobPosition: 'Siarhei Stepanyuk',
    name: 'Back-end/Front-end',
  },
];

export const advantagesArray: DefaultCardType[] = [
  {
    iconSrc: 'assets/icon.svg',
    title: 'Excellence In Every Detail',
    content:
      'We believe that quality is not just a feature, but a mindset. That’s why we pay attention to every detail of our products, from design to development, testing to delivery.',
  },
  {
    iconSrc: 'assets/icon.svg',
    title: 'Innovation And Creativity',
    content:
      ' We are not afraid to challenge the status quo and explore new possibilities. We are always looking for ways to improve our products and services, and to create solutions that solve real problems for our clients.   ',
  },
  {
    iconSrc: 'assets/icon.svg',
    title: 'Client-Focused Approach',
    content:
      'We understand that every client is unique, and that their needs and goals may vary. That’s why we adopt a client-focused approach, where we listen to their requirements, understand their expectations, and tailor our solutions to fit their specific situation. ',
  },
  {
    iconSrc: 'assets/icon.svg',
    title: 'Collaboration And Teamwork',
    content:
      'We work as a cohesive unit and collaborate with external partners to enhance our capabilities and network. ',
  },
  {
    iconSrc: 'assets/icon.svg',
    title: 'Agility And Flexibility',
    content:
      'We operate in a dynamic and fast-paced environment, where change is inevitable and constant. We embrace change as an opportunity to learn and grow, and to adapt our products and services to the evolving needs of our clients. ',
  },
  {
    iconSrc: 'assets/icon.svg',
    title: 'DevOps And Cloud Computing',
    content:
      'We use devops and cloud computing to automate, optimize, and scale our software processes for our clients.  ',
  },
];
export const headerArray: HeaderArrayType[] = [
  { text: 'Our services', link: 'OurService' },
  { text: 'Tech Stack', link: 'TechSkills' },
  { text: 'About us', link: 'OurTeamBlock' },
];

export const serviceCardArray: DefaultCardType[] = [
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Development',
    content:
      'Our AI development specialists at Feel IT Studio turn your AI visions into reality with unmatched acumen and expertise. Rely on us for all your AI development needs.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Web Hosting',
    content:
      'Our AI development specialists at Feel IT Studio turn your AI visions into reality with unmatched acumen and expertise. Rely on us for all your AI development needs.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Software Development',
    content:
      'Our AI development specialists at Feel IT Studio turn your AI visions into reality with unmatched acumen and expertise. Rely on us for all your AI development needs.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'DevOps',
    content:
      'Our AI development specialists at Feel IT Studio turn your AI visions into reality with unmatched acumen and expertise. Rely on us for all your AI development needs.',
  },
];

export const accordionData: AccordionDataType[] = [
  {
    title: 'What languages do I need to know to join your team?',
    content:
      'We use a secret formula that combines innovation, creativity, quality, and passion. We cant reveal the exact ingredients, but we can assure you that they are all natural and organic.',
  },
  {
    title: 'What kind of work experience I need to have to join you?',
    content:
      'We use a secret formula that combines innovation, creativity, quality, and passion. We can’t reveal the exact ingredients, but we can assure you that they are all natural and organic.',
  },
  {
    title: 'What fields do you work in?',
    content:
      'We use a secret formula that combines innovation, creativity, quality, and passion. We can’t reveal the exact ingredients, but we can assure you that they are all natural and organic.',
  },
  {
    title: 'How do you create such amazing products?',
    content:
      'We use a secret formula that combines innovation, creativity, quality, and passion. We can’t reveal the exact ingredients, but we can assure you that they are all natural and organic.',
  },
];
export const socialNetworksArray: SocialNetworksArrayType[] = [
  { icon: 'assets/iconButton.svg', link: '#' },
  { icon: 'assets/iconButton.svg', link: '#' },
  { icon: 'assets/iconButton.svg', link: '#' },
  { icon: 'assets/iconButton.svg', link: '#' },
];
export const techComponentArray: TechComponentDataType[] = [
  { title: 'React Native' },
  { title: 'Sass' },
  { title: 'Javascript' },
  { title: 'Typescript' },
  { title: 'Next.js' },
  { title: 'Webpack' },
  { title: 'Appolo' },
  { title: 'Java' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'GraphQL' },
  { title: 'Python' },
  { title: 'FastAPI' },
];
export const contactsArray: ContactsArrayType[] = [
  { iconSrc: 'assets/message.svg', altInfo: 'message', info: 'mailbox@feelit.studio', link: '#' },
  { iconSrc: 'assets/telephone.svg', altInfo: 'telephone', info: '+380 66 666 66 66', link: '#' },
  { iconSrc: 'assets/map.svg', altInfo: 'map', info: 'Lorem imps-um', link: '#' },
];

export const OptionsArray: OptionsArrayType[] = [
  { value: 'Development', label: 'Development' },
  { value: 'Web Hosting', label: 'Web Hosting' },
  { value: 'Software Development', label: 'Software Development' },
  { value: 'DevOps', label: 'DevOps' },
];
