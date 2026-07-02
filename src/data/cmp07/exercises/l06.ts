import type {ExerciseType} from "@data/ExerciseTypes";

export const l06: ExerciseType[] = [
  {
    type: "mcq",
    questions: [
      {
        id: "mcq1",
        statement: "The software that is used to create documents, letters, etc. is called _____.",
        options: ["MS-Word", "MS-Excel", "PowerPoint", "All of the above"],
        answer: "MS-Word",
      },
      {
        id: "mcq2",
        statement: "The tab that gives access to the file functions is called _____.",
        options: ["Ribbon", "File tab", "Quick Access toolbar", "None of the above"],
        answer: "File tab",
      },
      {
        id: "mcq3",
        statement: "The bar that displays the title of the document is called _____.",
        options: ["a. Title bar", "b. Toolbar", "c. Status bar", "d. Both (a) and (b)"],
        answer: "a. Title bar",
      },
      {
        id: "mcq4",
        statement: "To save the document we can also press keys:",
        options: ["CTRL + V", "CTRL + S", "CTRL + X", "CTRL + Y"],
        answer: "CTRL + S",
      },
      {
        id: "mcq5",
        statement: "The command that moves the text from one location to another is _____.",
        options: ["Cut/Paste", "Copy/Paste", "Paste/Cut", "Select/Cut"],
        answer: "Cut/Paste",
      },
      {
        id: "mcq6",
        statement: "The process of correcting mistakes in a document is called _____.",
        options: ["Formatting document", "Editing document", "Selecting document", "All of the above"],
        answer: "Editing document",
      },
      {
        id: "mcq7",
        statement: "The grammatical errors are underlined with a _____ line.",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Blue",
      },
      {
        id: "mcq8",
        statement: "The command that cancels the last action performed on the document is _____.",
        options: ["Undo", "Redo", "Delete", "None of the above"],
        answer: "Undo",
      },
      {
        id: "mcq9",
        statement: "The position of the text on the page is called _____.",
        options: ["Text alignment", "Text position", "Document alignment", "All of the above"],
        answer: "Text alignment",
      },
      {
        id: "mcq10",
        statement: "The space between the paragraphs is called _____.",
        options: ["Page spacing", "Line spacing", "Text spacing", "All of the above"],
        answer: "Line spacing",
      },
      {
        id: "mcq11",
        statement: "Artistic display of the text is called _____.",
        options: ["WordArt", "Picture", "Font style", "Font size"],
        answer: "WordArt",
      },
    ],
  },

  {
    type: "fill",
    questions: [
      {
        parts: [
          {type: "gap", id: "g1"},
          {type: "text", value: " is a software that allows you to create, edit, view, and format text documents."},
        ],
        answers: [{id: "g1", value: "Word processor"}],
      },
      {
        parts: [
          {type: "gap", id: "g2"},
          {type: "text", value: " is one of the most popular word processing software."},
        ],
        answers: [{id: "g2", value: "MS-Word"}],
      },
      {
        parts: [
          {type: "gap", id: "g3"},
          {type: "text", value: " is the collection of several commands."},
        ],
        answers: [{id: "g3", value: "Command Tab"}],
      },
      {
        parts: [
          {type: "text", value: "Press "},
          {type: "gap", id: "g4"},
          {type: "text", value: " keys to create a new document from the blank template."},
        ],
        answers: [{id: "g4", value: "Ctrl + N"}],
      },
      {
        parts: [
          {type: "text", value: "MS-Word automatically starts a new line when you reach the "},
          {type: "gap", id: "g5"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g5", value: "end of the line"}],
      },
      {
        parts: [
          {type: "text", value: "Press "},
          {type: "gap", id: "g6"},
          {type: "text", value: " key, then type to make characters in capital letters."},
        ],
        answers: [{id: "g6", value: "Caps Lock"}],
      },
      {
        parts: [
          {type: "text", value: "To delete one word from the right side of the cursor, press "},
          {type: "gap", id: "g7"},
          {type: "text", value: " keys."},
        ],
        answers: [{id: "g7", value: "Ctrl + Delete"}],
      },
      {
        parts: [
          {type: "text", value: "Press "},
          {type: "gap", id: "g8"},
          {type: "text", value: " keys to copy the selected text and press "},
          {type: "gap", id: "g9"},
          {type: "text", value: " keys to paste the copied text."},
        ],
        answers: [
          {id: "g8", value: "Ctrl + C"},
          {id: "g9", value: "Ctrl + V"},
        ],
      },
      {
        parts: [
          {type: "text", value: "By using "},
          {type: "gap", id: "g10"},
          {type: "text", value: ", you can add different styles and special effects to the document."},
        ],
        answers: [{id: "g10", value: "WordArt"}],
      },
    ],
  },

  {
    type: "tf",
    questions: [
      {
        id: "tf1",
        statement: "A word processor is software that allows you to create presentation slides on the computer.",
        answer: false,
      },
      {
        id: "tf2",
        statement: "The Ribbon panel contains: Home, Insert, Page Layout, References, Mailings, Review, and View tabs.",
        answer: true,
      },
      {
        id: "tf3",
        statement: "A blinking vertical line that appears on the page is called a scrollbar.",
        answer: false,
      },
      {
        id: "tf4",
        statement: "Correcting mistakes in a document is called formatting the document.",
        answer: false,
      },
      {
        id: "tf5",
        statement: "The Find command is used to find a particular word in the document.",
        answer: true,
      },
      {
        id: "tf6",
        statement: "Spelling mistakes are underlined with a green line and grammatical errors are underlined with a red line.",
        answer: false,
      },
    ],
  },
];
