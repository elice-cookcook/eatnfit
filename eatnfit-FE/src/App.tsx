import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  FoodRecordPage,
  AddFoodPage,
  SearchFoodPage,
  MainFoodPage,
  MainExercisePage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/foodrecord" element={<FoodRecordPage />} />
        <Route path="/foodrecord/add" element={<AddFoodPage />} />
        <Route path="/foodrecord/search" element={<SearchFoodPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainFoodPage />} />
        <Route path="/main/exercise" element={<MainExercisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
