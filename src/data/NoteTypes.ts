export type ImageBlock = {
  src: string;
  alt: string;
  caption: string;
};
export type ListBlock = {
  label: string;
  listStyle?: string;
  items: string[];
};
export type TableBlock = {
  label: string;
  headers: {label: string; align?: "text-center" | "text-right"}[];
  rows: string[][];
};

export type ContentType =
  | {type: "text"; content: string[]}
  | {type: "image"; content: ImageBlock}
  | {type: "list"; content: ListBlock}
  | {type: "table"; content: TableBlock}
  | {type: "classroom"; content: string};

export type TopicType = {
  topic: string;
  paragraph: ContentType;
  explanation?: ContentType;
  explainLabel?: string;
};

export type ChapterType = TopicType[];

export const r = "<span class='font-bold text-red-600 dark:text-red-400 '>";
export const g = "<span class='font-bold text-green-600 dark:text-green-400 '>";
export const b = "<span class='font-bold text-blue-600 dark:text-blue-300 '>";
export const e = "</span>";
