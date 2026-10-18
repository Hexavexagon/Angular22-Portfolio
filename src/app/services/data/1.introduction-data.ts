export type IntroductionData = { heading: string, paragraphs: string[] };

const heading = 'What is this?';
const paragraphs = [
  'Welcome to my Curriculum Vitae/Portfolio. As you can see I put in a little extra effort to make it an app. This went well when I made an AngularJS app for my last job (please do not think about what this says about my age), so I thought I would try throwing together something with the latest version (currently 22) and Angular Material.',
  'Lorem',
  'Ipsum',
  'and',
  'such',
  'things',
];

export const introductionData: IntroductionData = { heading, paragraphs };