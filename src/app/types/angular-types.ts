type ListItem = {
  itemTitle: string,
  lines?: string[],
}

export type List = {
  heading: string,
  listItems: ListItem[],
};

export type Card = {
  title: string,
  subtitle: string,
  avatar?: string,
  imageSrc?: string,
  paragraphs: string[],
};
