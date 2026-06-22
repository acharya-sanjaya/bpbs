import {useParams} from "react-router-dom";

export default function useIds() {
  const {courseId, lessonId} = useParams();
  return {courseId, lessonId};
}
