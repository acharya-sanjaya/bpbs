import {cmp06} from "@cmp06/lessonTitles";
import {hpca06} from "@hpca06/lessonTitles";
import {cmp07} from "@cmp07/lessonTitles";
import {cmp08} from "@cmp08/lessonTitles";

type MapperType = Record<string, string>;
export const availableCourses = ["cmp06", "hpca06", "cmp07", "cmp08", "fullforms"];

export const courseTitleMapper: MapperType = {
  fullforms: "Full Forms (Computer)",
  cmp06: "Computer Class 6",
  hpca06: "HPCA Class 6",
  cmp07: "Computer Class 7",
  cmp08: "Computer Class 8",
};

export const lessonTitleMapper: Record<string, Record<string, string>> = {
  cmp06,
  hpca06,
  cmp07,
  cmp08,
};

export function getCourseTitle(course: string): string {
  const title = courseTitleMapper[course];

  if (!title) {
    throw new Error("Course not found");
  }

  return title;
}

export function getLessonTitle(course: string, lesson: string): string {
  const courseLessons = lessonTitleMapper[course];

  if (!courseLessons) {
    throw new Error("Course not found");
  }

  const title = courseLessons[lesson];

  if (!title) {
    throw new Error("Lesson not found");
  }

  return title;
}
