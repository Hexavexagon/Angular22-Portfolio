import { Card } from "./angular-types";

export type PortfolioData = { heading: string, description: string | null, cards: Card[] };

const heading = 'Portfolio';
const description = 'Here are some projects I have worked on over the years.';
const cards = [
  {
    title: 'iQualify',
    subtitle: 'October 2015 - November 2026',
    imageSrc: '',
    paragraphs: [
      'I have been a full stack developer for the iQualify web-based service for roughly ten years. In that time it evolved from AngularJS through to an almost recent version of Angular (version upgrades was the last thing I was working on).',
      'We also implemented a pattern library before moving to Angular Material. I really enjoyed making front end components, even if our design specs got out of hand. When I was looking through my employment related documents for this I found a slideshow presentation I had apparently made about the design requirements of our pattern library buttons.',
      'I worked with some third party technologies also such as Redactor, Bootstrap, Lodash, Moment, and Cron.',
      'Key competencies: AngularJS, Angular16, Angular Material, Jade/Pug/HTML, LESS, MongoDB, Firebase, Node/NPM, NX',
    ],
  },
  {
    title: 'Strings',
    subtitle: 'Febuary 2024',
    imageSrc: '',
    paragraphs: [
      'I contributed to a private project that uses Ruby and Jekyll to construct a complex character generator tool for a sci-fi tabletop roleplaying game. It has since been taken down because of hosting costs, but a new version has been deployed instead. I have not contributed code to the new version, but contributed almost all the content in the warmachine generator.',
      'The new version can be found here: https://strings.stillfleet.com/stillfleet/warmachine',
    ],
  },
  {
    title: 'Somnimath/Timbrewolf',
    subtitle: 'July ­2014 - November 2014',
    imageSrc: '',
    paragraphs: [
      'I worked on a sonic arts project written in a sound­processing language called ChucK. It involved creating an open source framework for modern western music theory, a complex data structure and algorithm for generating music dynamically in response to accelerometer input from a small arduino controller, and the physical aspect of the controller (including wireless transmission and casing).',
    ],
  },
  {
    title: 'Startup Weekend',
    subtitle: 'August 2014',
    imageSrc: '',
    paragraphs: [
      'I attended Startup Weekend Edu and worked in a team of 8 designers, programmers, teachers, and business people to develop a business in 54 hours. We designed and pitched a service app that would allow high school and intermediate teachers to give their students sponsored problems to work on, and guide the students through the process of developing their own solution ­- effectively teaching them the process of evaluating and reworking an idea until it is viable, as well as empowering them with the understanding that they can make change in the world even if they only target a small aspect of a large issue.',
    ],
  },
  {
    title: 'Jenkins',
    subtitle: 'Febuary 2013',
    imageSrc: '',
    paragraphs: [
      'I had an intern position at i​-lign, where I set up a new continuous integration server (Jenkins), did some bug fixes on their webapp, and worked on transferring it to a new authentication method.',
    ],
  },
  {
    title: 'Lab Assign',
    subtitle: 'July 2012 - November 2012',
    imageSrc: '',
    paragraphs: [
      'I worked in a 6 person team on lab assignment software that processes forms students fill out on Blackboard and automatically sorts them into appropriate timeslots for labs to ensure the maximum possible happiness.',
      'The existing program used a single algorithm to do this that had never been optimized and we were tasked with finding a more effective method.',
      'To do this we employed the strategy design pattern in order to swap out fitness functions and AI algorithms to find the most efficient solution to the problem.',
      'This was for SWEN 302 ­Agile Methodologies, and was written in Java. Although the client was very satisfied with the result, VUW has since switched LMS to Canvas in 2022 and use a built-in tool called MyAllocator.',
    ],
  },
];

export const portfolioData: PortfolioData = { heading, description, cards };