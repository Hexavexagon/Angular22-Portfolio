interface TabData {
  type: 'card' | 'list' | 'paragraph',
  tabHeading: string,
  pageTitle: string,
  description: string | null,
}


// Card Tabs
export type Card = {
  title: string,
  subtitle: string,
  avatar?: string,
  imageSrc?: string,
  paragraphs: string[],
  competencies?: string[],
};
export interface CardData extends TabData {
  type: 'card',
  cards: Card[],
}


// List Tabs
type ListItem = {
  itemTitle: string,
  lines?: string[],
}
export type List = {
  heading: string,
  listItems: ListItem[],
};
export interface ListData extends TabData {
  type: 'list',
  lists: List[],
}


// Paragraph Tabs
export interface ParagraphData extends TabData {
  type: 'paragraph',
  sections: {
    heading?: string,
    paragraphs: string[],
  }[],
}
