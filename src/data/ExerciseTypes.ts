export type ExerciseType = FillGapExercise | MCQExercise | TechnicalTermsExercise | TrueFalseExercise | ClassroomExercise;

export const instructionMap: Record<ExerciseType["type"], string> = {
  fill: "Fill in the blanks.",
  mcq: "Choose the correct answer.",
  tt: "Write technical terms for the following.",
  tf: "State True or False.",
  classroom: "This is a classroom exercise.",
};

export type FillGapExercise = {
  type: "fill";

  questions: {
    parts: ({type: "text"; value: string} | {type: "gap"; id: string})[];

    answers: {value: string; id: string}[];
  }[];
};

export type MCQExercise = {
  type: "mcq";

  questions: {
    id: string;

    statement: string;

    options: string[];

    answer: string;
  }[];
};

export type TechnicalTermsExercise = {
  type: "tt";

  questions: {
    id: string;
    statement: string;
    answer: string;
  }[];
};

export type TrueFalseExercise = {
  type: "tf";

  questions: {
    id: string;

    statement: string;

    answer: boolean;
  }[];
};

export type ClassroomExercise = {
  type: "classroom";
};
