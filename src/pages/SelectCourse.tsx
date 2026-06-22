import {availableCourses, courseTitleMapper} from "@/data/TitleMapper";
import {Link} from "react-router-dom";

const SelectCourse = () => {
  return (
    <div className="mx-auto p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {availableCourses.map((course) => (
          <CourseTile key={course} course={course} />
        ))}
      </div>
    </div>
  );
};

export default SelectCourse;

const CourseTile = ({course}: {course: string}) => {
  const pageLink = course === "fullforms" ? course : `/course/${course}`;
  return (
    <Link key={course} to={pageLink} className="rounded-2xl border p-6 transition hover:scale-[1.02] hover:shadow-lg">
      <h2 className="text-2xl font-bold">{courseTitleMapper[course]}</h2>

      {course === "fullforms" ? (
        <p className="mt-2 text-sm opacity-60">Click to read full forms</p>
      ) : (
        <p className="mt-2 text-sm opacity-60">Click to view lessons</p>
      )}
    </Link>
  );
};
