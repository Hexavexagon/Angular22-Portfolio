import { ParagraphData } from "../../types/tab-types";

const heading = 'This will be the tab heading, and the title on the page';
const paragraphs = [
  'And you can just throw as many paragraphs in here as you want.',
  "Don't forget to swap between quotes/double quotes if you need to use apostraphes or speed marks.",
  'Just like this: "hello world"',
  'I have been using single quotes just because it means I cannot use contractions, which makes things sound a little more formal.',
  'Remember you need to end the line with a comma, too.',
];

// Remember to rename 'paragraphTemplate', as this name is what we'll use to import it into data-service.ts
export const paragraphTemplate: ParagraphData = { type: 'paragraph', heading, description: null, paragraphs };
