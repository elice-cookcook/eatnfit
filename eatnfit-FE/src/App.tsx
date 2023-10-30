import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  FoodRecordPage,
  AddFoodPage,
  SearchFoodPage,
  MainPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/foodrecord" element={<FoodRecordPage />} />
        <Route path="/foodrecord/add" element={<AddFoodPage />} />
        <Route path="/foodrecord/search" element={<SearchFoodPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
