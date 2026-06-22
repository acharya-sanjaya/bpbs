import {useLocation, matchPath} from "react-router-dom";
import {courseTitleMapper, lessonTitleMapper} from "@/data/TitleMapper";

export default function usePageTitle() {
  const {pathname} = useLocation();

  // / or course
  if (pathname === "/" || pathname === "/course") {
    return "Select Course";
  }

  // /fullforms
  if (pathname === "/fullforms") {
    return "Full Forms";
  }

  // /course/:courseId
  const courseMatch = matchPath({path: "/course/:courseId"}, pathname);

  if (courseMatch) {
    const courseId = courseMatch.params.courseId!;

    return courseTitleMapper[courseId] ?? "Course Not Found";
  }

  // /notes/:courseId/:lessonId
  // /exercises/:courseId/:lessonId
  // /mode/:courseId/:lessonId
  const lessonMatch = matchPath({path: "/notes/:courseId/:lessonId"}, pathname);
  const exerciseMatch = matchPath({path: "/mode/:courseId/:lessonId"}, pathname);
  const modeMatch = matchPath({path: "/exercises/:courseId/:lessonId"}, pathname);

  const matchedPath = lessonMatch || exerciseMatch || modeMatch;
  if (matchedPath) {
    const {courseId, lessonId} = matchedPath.params;

    return lessonTitleMapper[courseId!]?.[lessonId!] ?? "Lesson Not Found";
  }

  return "Page Not Found";
}
