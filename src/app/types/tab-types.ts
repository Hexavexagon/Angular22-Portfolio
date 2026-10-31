import { Card, List } from "./angular-types"

interface TabData {
  type: 'card' | 'list' | 'paragraph',
  heading: string,
  description: string | null,
}

export interface CardData extends TabData {
  type: 'card',
  cards: Card[],
}

export interface ListData extends TabData {
  type: 'list',
  lists: List[],
}

export interface ParagraphData extends TabData {
  type: 'paragraph',
  paragraphs: string[],
}
