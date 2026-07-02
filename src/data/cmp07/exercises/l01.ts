import type {ExerciseType} from "@data/ExerciseTypes";

export const l01: ExerciseType[] = [
  {
    type: "fill",
    questions: [
      {
        parts: [
          {type: "text", value: "The capacity of a computer depends on the "},
          {type: "gap", id: "g1"},
          {type: "text", value: " used in it."},
        ],
        answers: [{id: "g1", value: "processor"}],
      },
      {
        parts: [
          {type: "text", value: "The four basic parts of a computer are keyboard, monitor, system unit and "},
          {type: "gap", id: "g2"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g2", value: "mouse"}],
      },
      {
        parts: [
          {type: "text", value: "A computer processes the data as per the given set of "},
          {type: "gap", id: "g3"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g3", value: "instructions"}],
      },
      {
        parts: [
          {type: "text", value: "The speed of a computer is measured in "},
          {type: "gap", id: "g4"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g4", value: "Hertz"}],
      },
      {
        parts: [
          {type: "text", value: "The speed at which CPU executes instructions is called "},
          {type: "gap", id: "g5"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g5", value: "clock speed"}],
      },
      {
        parts: [
          {type: "text", value: "Electronic devices serve as sending and receiving devices in a "},
          {type: "gap", id: "g6"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g6", value: "communication system"}],
      },
    ],
  },

  {
    type: "tf",
    questions: [
      {
        id: "tf1",
        statement: "A computer is an electronic machine that processes the data and gives the information.",
        answer: true,
      },
      {
        id: "tf2",
        statement: "A computer takes result as an input, processes the result and gives the output.",
        answer: false,
      },
      {
        id: "tf3",
        statement: "Today optical technology is used in hard disk drives.",
        answer: false,
      },
      {
        id: "tf4",
        statement: "Nowadays computer games are mostly available on external hard disks.",
        answer: false,
      },
    ],
  },

  {
    type: "tt",
    questions: [
      {
        id: "tt1",
        statement: "The repeated working capacity of a computer.",
        answer: "Diligence",
      },
      {
        id: "tt2",
        statement: "The feature of a computer that tells it can be used in every field.",
        answer: "Versatility",
      },
      {
        id: "tt3",
        statement: "An error or mistake obtained due to wrong input of data and instruction.",
        answer: "GIGO",
      },
      {
        id: "tt4",
        statement: "Raw facts or symbols collected from various sources.",
        answer: "Data",
      },
    ],
  },

  {
    type: "mcq",
    questions: [
      {
        id: "mcq1",
        statement: "Computer works on the basis of:",
        options: ["Input and Output", "Read and Write", "Input, Processing and Output", "None"],
        answer: "Input, Processing and Output",
      },
      {
        id: "mcq2",
        statement: "Which of the following is an application of computer?",
        options: ["Education", "Entertainment", "Banking", "All"],
        answer: "All",
      },
      {
        id: "mcq3",
        statement: "Which is known as accurate processing of computer?",
        options: ["GIGO", "Email", "MHz", "Bug"],
        answer: "GIGO",
      },
      {
        id: "mcq4",
        statement: "Which is the result of processed data?",
        options: ["Input", "Output", "Storage", "None of the above"],
        answer: "Output",
      },
    ],
  },
];
