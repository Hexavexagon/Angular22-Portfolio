// Types
import { CardData } from "../../types/tab-types";

const tabHeading = 'History of Work';
const pageTitle = 'History of Work';
const description = null;
const cards = [
  {
    title: 'Work at iQualify',
    subtitle: 'October 2015 - November 2026',
    avatar: 'iq.png',
    paragraphs: [
      'I worked for iQualify in the position of Full Stack Developer, working in small teams to develop features and address support issues and bug fixes.',
      'It is hard to describe exactly what I did at iQualify, as over a decade of working as a generalist put a lot of different things in my workload. I started as a mentee handling support issues that were mostly bugfixes and data integrity problems. As I grew into my role that changed to feature development, usually focused on AngularJS/LESS front-end. I later got the opportunity to work on APIs, nx microservices, a Cron job, and a UI design library (we later swapped this for Angular Material).',
      'Working flexible hours with a team that shared a frankly astounding amount of competency who brought their dogs into the office regularly and shared my interest in sonic arts was often a great experience that I will be seeking to find again.',
    ],
  },
  {
    title: 'Work at i-lign (now known as Legend for Business)',
    subtitle: 'Febuary 2013',
    avatar: 'ilign.jpeg',
    paragraphs: [
      'I had an intern position at i​-lign, where I set up a new continuous integration server (Jenkins), did some bug fixes on their webapp, and worked on transferring it to a new authentication method.',
      'When I first interviewed for the position, they asked me about the technologies I was familiar with, noting that their app was written with languages and tools I already know, so I was quite surprised when I turned up the first day and they asked me to set up an instance of Jenkins - a thing I had no previous knowledge of or experience with. That said, I really enjoyed both the challenge and the learning process.',
      'This project made me much more familiar with webhooks and build tools (I believe we used Grunt), and have been secretly hoping someone will hire me to setup a coninuous integration server again someday.',
    ],
  },
]

export const workHistoryData: CardData = { type: 'card', tabHeading, pageTitle, description, cards };