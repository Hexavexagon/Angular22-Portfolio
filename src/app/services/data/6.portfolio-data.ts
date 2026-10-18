export type PortfolioData = { heading: string, paragraphs: string[] };

const heading = 'Portfolio';
const paragraphs = [
  'Cool projects I have worked on',
  'Somnimath/Timbrewolf',
  'Lab Assign. VUW used to use this to assign labs to students. Now they use something called MyAllocator, since they swapped their LMS to Canvas in 2022.',
  '',
];

export const portfolioData: PortfolioData = { heading, paragraphs };