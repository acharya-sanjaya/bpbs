import type {ExerciseType} from "@data/ExerciseTypes";

export const l02: ExerciseType[] = [
  {
    type: "fill",
    questions: [
      {
        parts: [
          {type: "gap", id: "g1"},
          {type: "text", value: " was developed by the Chinese and Egyptian around 3000 BC."},
        ],
        answers: [{id: "g1", value: "Abacus"}],
      },
      {
        parts: [
          {type: "text", value: "Blaise Pascal, a French mathematician invented the first mechanical calculating device called "},
          {type: "gap", id: "g2"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g2", value: "Pascaline"}],
      },
      {
        parts: [
          {type: "text", value: "Gottfried Wilhelm Von Leibniz invented digital mechanical calculator called "},
          {type: "gap", id: "g3"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g3", value: "Stepped Reckoner"}],
      },
      {
        parts: [
          {type: "text", value: "Joseph Marie Jacquard invented an automatic weaving machine called "},
          {type: "gap", id: "g4"},
          {type: "text", value: "."},
        ],
        answers: [{id: "g4", value: "Jacquard's Loom"}],
      },
      {
        parts: [
          {type: "gap", id: "g5"},
          {type: "text", value: " is also known as the father of modern computer science."},
        ],
        answers: [{id: "g5", value: "Charles Babbage"}],
      },
      {
        parts: [
          {type: "gap", id: "g6"},
          {type: "text", value: " was the first computer programmer who developed the first computer program for Analytical Engine."},
        ],
        answers: [{id: "g6", value: "Ada Lovelace"}],
      },
      {
        parts: [
          {type: "text", value: "Dr. Herman Hollerith developed "},
          {type: "gap", id: "g7"},
          {type: "text", value: " in 1887 to process census data."},
        ],
        answers: [{id: "g7", value: "Tabulating Machine"}],
      },
      {
        parts: [
          {type: "text", value: "Government of Nepal brought "},
          {type: "gap", id: "g8"},
          {type: "text", value: " to process census data of 2028 B.S."},
        ],
        answers: [{id: "g8", value: "IBM 1401"}],
      },
    ],
  },

  {
    type: "tt",
    questions: [
      {
        id: "tt1",
        statement: "The first manual calculating device developed by Chinese people.",
        answer: "Abacus",
      },
      {
        id: "tt2",
        statement: "First computer brought in Nepal for the census of 2028 B.S.",
        answer: "IBM 1401",
      },
      {
        id: "tt3",
        statement: "The first computer programmer in the computing field.",
        answer: "Ada Lovelace",
      },
    ],
  },
];
