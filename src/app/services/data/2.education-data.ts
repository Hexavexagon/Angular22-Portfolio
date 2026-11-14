// Types
import { List, ListData } from "../../types/tab-types";

const tabHeading = 'History of Education';
const pageTitle = 'History of Education';
const description = 'I have a Bachelor of Engineering with Honours, with Second Class Honours in Software Engineering from Victoria University of Wellington.';
const lists: List[] = [
  {
    heading: '2014',
    listItems: [
      {
        itemTitle: 'COMP 381 - Interface Design For Live Electronics: C+',
      },
      {
        itemTitle: 'ECEN 201 - Data Acquisition: C',
      },
      {
        itemTitle: 'MDDN 251 - Physical Computing: B',
      },
      {
        itemTitle: 'SWEN 432 - Advanced Database Design And Implementation: B-',
      },
    ],
  },
  {
    heading: '2013',
    listItems: [
      {
        itemTitle: 'ENGR 401 - Professional Practice: B+',
      },
      {
        itemTitle: 'ENGR 489 - Engineering Project: C+',
      },
      {
        itemTitle: 'SWEN 422 - Human Computer Interaction: B',
      },
      {
        itemTitle: 'SWEN 423 - Object Oriented Paradigms: A+',
      },
      {
        itemTitle: 'SWEN 430 - Compiler Engineering: C+',
      },
      {
        itemTitle: 'SWEN 433 - Web Information Systems Engineering: C+',
      },
    ],
  },
  {
    heading: '2012',
    listItems: [
      {
        itemTitle: 'COMP 304 - Programming Languages: B',
      },
      {
        itemTitle: 'COMP 307 - Introduction to Artificial Intelligence: C+',
      },
      {
        itemTitle: 'ENGR 301 - Project Management: A-',
      },
      {
        itemTitle: 'ENGR 302 - Group Project: B+',
      },
      {
        itemTitle: 'SWEN 301 - Structured Methods: C+',
      },
      {
        itemTitle: 'SWEN 302 - Agile Methods: B',
      },
      {
        itemTitle: 'SWEN 303 - User Interface Design: B',
      },
    ],
  },
  {
    heading: '2011',
    listItems: [
      {
        itemTitle: 'NWEN 241 - Systems Programming: B',
      },
      {
        itemTitle: 'NWEN 242 - Computer Organisations: A-',
      },
      {
        itemTitle: 'SWEN 221 - Software Development: B-',
      },
      {
        itemTitle: 'SWEN 222 - Software Design: C+',
      },
      {
        itemTitle: 'SWEN 223 - Software Engineering Analysis: B',
      },
      {
        itemTitle: 'SWEN 224 - Formal Foundations of Programming: B',
      },
    ],
  },
  {
    heading: '2010',
    listItems: [
      {
        itemTitle: 'COMP 102 - Introduction to Computer Program Design: A',
      },
      {
        itemTitle: 'COMP 103 - Introduction to Data Structures and Algorithms: B+',
      },
      {
        itemTitle: 'ENGR 101 - Engineering Technology: A+',
      },
      {
        itemTitle: 'MATH 132 - Introducation to Mathematical Thinking: A',
      },
      {
        itemTitle: 'STAT 192 - Statistics for Natural and Social Sciences: B-',
      },
      {
        itemTitle: 'SWEN 102 - Introduction to Software Modelling: A',
      },
    ],
  },
];

export const educationData: ListData = { type: 'list', tabHeading, pageTitle, description, lists };