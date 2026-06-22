import {instructionMap, type ClassroomExercise} from "@data/ExerciseTypes";

type Props = {
  data: ClassroomExercise;
};

export default function Classroom({data}: Props) {
  return (
    <div>
      <h1 className="mb-4 font-bold">{instructionMap[data.type]}</h1>
      <p className="text-sm">This is a classroom exercise. Consult with your teacher for more information.</p>
    </div>
  );
}
