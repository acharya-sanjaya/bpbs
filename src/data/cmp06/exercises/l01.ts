import type {ExerciseType} from "@data/ExerciseTypes";

const l01: ExerciseType[] = [
  {
    type: "mcq",
    questions: [
      {
        id: "mcq1",
        statement: "From which language is the word “Computare” derived?",
        options: ["French", "Latin", "English", "Greek"],
        answer: "Latin",
      },
      {
        id: "mcq2",
        statement: "Where are computers used?",
        options: ["Education", "Business", "Both", "None"],
        answer: "Both",
      },
      {
        id: "mcq3",
        statement: "The speed of a computer is measured in:",
        options: ["Bits", "Hertz", "Byte", "GB"],
        answer: "Hertz",
      },
      {
        id: "mcq4",
        statement: "Which of the following is not a part of a computer?",
        options: ["Keyboard", "Mouse", "Power Plug", "Monitor"],
        answer: "Power Plug",
      },
      {
        id: "mcq5",
        statement: "What does the term GIGO mean?",
        options: ["Great Input, Great Output", "Garbage In, Garbage Out", "Good Information, Good Output", "General Input, General Output"],
        answer: "Garbage In, Garbage Out",
      },
      {
        id: "mcq6",
        statement: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Nibble"],
        answer: "Bit",
      },
      {
        id: "mcq7",
        statement: "Which feature of a computer allows it to do many different tasks?",
        options: ["Accuracy", "Diligence", "Versatility", "Speed"],
        answer: "Versatility",
      },
      {
        id: "mcq8",
        statement: "What does a computer need to work?",
        options: ["Water Supply", "Fuel", "Electricity", "Sunlight"],
        answer: "Electricity",
      },
      {
        id: "mcq9",
        statement: "Which of the following is a limitation of a computer?",
        options: ["It can learn from past experience.", "It has emotions.", "It depends on human instructions.", "It can think on its own."],
        answer: "It depends on human instructions.",
      },
      {
        id: "mcq10",
        statement: "Which field uses computers for teaching and learning?",
        options: ["Agriculture", "Entertainment", "Education", "Medicine"],
        answer: "Education",
      },
    ],
  },
  {
    type: "tt",
    questions: [
      {
        id: "tt1",
        statement: "Has the capacity to do several tasks within a second.",
        answer: "Speed",
      },
      {
        id: "tt2",
        statement: "Counterpart.",
        answer: "System Unit",
      },
      {
        id: "tt3",
        statement: "Exchanging information throughout the world.",
        answer: "Communication",
      },
      {
        id: "tt4",
        statement: "Collection of four bits.",
        answer: "Nibble",
      },
      {
        id: "tt5",
        statement: "The continuously working capacity of a computer without losing its speed and accuracy.",
        answer: "Diligence",
      },
      {
        id: "tt6",
        statement: "The computer terminology in which output is determined according to the input.",
        answer: "GIGO (Garbage In, Garbage Out)",
      },
      {
        id: "tt7",
        statement: "The computer device which is used in hospitals that helps to maintain the heartbeat of a patient.",
        answer: "Pacemaker",
      },
      {
        id: "tt8",
        statement: "The collection of eight bits or two nibbles.",
        answer: "Byte",
      },
      {
        id: "tt9",
        statement: "A service which allows users to do direct financial transactions.",
        answer: "Online payment gateway",
      },
    ],
  },
  {
    type: "tf",
    questions: [
      {
        id: "tf1",
        statement: "A computer cannot store data and information for future use.",
        answer: false,
      },
      {
        id: "tf2",
        statement: "To perform any task on the computer, we have to instruct the computer what to do.",
        answer: true,
      },
      {
        id: "tf3",
        statement: "A computer takes lots of time to do complex calculations.",
        answer: false,
      },
      {
        id: "tf4",
        statement: "One millisecond is one thousandth part of a second.",
        answer: true,
      },
    ],
  },
];

export default l01;
