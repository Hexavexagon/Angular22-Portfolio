import { ParagraphData } from "../../types/tab-types";

const tabHeading = 'Introduction';
const pageTitle = 'Introduction';
const sections = [
  {
    heading: 'Introduction',
    paragraphs: [
      'Hi there. My name is Vex Chat-Blanc and I am a citizen and permanent resident of Aotearoa, currently residing in Wellington.',
    ],
  },
  {
    heading: 'What Is This?',
    paragraphs: [
      'This app serves as my Curriculum Vitae and portfolio. I made it both because this approach worked well last time I was job hunting, and also because I wanted to try out the most up-to-date version of Angular, especially so my skills with it are fresh.',
      'I also had another motivation for creating this. I lost my job in a sweeping downsizing that affected a lot of very talented people I worked with. When I realised I would be making a new app, I wanted it to be something others on my team could easily clone and use for their own CVs.',
      'This ended up being quite a fun challenge, as I needed to engineer it from scratch to be easy to clone, edit, build, and deploy.',
    ],
  },
  {
    heading: 'Building And Deploying',
    paragraphs: [
      '',
    ],
  },
  {
    heading: 'Making Responsive Tabs',
    paragraphs: [
      'For the most part, the design you see here is stock Angular Material. I thought it was a good idea to use something our team is comfortable with, and it is particularly easy to use with Angular. However, since I never intended for the tab content to be interactive, the default behaviour of Angular Material tabs felt a bit lacklustre for this use.',
      'I wanted a more responsive navigation experience for my UX, so I set to finding out how to make it keyboard navigable (Material tabs already are, but they require being the focused element on the page so as not to interfere with other interactions, and they will not switch tabs until you confirm your selection with space/enter, which I believe is to allow tabs to be lazy loaded - not a default behaviour, but it is a feature Material tabs have if you configure them right). This endeavour lead me to find out that the Angular component decorator has a "host" directive which can be used to bind global event handlers. I used this to create a tab index and two-way bind it to the Material tab group. Changing this index is what allows the app to switch tabs quickly without waiting to confirm a selection.',
      'Next I wanted to add touchscreen and mouse support. I set up some bindings to swipe gestures, but somewhere in the process of implementing mouse support I realised that the browser PointerEvents will work for touch, mouse, and stylus (I have yet to test stylus support, but theoretically it works, so please try it if you have the opportunity). So I replaced the swipe events with pointer events, but found mouse support did not really feel good, mostly because it would change tab while highlighting text. It was easy enough to remove mouse support just by adding some early failures to the handler functions that trigger if the pointer type is "mouse".',
      'The end result is we have some tabs that will change on left and right cursor keys, touch swipes, and theoretically stylus swipes. The index also wraps around, so you can go from the start to the end or vice versa. All in all it is just a few small changes, but it really brought the user experience to the level I wanted it to be on.',
    ],
  },
  {
    heading: 'Text With A Gradient',
    paragraphs: [
      'You probably noticed already that the footer has a nice gradient going on.',
    ],
  },
  {
    heading: 'Referees',
    paragraphs: [
      '',
    ],
  },
];

export const introductionData: ParagraphData = { type: 'paragraph', tabHeading, pageTitle, description: null, sections };
