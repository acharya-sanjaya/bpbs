import {exerciseMapper} from "@data/ExerciseMapper";
import useIds from "@hooks/useIds";

export default function useGetExercises() {
  const {courseId, lessonId} = useIds();

  if (!courseId) {
    return {exercises: [], error: "Invalid course"};
  }

  const lessons = exerciseMapper[courseId as keyof typeof exerciseMapper];

  if (!lessons) {
    return {exercises: [], error: "Course not found"};
  }

  const exercises = lessons[lessonId as keyof typeof lessons];

  if (!exercises) {
    return {exercises: [], error: "Lesson not found"};
  }

  return {exercises, error: ""};
}
