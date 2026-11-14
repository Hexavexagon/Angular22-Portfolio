// Types
import { CardData } from "../../types/tab-types";

const tabHeading = 'This will be the tab heading';
const pageTitle = 'This will be the title on the page';
const description = 'This is a paragraph that will appear before the lists.';
const cards = [
  {
    title: 'This is the card title',
    subtitle: 'And this appears below it',
    avatar: '',
    imageSrc: '',
    paragraphs: [
      'The rest of the card can be filled with paragraphs. Normally cards can have action buttons, but I did not implement them because it seemed unecessary.',
      'The "avatar" property is for the source of an image to use as a small image beside the title and subtitle. It is optional.',
      'The "imageSrc" property is for a full sized image between the title and the text. It is also optional.',
      'Images can be placed in the /public folder.',
    ],
    competencies: [
      'You',
      'Can',
      'Add',
      'These',
      'If',
      'Desired',
    ],
  },
  {
    title: 'You',
    subtitle: 'Can',
    paragraphs: [
      'Have as many cards as you want.',
    ],
  },
];

// Remember to rename 'cardTemplate', as this name is what we'll use to import it into data-service.ts
export const cardTemplate: CardData = { type: 'card', tabHeading, pageTitle, description, cards };
