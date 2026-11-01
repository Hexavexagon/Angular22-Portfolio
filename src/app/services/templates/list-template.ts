import { List } from "../../types/angular-types";
import { ListData } from "../../types/tab-types";

const heading = 'This will be the tab heading, and the title on the page';
const description = 'This is a paragraph that will appear before the lists.';
const lists: List[] = [
  {
    heading: 'Title of the list',
    listItems: [
      {
        itemTitle: 'You do not need to use multiple lists or multiple sections. You can have it all in one list and section.',
        lines: ['The lines are smaller text. They are optional so you can just use itemTitle instead'],
      },
      {
        itemTitle: 'This will be the next item on the list.',
      },
    ],
  },
  {
    heading: 'Groceries',
    listItems: [
      {
        itemTitle: 'Lettuce',
      },
      {
        itemTitle: 'Bread',
      },
      {
        itemTitle: 'More lettuce',
      },
      {
        itemTitle: 'Single egg',
      },
      {
        itemTitle: 'Human skull',
      },
    ],
  },
];

// Remember to rename 'listTemplate', as this name is what we'll use to import it into data-service.ts
export const listTemplate: ListData = { type: 'list', heading, description, lists };
