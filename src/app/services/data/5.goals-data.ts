// Types
import { ParagraphData } from "../../types/tab-types";

const tabHeading = 'Goals And Interests';
const pageTitle = 'Goals And Interests';
const sections = [
  {
    heading: 'Employment',
    paragraphs: [
      'In terms of employment, there are a few things I am looking out for in particular. I want a remote position working three days a week, preferably Monday, Wednesday, Friday. This is to manage my health, hobbies, and home life.',
      'I work in a Linux dev environment without the use of LLMs and I am not inclined to change that.',
    ],
  },
  {
    heading: 'Interests',
    paragraphs: [
      'I like to be a very active person, although most of my biggest interests keep me in front of a computer, so I have a bit of a duality of man situation going on and the side with the most RSI is winning.',
      'I love cycling, cooking, tabletop, poetry, vector art, and most of all vernacular dance. Catch me outside the war memorial with some silk fans or my fibrewhip on a warm enough night. I used to record such sessions but the Android camera app decided to mute all audio when it records, including the music I dance to. Maybe I will find another camera app and get back into it now that I have more free time.',
    ],
  },
  {
    heading: 'Goals',
    paragraphs: [
      'I had been considering finally buying a house, and possibly moving somewhere up north where the air will cause me less health problems. I would like to be able to pursue that again in the future. Preferably I want to go somewhere where I can get a bow and do a bit of target shooting once in a while.',
      'I want to do more to support tabletop roleplaying in Aotearoa, though the industry is a pretty volatile market and it has not been looking too kindly in the last few years. I still have an aim to do more to help the scene grow, though.',
      'I never had much spare time and energy to contribute to open source projects, so I would like to look into pushing some changes I want in a couple of projects I use, and also doing some modding.',
      'If time allows I also want to rebuild the Somnimath project in a platform suited to it. This is a pretty complicated proposition because tools for programming music are generally designed for musicians not programmers so replicating the functionality of ChucK is difficult, but ChucK itself is an abandoned half-documented language that is very hard to get a working compiler for.',
      'Finally, more out of necessity than not, I might look into making some Android apps. In the early days of smart phones there were some good things available, but nowadays they are much harder to find (it may just be that they are buried now under all the bad ones). Sometimes I consider if it would be worth the time to make a little thing myself, especially if it means getting away from ads and tracking. That said, I also am putting some serious consideration into switching to Ubuntu Touch instead.',
    ],
  },
];

export const goalsData: ParagraphData = { type: 'paragraph', tabHeading, pageTitle, description: null, sections };
