import { Card } from "./angular-types";

export type WorkHistoryData = { heading: string, description: string | null, cards: Card[] };

const heading = 'History of Work';
const description = null;
const cards = [
  {
    title: 'Work at iQualify',
    subtitle: 'October 2015 - November 2026',
    imageSrc: 'iq.png',
    paragraphs: [
      'I worked for iQualify in the position of Full Stack Developer, working in small teams to develop features and address support issues and bug fixes.'
    ],
  },
  {
    title: 'Work at i-lign (now known as Legend for Business)',
    subtitle: 'Febuary 2013',
    imageSrc: 'ilign.jpeg',
    paragraphs: [
      'I had an intern position at i​-lign, where I set up a new continuous integration server (Jenkins), did some bug fixes on their webapp, and worked on transferring it to a new authentication method.',
    ],
  },
]

export const workHistoryData: WorkHistoryData = { heading, description, cards };