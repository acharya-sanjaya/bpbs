import type {ExerciseType} from "@data/ExerciseTypes";
import FillInTheGaps from "@components/FillInTheGaps";
import TechnicalTerms from "@components/TechnicalTerms";
import MCQ from "@components/MCQ";
import TrueFalse from "@components/TrueFalse";
import Classroom from "@components/ClassroomExercise";

type Props = {
  exercise: ExerciseType;
};

export default function ExerciseRenderer({exercise}: Props) {
  switch (exercise.type) {
    case "fill":
      return <FillInTheGaps data={exercise} />;

    case "mcq":
      return <MCQ data={exercise} />;

    case "tt":
      return <TechnicalTerms data={exercise} />;

    case "tf":
      return <TrueFalse data={exercise} />;

    case "classroom":
      return <Classroom data={exercise} />;
    default:
      return <>Unknown Exercise Type</>;
  }
}
