import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  SignUpPage,
  ExerciseRecordPage,
  AddExercisePage,
  SearchExercisePage,
  FoodRecordPage,
  AddFoodPage,
  SearchFoodPage,
  LoginPage,
  ExerciseDetailPage,
  MainPage,
} from "./pages";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/foodrecord" element={<FoodRecordPage />} />
          <Route path="/foodrecord/add" element={<AddFoodPage />} />
          <Route path="/foodrecord/search" element={<SearchFoodPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/exercise/:date/:idx" element={<ExerciseDetailPage />} />
          <Route path="/exerciserecord" element={<ExerciseRecordPage />} />
          <Route path="/exerciserecord/add" element={<AddExercisePage />} />
          <Route
            path="/exerciserecord/search"
            element={<SearchExercisePage />}
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
