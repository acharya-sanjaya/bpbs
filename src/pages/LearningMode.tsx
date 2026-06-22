import useIds from "@/hooks/useIds";
import {Link} from "react-router-dom";

const LearningMode = () => {
  const {courseId, lessonId} = useIds();

  const modes = [
    {title: "Read Notes", link: `/notes/${courseId}/${lessonId}`},
    {title: "Examine Yourself", link: `/exercises/${courseId}/${lessonId}`},
  ];

  return (
    <div className="m-auto flex h-[calc(100svh-4rem)] max-w-96 flex-col justify-center gap-20 p-10">
      {modes.map((mode) => (
        <Link
          key={mode.title}
          to={mode.link}
          className="flex items-center justify-center rounded-2xl border-2 py-10 transition hover:scale-[1.02] hover:shadow-lg"
        >
          <p className="mt-2 text-xl">{mode.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default LearningMode;
