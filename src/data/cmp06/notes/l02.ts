import {b, e, g, type ChapterType} from "@data/NoteTypes";

const tm = `${g}Time${e}: `;
const tech = `${g}Technology${e}: `;
const ex = `${g}Examples${e}: `;
const feat = `${g}Features${e}: `;
const prog = `${g}Programming Language${e}: `;
const io = `${g}Input/Output${e}: `;
const brk = "<br/>➞ ";

export const l02: ChapterType = [
  {
    topic: "History of Computers",
    paragraph: {
      type: "table",
      content: {
        label: "",
        headers: [
          {label: `${g}Computer${e}`, align: "text-center"},
          {label: `${g}Inventor${e}`, align: "text-center"},
          {label: `${g}Date of Invention${e}`, align: "text-center"},
          {label: `${g}Basic Function${e}`},
          {label: `${g}Important Feature${e}`},
        ],
        rows: [
          ["Abacus", "Chinese and Egyptians", "3000 BC", "To count and perform basic arithmetic calculations", "First calculating device"],
          ["Napier's Bones", "John Napier", "1614 AD", "To perform multiplication and division", "Used numbered rods (bones)"],
          ["Slide Rule", "William Oughtred", "1620 AD", "To perform mathematical calculations", "Based on logarithmic scales"],
          ["Pascaline", "Blaise Pascal", "1642 AD", "To perform addition and subtraction", "First mechanical calculating device"],
          [
            "Stepped Reckoner",
            "Gottfried Wilhelm Von Leibniz",
            "1671 AD",
            "To perform addition, subtraction, multiplication and division",
            "Could also calculate square roots",
          ],
          [
            "Jacquard's Loom",
            "Joseph Marie Jacquard",
            "1801 AD",
            "To automatically weave patterns in cloth using punched cards",
            "Introduced punched-card concept",
          ],
          [
            "Difference Engine",
            "Charles Babbage",
            "1822 AD",
            "To prepare mathematical and logarithmic tables automatically",
            "First automatic mechanical calculator",
          ],
          [
            "Analytical Engine",
            "Charles Babbage",
            "1833 AD",
            "General-purpose computation",
            "First programmable computer with input, processing, storage and output units",
          ],
          ["Tabulating Machine", "Dr. Herman Hollerith", "1887 AD", "To process census data", "Used punched cards for input"],
          [
            "Automatic Sequence Controlled Calculator (ASCC)",
            "Howard Aiken",
            "1937 AD",
            "Automatic sequence-controlled calculations",
            "Later known as Harvard Mark I",
          ],
          [
            "Atanasoff-Berry Computer (ABC)",
            "John Atanasoff and Clifford Berry",
            "1942 AD",
            "To solve mathematical equations electronically",
            "First electronic digital computer",
          ],
        ],
      },
    },
  },
  {
    topic: "Father of Computer",
    paragraph: {
      type: "text",
      content: [
        `${b}Charles Babbage${e} is known as the father of computer.`,
        "<br>",
        `Charles Babbage is known as the ${b}father of modern computers${e} ${g}BECAUSE${e} he designed the first digital mechanical computer called ${b}Analytical Engine${e} and gave the ${b}concept of basic computer${e}.`,
      ],
    },
    explanation: {
      type: "text",
      content: [
        `${g}Father${e} => ${b}Charles Babbage${e}.`,
        `${g}Why${e} => Designed ${b}first digital mechanical computer${e} + gave ${b}basic concept of computer${e}.`,
      ],
    },
  },
  {
    topic: "Lady Augusta Ada Lovelace",
    paragraph: {
      type: "text",
      content: [
        `Lady Augusta Ada Lovelace is known as the ${b}first computer programmer${e} ${g}BECAUSE${e} she developed the ${b}first computer program${e} for the ${b}Analytical Engine${e}.`,
      ],
    },
    explanation: {
      type: "text",
      content: [
        `${g}First programmer${e} => ${b}Lady Augusta Ada Lovelace${e}.`,
        `${g}Why${e} => Wrote ${b}first computer program${e} for ${b}Analytical Engine${e}.`,
      ],
    },
  },
  {
    topic: "History of Computer in Nepal",
    paragraph: {
      type: "list",
      content: {
        label: "The history of computer in Nepal started in 2028 BS:",
        items: [
          `In ${b}2028 BS${e}, the Government of Nepal brought ${b}IBM 1401${e} (second generation computer) to process ${b}census${e} data.`,
          `In ${b}2031 BS${e}, National Computer Centre (${b}NCC${e}) was established for ${b}national data processing${e} and providing ${b}trainings${e}.`,
          `In ${b}2038 BS${e}, a  more powerful computer ${b}ICL 2950/10${e} (fourth generation computer) was brought from England for processing ${b}census${e} data.`,
          `After ${b}2039 BS${e}, microcomputers such as ${b}Apple${e}, ${b}Vector${e}, ${b}Sirus${e}, etc were ${b}imported${e} by private companies and general public.`,
          `Later on, computer science course was added in the curriculum of ${b}schools${e} and ${b}colleges${e}.`,
          `In ${b}December, 1992 AD${e}, Computer Association of Nepal (${b}CAN${e}) was established which ${b}advises government${e} on IT policies and strategies, conducts ${b}tech exhibitions${e} and provides ${b}trainings and certifications${e} on computer skills.`,
          `Today computers are widely used in ${b}education${e}, ${b}business${e}, ${b}banking${e} and ${b}government sectors${e}.`,
        ],
      },
    },
    explainLabel: "Key Points",
    explanation: {
      type: "text",
      content: [
        `${g}2028 BS${e} => ${b}IBM 1401${e} for ${b}census${e} data processing.`,
        `${g}2031 BS${e} => ${b}NCC${e} for ${b}national data processing${e} and providing ${b}trainings${e}.`,
        `${g}2038 BS${e} => ${b}ICL 2950/10${e} for ${b}processing census data${e}.`,
        `${g}2039 BS${e} => ${b}Import${e} of microcomputers started.`,
        `${g}Later on${e} => Computer Science was taught in ${b}schools${e} and ${b}colleges${e}.`,
        `${g}1992 AD${e} => ${b}CAN${e} was established.`,
        `${g}Nowadays${e} => Used in ${b}education${e}, ${b}business${e}, ${b}banking${e} and ${b}government sectors${e}.`,
      ],
    },
  },
  {
    topic: "Generations of Computer",
    paragraph: {
      type: "text",
      content: [`Generation of computers is the ${b}categorization${e} of computers based on the ${b}technologies${e} used.`],
    },
  },
  {
    topic: "First Generation Computer",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          tm + "1946 - 1958",
          tech + "Vacuum Tubes",
          ex + "ENIAC, UNIVAC-I",
          prog + "Machine Language (0s and 1s)",
          io + "Punched Cards",
          feat +
            brk +
            "Very large size" +
            brk +
            "High power consumption" +
            brk +
            "Large amount of heat" +
            brk +
            "Less reliable" +
            brk +
            "Very expensive",
        ],
      },
    },
  },
  {
    topic: "Second Generation Computer",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          tm + "1959 - 1964",
          tech + "Transistors",
          ex + "IBM 1401, IBM 7094",
          prog + "Assembly Language",
          io + "Punched Cards and Magnetic Tape",
          feat + brk + "Smaller" + brk + "Faster" + brk + "Operating System" + brk + "Less heat" + brk + "More reliable" + brk + "Cheaper",
        ],
      },
    },
  },
  {
    topic: "Third Generation Computer",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          tm + "1965 - 1971",
          tech + "Integrated Circuits (IC)",
          ex + "IBM 360, PDP-8",
          prog + "High-level languages (FORTRAN, COBOL)",
          io + "Keyboard, Monitor",
          feat + brk + "Time-sharing system" + brk + "Less maintenance required" + brk + "Better efficiency",
        ],
      },
    },
  },
  {
    topic: "Fourth Generation Computer",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          tm + "1971 - Present",
          tech + "Microprocessor (VLSI)",
          ex + "IBM PC, Apple Macintosh",
          prog + "C, C++, Java and modern languages",
          io + "Mouse, Keyboard, GUI",
          feat +
            brk +
            "Very small size" +
            brk +
            "Very high speed" +
            brk +
            "Low power consumption" +
            brk +
            "Portable and user-friendly" +
            brk +
            "Highly reliable",
        ],
      },
    },
  },
  {
    topic: "Fifth Generation Computer",
    paragraph: {
      type: "list",
      content: {
        label: "",
        items: [
          tm + "Present & Future",
          tech + "AI and ULSI",
          ex + "Robotics, Expert Systems, AI Systems",
          prog + "AI-based languages, Python, ML frameworks",
          io + "Natural Language, Voice Input, Sensors",
          feat +
            brk +
            "AI based systems" +
            brk +
            "Natural language processing" +
            brk +
            "Machine learning capability" +
            brk +
            "Robotics integration" +
            brk +
            "Decision-making ability",
        ],
      },
    },
  },
  {
    topic: "Artificial Intelligence (AI)",
    paragraph: {
      type: "text",
      content: [`${b}Artificial Intelligence (AI)${e} is a branch of computer science that deals with making computers ${b}think${e} like humans.`],
    },
  },
];
