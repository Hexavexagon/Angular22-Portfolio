import { List } from "./angular-types";

export type EducationData = { heading: string, description: string | null, list: List[] };

const heading = 'History of Education';
const description = 'I have a Bachelor of Engineering with Honours, with Second Class Honours in Software Engineering from Victoria University of Wellington.';
const list = [
  {
    title: '2014',
    lines: [
      'CMPO 381 - Interface Design For Live Electronics: C+',
      'ECEN 201 - Data Acquisition: C',
      'MDDN 251 - Physical Computing: B',
      'SWEN 432 - Advanced Database Design And Implementation: B-',
    ],
  },
  {
    title: '2013',
    lines: [
      'ENGR 401 - Professional Practice: B+',
      'ENGR 489 - Engineering Project: C+',
      'SWEN 422 - Human Computer Interaction: B',
      'SWEN 423 - Object Oriented Paradigms: A+',
      'SWEN 430 - Compiler Engineering: C+',
      'SWEN 433 - Web Information Systems Engineering: C+',
    ],
  },
  {
    title: '2012',
    lines: [
      'COMP 304 - Programming Languages: B',
      'COMP 307 - Introduction to Artificial Intelligence: C+',
      'ENGR 301 - Project Management: A-',
      'ENGR 302 - Group Project: B+',
      'SWEN 301 - Structured Methods: C+',
      'SWEN 302 - Agile Methods: B',
      'SWEN 303 - User Interface Design: B',
    ],
  },
  {
    title: '2011',
    lines: [
      'NWEN 241 - Systems Programming: B',
      'NWEN 242 - Computer Organisation: A-',
      'SWEN 221 - Software Development: B-',
      'SWEN 222 - Software Design: C+',
      'SWEN 223 - Software Engineering Analysis: B',
      'SWEN 224 - Formal Foundations of Programming: B',
    ],
  },
  {
    title: '2010',
    lines: [
      'COMP 102 - Introduction to Computer Program Design: A',
      'COMP 103 - Introduction to Data Structures and Algorithms: B+',
      'ENGR 101 - Engineering Technology: A+',
      'MATH 132 - Introduction to Mathematical Thinking: A',
      'STAT 192 - Statistics for Natural and Social Sciences: B-',
      'SWEN 102 - Introduction to Software Modelling: A',
    ],
  },
];

export const educationData: EducationData = { heading, description, list };