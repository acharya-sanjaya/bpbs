import {b, e, type ChapterType, g} from "@data/NoteTypes";

export const l01: ChapterType = [
  {
    topic: "Computer",
    paragraph: {
      type: "text",
      content: [
        `A computer is an ${b}electronic device${e} that ${b}takes raw data${e}, ${b}processes it${e} according to the provided instructions and ${b}produces meaningful information${e} and ${b}stores data${e} for future use.`,
      ],
    },
    explanation: {
      type: "text",
      content: [`Computer is an ${b}electronic device${e} which follows ${b}IPOS${e} principle.`],
    },
  },
  {
    topic: "Basic parts of Computer",
    paragraph: {
      type: "list",
      content: {
        listStyle: "list-[number]",
        label: "The basic parts of computer are:",
        items: [
          `${b}Input Unit${e}: Keyboard, Mouse`,
          `${b}Processing Unit${e}: CPU`,
          `${b}Output Unit${e}: Monitor, Printer`,
          `${b}Storage Unit${e}: Hard Disk, RAM`,
        ],
      },
    },
  },
  {
    topic: "Working principle of Computer",
    paragraph: {
      type: "image",
      content: {
        src: "https://i.ibb.co/23pQ19kK/image.png",
        alt: "IPOS",
        caption: "IPOS Principle",
      },
    },
    explanation: {
      type: "list",
      content: {
        label: "Computer works under the IPOS principle. Where,",
        items: [
          `${g}Input${e}<br/>It refers to the data and instructions ${b}given to${e} the computer.<br/><br/>`,
          `${g}Processing${e}<br/>It is the method of ${b}performing actions on data${e} according to the instruction.<br/><br/>`,
          `${g}Output${e}<br/>It is the final result ${b}given by${e} the computer after processing.<br/><br/>`,
          `${g}Storage${e}<br/>Storage is where computers ${b}store data${e} for future use.`,
        ],
      },
    },
    explainLabel: "Explanation",
  },
  {
    topic: "Data and Information",
    paragraph: {
      type: "text",
      content: [
        `${g}Data${e} is the collection of raw facts that is not processed.`,
        "<br/>",
        `${g}Information${e} is the form of data that is processed and gives proper meaning.`,
      ],
    },
  },
  {
    topic: "Characteristics of Computer",
    paragraph: {
      type: "list",
      content: {
        label: "The features (characteristics) of computer are:",
        items: [
          `${g}Speed${e}<br/>Computers can perform tasks at extremely ${b}high speed${e}.`,
          `${g}Accuracy${e}<br/>Computers always produce ${b}correct output${e} as long as input is correct.`,
          `${g}Versatility${e}<br/>Computers can perform ${b}variety of tasks${e} in various fields.`,
          `${g}Storage${e}<br/>Computers can ${b}store data${e} and information for future use.`,
          `${g}Communication${e}<br/>Computers ${b}can communicate${e} with each other through various mediums.`,
        ],
      },
    },
  },
  {
    topic: "Units of Time",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: ["1 Millisecond =  0.001 second", "1 Microsecond = 10⁻⁶ second", "1 Nanosecond = 10⁻⁹ second", "1 Picosecond = 10⁻¹² second"],
      },
    },
  },
  {
    topic: "Storage Units",
    paragraph: {
      type: "list",
      content: {
        label: "The storage units of computer are:",
        items: [
          `1 ${b}b${e} = 1 ${b}binary digit${e} (${g}0${e} or ${g}1${e})`,
          `4 ${b}b${e} = 1 ${b}Nibble${e}`,
          `8 ${b}b${e} = 2 ${b}Nibbles${e} = 1 ${b}B${e}`,
          `1024 ${b}B${e} = 1 ${b}KB${e}`,
          `1024 ${b}KB${e} = 1 ${b}MB${e}`,
          `1024 ${b}MB${e} = 1 ${b}GB${e}`,
          `1024 ${b}GB${e} = 1 ${b}TB${e}`,
          `1024 ${b}TB${e} = 1 ${b}PB${e}`,
          `1024 ${b}PB${e} = 1 ${b}EB${e}<br/><br/>Where,<br/>b = bit<br/>B = Byte<br/>KB = KiloByte<br/>MB = MegaByte<br/>GB = GigaByte<br/>TB = TeraByte<br/>PB = PetaByte<br/>EB = ExaByte`,
        ],
      },
    },
  },
  {
    topic: "GIGO",
    paragraph: {
      type: "text",
      content: [
        `${b}GIGO${e} stands for Garbage In, Garbage Out`,
        `<br/>Usually, computers give 100% correct output but when ${b}input is wrong${e}, they give ${b}wrong output${e}. This is called GIGO.`,
      ],
    },
    explanation: {
      type: "text",
      content: ["Wrong Input => Wrong Output"],
    },
  },
  {
    topic: "Limitations of Computer",
    paragraph: {
      type: "list",
      content: {
        label: "The limitations (drawbacks) of computer are:",
        items: [
          `It ${b}depends on human${e} instructions.`,
          `It has ${b}no feelings${e} or emotions.`,
          `It ${b}cannot think${e} or make decisions on its own.`,
          `It ${b}needs electricity${e} to operate.`,
        ],
      },
    },
  },
  {
    topic: "Application of Computer",
    paragraph: {
      type: "list",
      content: {
        label: "The applications of computer are:",
        items: [
          `${g}Home${e}<br/>For performing personal tasks like making documents, watching movies and playing games.`,
          `${g}Education${e}<br/>For making presentations, training and online classes.`,
          `${g}Medical and Health${e}<br/>For diagnosing diseases, monitoring patients' conditions and maintaining medical records.`,
          `${g}Entertainment${e}<br/>For playing games, watching movies, listening to music and making animations.`,
          `${g}Business${e}<br/>For maintaining sales records, managing employee and inventory`,
          `${g}Science and Research${e}<br/>For making research, collecting data, forecasting weather and simulating experiments`,
        ],
      },
    },
  },
  {
    topic: "E-commerce",
    paragraph: {
      type: "text",
      content: [
        `E-commerce is the process of ${b}buying and selling${e} products and services over the ${b}internet${e}.`,
        "<br/>",
        `${g}Examples${e}: Amazon, eBay, AliExpress, Walmart, daraz, etc.`,
      ],
    },
  },
  {
    topic: "Online Payment Gateway",
    paragraph: {
      type: "text",
      content: [
        `Online payment gateway is the platform through which customers can ${b} make financial transactions${e} (payments) through internet.`,
        "<br/>",
        `${g}Examples${e}: PayPal, Stripe, eSewa, Khalti, Prabhu pay, etc.`,
      ],
    },
  },
];
