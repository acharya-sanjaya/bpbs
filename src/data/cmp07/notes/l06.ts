import {b, e, g, type ChapterType} from "@data/NoteTypes";

export const l06: ChapterType = [
  {
    topic: "Word Processor",
    paragraph: {
      type: "text",
      content: [
        `A ${b}word Processor${e} is a software application that allows users to ${b}create${e}, ${b}edit${e}, ${b}format${e}, ${b}save${e}, ${b}view${e}, and ${b}print${e} text documents.<br/><br/>`,
        `${g}Examples${e}: ${b}MS-Word${e}, ${b}Google Docs${e}, ${b}Word Star, Wordpad${e}, etc.`,
      ],
    },
  },
  {
    topic: "MS-Word (Microsoft Word)",
    paragraph: {
      type: "list",
      content: {
        label: `${b}Microsoft Word${e} is one of the most popular ${b}word processing software${e} developed by ${b}Microsoft Corporation${e}.
        <br/><br/>
        The extension of a MS-Word file is "${b}.docx${e}".
        <br/><br/>        
        Some popular versions of MS-Word are:`,
        items: ["MS-Word 2003", "MS-Word 2007", "MS-Word 2010", "MS-Word 2019", "MS-Word 2021"],
      },
    },
  },
  {
    topic: "Features of MS-Word",
    paragraph: {
      type: "list",
      content: {
        label: "Major features of Microsoft Word:",
        items: [
          `It allows to ${b}create${e}, ${b}edit${e}, ${b}format${e}, ${b}save${e} and ${b}print${e} documents.`,
          `It supports ${b}images${e}, ${b}tables${e}, ${b}charts${e}, ${b}WordArt${e}, and ${b}symbols${e}.`,
          `It has automatic ${b}spelling${e} and ${b}grammar${e} check.`,
          `It allows to ${b}copy${e}, ${b}cut${e} and ${b}paste${e} text easily.`,
          `It supports different file formats such as ${b}.docx${e} and ${b}.pdf${e}.`,
        ],
      },
    },
  },
  {
    topic: "Advantages of Word Processors over Traditional Typewriter",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          `Mistakes can be ${b}edited${e} without retyping the whole document.`,
          `Text can be ${b}formatted${e} (color, size, style, etc.),  ${b}copied${e}, ${b}cut${e}, and ${b}pasted${e} easily.`,
          `Documents can be ${b}saved${e} for future use.`,
          `The same document can be ${b}printed multiple times${e}.`,
          `Automatic ${b}spelling and grammar checking${e} reduces errors.`,
        ],
      },
    },
    explanation: {
      type: "list",
      content: {
        label: "MS-Word provides:",
        items: [
          `Easy ${b}editing${e}`,
          `Easy ${b}formatting${e}`,
          `${b}Save${e} files for furute use`,
          `${b}Printing${e} multiple times.`,
          `Automatic ${b}spelling${e} check`,
        ],
      },
    },
  },
  {
    topic: "Important Keyboard Shortcuts in MS-Word",
    paragraph: {
      type: "table",
      content: {
        label: "",
        headers: [{label: `${g}Shortcut Keys${e}`, align: "text-center"}, {label: `${g}Function${e}`}],
        rows: [
          {sectionLabel: "File Operations"},
          ["Ctrl + O", `${b}Open${e} an existing document`],
          ["Ctrl + S", `${b}Save${e} the current document`],

          {sectionLabel: "Editing"},
          ["Ctrl + C", `${b}Copy${e} selected text`],
          ["Ctrl + X", `${b}Cut${e} selected text`],
          ["Ctrl + V", `${b}Paste${e} copied or cut text`],
          ["Ctrl + Z", `${b}Undo${e} the last action`],
          ["Ctrl + Y", `${b}Redo${e} the last undone action`],
          ["Backspace", `${b}Remove${e} a ${g}character${e} ${b}left${e} to the cursor`],
          ["Del", `${b}Remove${e} a ${g}character${e} ${b}right${e} to the cursor`],
          ["Ctrl + Backspace", `${b}Remove${e} a ${g}word${e} ${b}left${e} of the cursor`],
          ["Ctrl + Del", `${b}Remove${e} a ${g}word${e} ${b}right${e} of the cursor`],

          {sectionLabel: "Find and Replace"},
          ["Ctrl + F", `${b}Find${e} text in the document`],
          ["Ctrl + H", `${b}Replace${e} text in the document`],

          {sectionLabel: "Selection"},
          ["Ctrl + A", `${b}Select Whole${e} document`],
          [`Shift + ${g}↑${e}`, `${b}Select${e} text upward`],
          [`Shift + ${g}↓${e}`, `${b}Select${e} text downward`],
          [`Shift + ${g}←${e}`, `${b}Select${e} one character to the left`],
          [`Shift + ${g}→${e}`, `${b}Select${e} one character to the right`],
          [`Ctrl + Shift + ${g}←${e}`, `${b}Select${e} one word to the left`],
          [`Ctrl + Shift + ${g}→${e}`, `${b}Select${e} one word to the right`],

          {sectionLabel: "Alignment"},
          ["Ctrl + L", `Align the selected text to the ${b}left${e}`],
          ["Ctrl + R", `Align the selected text to the ${b}right${e}`],
          ["Ctrl + E", `Align the selected text to the ${b}center${e}`],
          ["Ctrl + J", `${b}Justify${e} the selected text`],
        ],
      },
    },
  },

  {
    topic: "Formatting Shortcuts",
    paragraph: {
      type: "table",
      content: {
        label: "",
        headers: [
          {label: `${g}Shortcut Keys${e}`, align: "text-center"},
          {label: `${g}Function${e}`},
          {label: `${g}Example${e}`, align: "text-center"},
        ],
        rows: [
          ["Ctrl + B", `Makes the selected text ${b}bold${e}`, `<b>Hello</b>`],
          ["Ctrl + I", `Makes the selected text ${b}italic${e}`, `<i>Hello</i>`],
          ["Ctrl + U", `${b}Underline${e} selected text`, `<u>Hello</u>`],
          ["Ctrl + K", `Used to apply ${b}Strikethrough${e} effect`, `<s>Hello</s>`],
          [`Ctrl + ${g}[${e}`, `${g}Decreases${e} the ${b}font size${e} of the selected text`, "<small>Hello</small>"],
          [`Ctrl + ${g}]${e}`, `${g}Increases${e} the ${b}font size${e} of the selected text`, "<big>Hello</big>"],
          [`Ctrl + Shift + ${g}+${e}`, `Used to make ${b}superscript${e}`, `1<sup>st</sup>`],
          [`Ctrl + Shift + ${g}-${e}`, `Used to make ${b}subscript${e}`, `H<sub>2</sub>O`],
        ],
      },
    },
  },
  {
    topic: "Major Components Window",
    paragraph: {
      type: "list",
      content: {
        label: "The main components of the default MS-Word 2016 window are:",
        items: [
          `${b}Title Bar${e}<br/>Displays the name of the current document and Microsoft Word.<br/><br/>`,
          `${b}Quick Access Toolbar${e}<br/>Contains frequently used commands like Save, Undo and Redo.<br/><br/>`,
          `${b}File Tab${e}<br/>Provides file-related commands such as New, Open, Save, Print and Close.<br/><br/>`,
          `${b}Ribbon${e}<br/>Contains different tabs and groups of commands.<br/><br/>`,
          `${b}Document Area${e}<br/>The area where users type and edit documents.<br/><br/>`,
          `${b}Scroll Bar${e}<br/>Used to move through the document vertically or horizontally.<br/><br/>`,
          `${b}Status Bar${e}<br/>Displays page number, word count, language and zoom level.<br/><br/>`,
          `${b}Zoom Slider${e}<br/>Used to zoom in or zoom out the document.<br/><br/>`,
          `${b}Dialogue Box Launcher${e}<br/>It is a command used to open ${b}group${e} of related commands in a ${b}box${e} like structure.`,
        ],
      },
    },
  },
  {
    topic: "Rules While Typing Text",
    paragraph: {
      type: "list",
      content: {
        label: "Some important typing rules are:",
        items: [
          `Press the ${b}Spacebar${e} only ${b}once${e} between two words.`,
          `Do ${b}not${e} press ${b}Enter${e} at the end of every line.<br/>Because MS-Word automatically wraps the text to the next line.`,
          `Press ${b}Enter${e} only to start a new paragraph.`,
          `Use ${b}Caps Lock${e} or ${b}Shift${e} to type capital letters.`,
          `Locate the cursor to desired position to ${b}add text${e}.`,
        ],
      },
    },
    explanation: {
      type: "list",
      content: {
        label: "",
        items: [
          `Only one ${b}space${e}`,
          `Press ${b}Enter${e} to change paragraph (not line)`,
          `${b}Caps Lock${e} or ${b}Shift${e} to type capital letters.`,
          `${b}Add text${e} => Locate the cursor`,
        ],
      },
    },
  },
  {
    topic: "Word (Text) Wrapping",
    paragraph: {
      type: "text",
      content: [
        `${b}Word${e} (${b}Text${e}) ${b}Wrapping${e} is a feature that automatically arranges the text to ${b}new line${e} when the text reaches the ${b}end of the line${e} without having to press ENTER key.`,
      ],
    },
  },
  {
    topic: "Formatting a Document",
    paragraph: {
      type: "list",
      content: {
        label: `${b}Formatting${e} is the process of ${b}changing the appearance${e} of a document to make it attractive, readable and professional.<br/><br/>Examples of Formatting are`,
        items: [
          `Changing font ${b}type${e}, font ${b}size${e} and font ${b}color${e}.`,
          `Applying ${b}Bold${e}, ${b}Italic${e} and ${b}Underline${e}.`,
          `Changing ${b}text alignment${e}.`,
          `Adjusting ${b}line spacing${e} and ${b}paragraph spacing${e}.`,
        ],
      },
    },
    explanation: {
      type: "text",
      content: [`${g}Formatting${e} => Changing the appearance`],
    },
  },
  {
    topic: "Text Alignment",
    paragraph: {
      type: "list",
      content: {
        label: `There are ${b}four${e} text alignment methods in MS-Word.<br/>They are:`,
        items: [
          `${g}Left${e} => Ctrl + ${b}L${e}`,
          `${g}Center${e} => Ctrl + ${b}E${e}`,
          `${g}Right${e} => Ctrl + ${b}R${e}`,
          `${g}Justify${e} => Ctrl + ${b}J${e}<br/>Justify aligns text ${b}evenly${e} with both the ${b}left${e} and ${b}right${e} margins which gives the document a ${b}neat${e} and ${b}professional${e} appearance.`,
        ],
      },
    },
    explanation: {
      type: "image",
      content: {
        src: "https://i.ibb.co/MxZmLxkR/image.png",
        alt: "Alignment Icons",
        caption: "Alignments in MS-Word",
        className: "p-2 bg-white",
      },
    },
    explainLabel: "Icons of four alignments",
  },
  {
    topic: "Editing a Document",
    paragraph: {
      type: "list",
      content: {
        label: `${b}Editing${e} is the process of ${b}correcting${e} mistakes or ${b}modifying${e} the contents of a document.<br/><br/>Editing operations include:`,
        items: [
          `${b}Insert${e} new text.`,
          `${b}Delete${e} unwanted text.`,
          `${b}Cut${e}, ${b}Copy${e} and ${b}Paste${e} text.`,
          `${b}Undo${e} and ${b}Redo${e} actions.`,
          `${b}Find${e} and ${b}Replace${e} words or phrases.`,
        ],
      },
    },
    explanation: {
      type: "text",
      content: [`${g}Editing${e} => Modifying the contents`],
    },
  },
  {
    topic: "Undo and Redo",
    paragraph: {
      type: "text",
      content: [
        `${g}Undo${e} is the process of ${b}cancelling${e} the ${b}last action${e}.<br/><br/>`,
        `${g}Redo${e} is the process of ${b}cancelling${e} the ${b}last undo action${e}.`,
      ],
    },
  },
  {
    topic: "Highlighting Text",
    paragraph: {
      type: "text",
      content: [`${b}Highlighting${e} means giving ${b}background colors${e} to the background of the text.`],
    },
  },
  {
    topic: "Print Preview",
    paragraph: {
      type: "text",
      content: [
        `${b}Print Preview${e} is a feature that allows users to view ${b}how a document will appear${e} before printing.<br/><br/>`,
        `It helps users detect formatting mistakes and avoid unnecessary paper and ink wastage.`,
      ],
    },
  },
  {
    topic: "Paragraph Formatting",
    paragraph: {
      type: "list",
      content: {
        label: `${b}Paragraph Formatting${e} is the process of changing the ${b}appearance${e} and ${b}layout${e} of an ${b}entire paragraph${e}.<br/><br/>Paragraph formatting includes:`,
        items: [
          `${b}Text Alignment${e}: Left, Center, Right and Justify.`,
          `${b}Line Spacing${e}: Space between lines.`,
          `${b}Paragraph Spacing${e}: Space between paragraphs.`,
          `${b}Indentation${e}: nultiple spaces or tabs before the content.`,
          `${b}Bullets and Numbering${e}: Lists.`,
          `${b}Borders and Shading${e}.`,
        ],
      },
    },
  },
  {
    topic: "Header and Footer",
    paragraph: {
      type: "text",
      content: [
        `${b}Header${e} is the area at the ${b}top${e} of every page where information such as the document title, chapter name or logo can be placed.<br/><br/>`,
        `${b}Footer${e} is the area at the ${b}bottom${e} of every page where information such as page number, date or author's name can be placed.`,
      ],
    },
    explainLabel: "Remember",
    explanation: {
      type: "text",
      content: [`${g}Header${e} => Top of the page`, `${g}Footer${e} => Bottom of the page.`, "They appear in all of the pages in the document."],
    },
  },
  {
    topic: "WordArt",
    paragraph: {
      type: "list",
      content: {
        label: `${b}WordArt${e} is a feature in MS-Word that creates decorative and artistic text with ${b}special effects${e}.<br/><br/>WordArt provides effects such as:`,
        items: ["Shadow", "Reflection", "Glow", "Outline", "3D Rotation", "Transform"],
      },
    },
  },
];
