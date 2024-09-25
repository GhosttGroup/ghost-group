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
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Development',
    content:
      'Development services leverage cutting-edge AI technologies to create smart, efficient digital solutions. We focus on integrating AI-driven features that optimize functionality and user experience, ensuring your product stays ahead in innovation.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Web Hosting',
    content:
      'Our web hosting services offer secure, scalable, and reliable infrastructure to ensure your website runs smoothly. We provide fast performance, high uptime, and full support to keep your site accessible and efficient.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Software Development',
    content:
      'Software development services are focused on creating custom, scalable solutions tailored to your business needs. We handle everything from concept to deployment, ensuring that your software is efficient, user-friendly, and aligned with your goals.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'DevOps',
    content:
      'DevOps services streamline your development and operations processes, ensuring faster delivery and continuous integration. We focus on automation, collaboration, and monitoring to enhance efficiency and improve the reliability of your systems.',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'AI integration',
    content:
      'We integrate AI into all the services we create for our clients in order to maximize the work with services and automate many processes',
  },
  {
    iconSrc: 'assets/GroupIcon.svg',
    title: 'Process Automation',
    content:
      'With our services you will be able to maximize the automation of processes in your company, it will add much more time and save you money',
  },
];

export const headerArray: HeaderArrayType[] = [
  { text: 'Our services', link: 'OurService' },
  { text: 'Tech Stack', link: 'TechSkills' },
  { text: 'Our Advantages', link: 'OurAdvantages' },
];

export const serviceCardArray: DefaultCardType[] = [
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
      'We recognize that each client is unique, with varying needs and goals. That is why we take a client-focused approach, listening to their requirements and tailoring our solutions to meet their specific situations.',
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
      'We leverage DevOps practices and cloud computing technologies to automate, optimize, and scale our software processes, ensuring that our clients receive the most efficient and effective solutions possible.  ',
  },
];

export const accordionData: AccordionDataType[] = [
  {
    title: 'What services do you provide?',
    content:
      'We develop many different services for companies, our main exclusivity is that all services are created individually for the client, so they will fit you perfectly',
  },
  {
    title: 'How much do your services cost?',
    content:
      'There is no specific price for our services, as we develop everything individually for each client. Contact us via the form or social networks to estimate your order',
  },
  {
    title: 'What fields do you work in?',
    content:
      'We specialize in software development, cloud computing, and DevOps. Our expertise also spans AI-driven solutions, automation, and digital transformation strategies to help businesses thrive in todays tech landscape.',
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
  { title: 'React' },
  { title: 'Typescript' },
  { title: 'Next.js' },
  { title: 'Vite' },
  { title: 'Webpack' },
  { title: 'PostgreSQL' },
  { title: 'Javascript' },
  { title: 'NodeJS' },
  { title: 'Golang' },
  { title: 'Cypress' },
  { title: 'Jest' },
  { title: 'Python' },
  { title: 'Django' },
  { title: 'AI Technologies' },
];
export const contactsArray: ContactsArrayType[] = [
  { iconSrc: 'assets/message.svg', altInfo: 'message', info: 'ibugaenko21@gmail.com', link: '#' },
  { iconSrc: 'assets/telephone.svg', altInfo: 'telephone', info: '+48 694 604 137', link: '#' },
];

export const OptionsArray: OptionsArrayType[] = [
  { value: 'Development', label: 'Development' },
  { value: 'Web Hosting', label: 'Web Hosting' },
  { value: 'Software Development', label: 'Software Development' },
  { value: 'DevOps', label: 'DevOps' },
];
