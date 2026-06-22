import ExerciseRenderer from "@/components/ExerciseRenderer";
import useGetExercises from "@/hooks/useGetExercises";

export default function Exercises() {
  const {exercises, error} = useGetExercises();

  if (error) {
    return <div className="p-6 text-center">{error}</div>;
  }

  return (
    <div className="list-decimal p-4 text-xl">
      {exercises.map((exercise, index) => (
        <div key={index} className="mb-20 border-b-4 pb-8">
          <ExerciseRenderer exercise={exercise} />
        </div>
      ))}
    </div>
  );
}
