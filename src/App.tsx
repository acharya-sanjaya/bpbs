import "./App.css";
import Navbar from "@components/Navbar";
import Notes from "@pages/Notes";

import {Routes, Route, Navigate} from "react-router-dom";
import SelectCourse from "@pages/SelectCourse";
import SelectLessons from "@pages/SelectLessons";
import LearningMode from "@pages/LearningMode";
import Exercises from "@pages/Exercises";
import FullForms from "@components/FullForms";
import PageNotFound from "@pages/PageNotFound";

//
import Icons from "./pages/temp/TEMP";

const App = () => {
  return (
    <div className="font-mono select-none">
      <Navbar />
      <Routes>
        <Route path="/" element={<SelectCourse />} />
        <Route path="course" element={<Navigate to="/" replace />} />
        <Route path="/course/:courseId" element={<SelectLessons />} />
        <Route path="/notes/:courseId/:lessonId" element={<Notes />} />
        <Route path="/mode/:courseId/:lessonId" element={<LearningMode />} />
        <Route path="/exercises/:courseId/:lessonId" element={<Exercises />} />
        <Route path="fullforms" element={<FullForms />} />
        <Route path="explore" element={<Icons />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
