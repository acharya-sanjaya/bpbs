import {Link, useParams} from "react-router-dom";
import {lessonTitleMapper} from "@/data/TitleMapper";

export default function AvailableLessons() {
  const {courseId} = useParams();

  if (!courseId) {
    return <div className="p-6">Invalid course</div>;
  }

  const lessons = lessonTitleMapper[courseId as keyof typeof lessonTitleMapper];

  if (!lessons) {
    return <div className="p-6">Course not found</div>;
  }

  return (
    <div className="space-y-6 p-4">
      <div className="grid gap-4">
        {Object.entries(lessons).map(([key, title]) => (
          <Link key={key} to={`/mode/${courseId}/${key}`} className="rounded-xl border p-4 transition hover:scale-[1.02]">
            <div className="font-bold">{key.replace("l", "Lesson ").replace(" 0", " ")}</div>
            <div className="opacity-80">{title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
