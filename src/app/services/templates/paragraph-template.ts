// Types
import { ParagraphData } from "../../types/tab-types";

const tabHeading = 'This will be the tab heading';
const pageTitle = 'This will be title on the page';
const sections = [
  {
    heading: 'This is the section title',
    paragraphs: [
      'And you can just throw as many paragraphs in here as you want.',
      "Don't forget to swap between quotes/double quotes if you need to use apostraphes or speed marks.",
      'Just like this: "hello world"',
    ],
  },
  {
    heading: 'Section title the second',
    paragraphs: [
      'I have been using single quotes just because it means I cannot use contractions, which makes things sound a little more formal.',
      'Remember you need to end the line with a comma, too.',
    ],
  },
  {
    paragraphs: [
      'And if you want a page without sections, you can just use the page title and a section without the heading property.',
    ],
  },
];

// Remember to rename 'paragraphTemplate', as this name is what we'll use to import it into data-service.ts
export const paragraphTemplate: ParagraphData = { type: 'paragraph', tabHeading, pageTitle, description: null, sections };
