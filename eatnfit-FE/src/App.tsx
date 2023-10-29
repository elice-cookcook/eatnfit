import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  ExerciseRecordPage,
  AddExercisePage,
  SearchExercisePage,
} from "./pages";

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
