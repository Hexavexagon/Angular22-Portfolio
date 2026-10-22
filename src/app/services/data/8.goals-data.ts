export type GoalsData = { heading: string, description: string | null, paragraphs: string[] };

const heading = 'Goals';
const description = 'In terms of employment, I have a few things I am on the lookout for:';
const paragraphs = [
  'I want a remote position, preferably with somewhat flexible hours, so I can cook for myself and handle chores easier.',
  'My ideal days would be three days a week, preferably Monday, Wednesday, Friday. I switched to this setup a long time ago and it has been great for my work-life balance.',
  'I work in a Linux dev environment without the use of Ai and I am not inclined to change that.',
];

export const goalsData: GoalsData = { heading, description, paragraphs };
