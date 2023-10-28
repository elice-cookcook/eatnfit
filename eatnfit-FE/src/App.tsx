import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";
import {
  FoodRecordPage,
  AddFoodPage,
  SearchFoodPage,
} from "./pages/FoodRecordPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/foodrecord" element={<FoodRecordPage />} />
        <Route path="/foodrecord/add" element={<AddFoodPage />} />
        <Route path="/foodrecord/search" element={<SearchFoodPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
