import { Card } from "./angular-types";

export type RefereesData = { heading: string, description: string | null, cards: Card[] };

const heading = 'Referees';
const description = 'People who can vouch for my character after working with them for 20 years:';
const cards = [
  {
    title: '',
    subtitle: '',
    imageSrc: '',
    paragraphs: [''],
  },
];

export const refereesData: RefereesData = { heading, description, cards };