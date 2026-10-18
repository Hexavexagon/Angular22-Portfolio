export type ContactData = { heading: string, paragraphs: string[] };

const heading = 'Contact Details';
const paragraphs = [
  'I would rather not put too many personal details in a place easily scraped by bots, but here are some details about the best ways to contact me.',
  'Firstly, if I have applied for a job with you, then you should have contact details included with the application.',
  'The fastest way to contact me is by SMS text. In most situations I will see this and respond instantly.',
  'If you want to call me, you will have to text me and ask me to call. My phone cannot receive calls because I disabled the functionality to prevent unwanted calls.',
  'If you want to have a video chat, Google Meet always works well for me.',
  'If nothing else works for you, you can always email me at hexavexagon@gmail.com. This used to be the fastest and most reliable way to contact me, but for reasons beyond my understanding the Gmail app stopped notifying me about emails and I cannot seem to fix it. Still, I will probably be checking it often while job-hunting so should respond quickly.',
];

export const contactData: ContactData = { heading, paragraphs };