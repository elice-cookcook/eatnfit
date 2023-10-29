import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";
import {
  ExerciseRecordPage,
  AddExercisePage,
  SearchExercisePage,
} from "./pages/ExerciseRecordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exerciserecord" element={<ExerciseRecordPage />} />
        <Route path="/exerciserecord/add" element={<AddExercisePage />} />
        <Route path="/exerciserecord/search" element={<SearchExercisePage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
