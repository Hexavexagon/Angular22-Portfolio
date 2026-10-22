import { Card } from "./angular-types";

export type AchievementsData = { heading: string, description: string | null, cards: Card[] };

const heading = 'Achievements';
const description = null;
const cards = [
  {
    title: '',
    subtitle: '',
    imageSrc: '',
    paragraphs: [
      '',
    ],
  },
  {
    title: '',
    subtitle: '',
    imageSrc: '',
    paragraphs: [
      '',
    ],
  },
  {
    title: '',
    subtitle: '',
    imageSrc: '',
    paragraphs: [
      '',
    ],
  },
  {
    title: '',
    subtitle: '',
    imageSrc: '',
    paragraphs: [
      '',
    ],
  },
];

export const achievementsData: AchievementsData = { heading, description, cards };