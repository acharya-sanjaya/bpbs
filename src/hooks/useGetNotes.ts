import {noteMapper} from "@data/NoteMapper";
import useIds from "@hooks/useIds";

export default function useGetNotes() {
  const {courseId, lessonId} = useIds();

  if (!courseId) {
    return {notes: [], error: "Invalid course"};
  }

  const lessons = noteMapper[courseId as keyof typeof noteMapper];

  if (!lessons) {
    return {notes: [], error: "Course not found"};
  }

  const notes = lessons[lessonId as keyof typeof lessons];

  if (!notes) {
    return {notes: [], error: "Lesson not found"};
  }
  return {notes, error: ""};
}
