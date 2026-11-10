import { ParagraphData } from "../../types/tab-types";

const tabHeading = 'Contact Details';
const pageTitle = 'Contact Details';
const sections = [
  {
    paragraphs: [
      'I would rather not put too many personal details in a place easily scraped by bots, but here are some details about the best ways to contact me.',
      'Firstly, if I have applied for a job with you, then you should have contact details included with the application.',
      'The fastest way to contact me is by SMS text. In most situations I will see this and respond instantly.',
      'If you want to call me, please send a text first as I sometimes refuse calls from unknown numbers.',
      'If you want to have a video chat, Google Meet always works well for me.',
      'If nothing else works for you, you can always email me. This used to be the fastest and most reliable way to contact me, but for reasons beyond my understanding the Gmail app stopped notifying me about emails and I cannot seem to fix it. Still, I will probably be checking it often while job-hunting so should respond quickly.',
      
      'Referees will be available on request.',
    ],
  },
];

export const contactData: ParagraphData = { type: 'paragraph', tabHeading, pageTitle, description: null, sections };