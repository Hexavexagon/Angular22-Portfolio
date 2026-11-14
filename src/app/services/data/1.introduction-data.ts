// Types
import { ParagraphData } from "../../types/tab-types";

const tabHeading = 'Introduction';
const pageTitle = 'Introduction';
const sections = [
  {
    heading: 'What Is This?',
    paragraphs: [
      'Hi there. My name is Vex Chat-Blanc and I am a citizen and permanent resident of Aotearoa, currently residing in Wellington. I was recently (December 2026) made redundant and decided to throw together a digital curriculum vitae to make the jobhunting process a little simpler.',
      'So I thought I would try out the latest version of Angular, and later chose to add Angular Material to speed things up a bit and not spend too long on details that lack importance.',
      'Feel free to head over to whatever tabs are of interest to you, or read on to hear how I solved some of the challenges it presented.',
    ],
  },
  {
    heading: 'Building And Deploying',
    paragraphs: [
      'Because the redundancies affected many of the people I worked with, the first challenge I set myself was to create an app that others could also use to create their own CVs, including the non-developers in the team. This meant two important things: 1. I would have to document the process of cloning, editing, building, and deploying exceptionally well, and 2. the app itself would need to be planned from the start to only require minimum changes.',
      'Something I always wanted to try was deploying an Angular app to github pages, so I thought this was a good opportunity (I actually did not know whether it was possible when I started). This turned out pretty well. Guides recommended a simple solution, and the only real problem I encountered was that the build process creates a "browser" folder to put the files in, but github pages will only serve from the root folder or /docs. It seems some people solve this by building into the /docs folder, but that is a weird choice so I searched around the Angular documentation until I found the configuration value to remove the "browser" folder and just leave everything in root.',
      'With that solved, I had managed to make a project that can easily be built and deployed just by running two scripts, as documented in the README file. It is somewhat unfortunate that I cannot do anything about the difficulty of creating a Github account and cloning the repository, but Github themselves have that pretty well documented already, so I think it should be fine (as of writing this, the theory has not yet been tested).'
    ],
  },
  {
    heading: 'Making Responsive Tabs',
    paragraphs: [
      'For the most part, the design you see here is stock Angular Material. I thought it was a good idea to use something our team is comfortable with, and it is particularly easy to use with Angular. However, since I never intended for the tab content to be interactive, the default behaviour of Angular Material tabs felt a bit lacklustre for this use.',
      'I wanted a more responsive navigation experience for my UX, so I set to finding out how to make it keyboard navigable (Material tabs already are, but they require being the focused element on the page so as not to interfere with other interactions, and they will not switch tabs until you confirm your selection with space/enter, which I believe is to allow tabs to be lazy loaded - not a default behaviour, but it is a feature Material tabs have if you configure them right). This endeavour lead me to find out that the Angular component decorator has a "host" directive which can be used to bind global event handlers. I used this to create a tab index and two-way bind it to the Material tab group. Changing this index is what allows the app to switch tabs quickly without waiting to confirm a selection.',
      'Next I wanted to add touchscreen and mouse support. I set up some bindings to swipe gestures, but somewhere in the process of implementing mouse support I realised that the browser PointerEvents will work for touch, mouse, and stylus (I have yet to test stylus support, but theoretically it works, so please try it if you have the opportunity). So I replaced the swipe events with pointer events, but found mouse support did not really feel good, mostly because it would change tab while highlighting text. It was easy enough to remove mouse support just by adding some early failures to the handler functions that trigger if the pointer type is "mouse".',
      'The end result is we have some tabs that will change on left and right cursor keys, touch swipes, and theoretically stylus swipes. The index also wraps around, so you can go from the start to the end or vice versa. All in all it is just a few small changes, but it really brought the user experience to the level I wanted it to be on.',
      'Reflecting on the solution, I would probably choose a more reserved approach for a larger application, just because this approach makes heavy use of global event bindings. Computationally, it does very little in each event handler, but it is processing events far more often than it needs to. I could probably also use debouncing to limit the computational load, although you have to be careful about introducing latency into the user experience if you debounce a function.',
    ],
  },
  {
    heading: 'Text With A Gradient',
    paragraphs: [
      'You probably noticed already that the footer has a nice gradient going on. It runs from a sky-ish blue to the spring green of Angular Material theming (it was visually more appealing to match the underline of the tab headers).',
      'This might not seem like a big deal (and fair enough to say so), but CSS lacks support for gradients in font colours. So since it is an interesting little detail I wanted to highlight it.',
      'The trick is that the text is actually transparent, and the paragraph element the text is within has a gradient applied to it as a background image.',
    ],
  },
];

export const introductionData: ParagraphData = { type: 'paragraph', tabHeading, pageTitle, description: null, sections };
