import {
  AddExercisePage,
  AddFoodPage,
  ExerciseDetailPage,
  ExerciseRecordPage,
  FoodDetailPage,
  FoodRecordPage,
  LandingPage,
  LoginPage,
  MainPage,
  SearchExercisePage,
  SearchFoodPage,
  SignUpPage,
} from "../pages";

export const ROUTE = {
  LANDING_PAGE: {
    path: "/",
    link: "/",
    element: <LandingPage />,
  },

  MAIN_PAGE: {
    path: "/main",
    link: "/main",
    element: <MainPage />,
  },

  LOGIN_PAGE: {
    path: "/login",
    link: "/login",
    element: <LoginPage />,
  },

  SIGNUP_PAGE: {
    path: "/signUp",
    link: "/signUp",
    element: <SignUpPage />,
  },

  FOOD_RECORD_PAGE: {
    path: "/foodrecord",
    link: "/foodrecord",
    element: <FoodRecordPage />,
  },

  FOOD_RECORD_ADD_PAGE: {
    path: "/foodrecord/add",
    link: "/foodrecord/add",
    element: <AddFoodPage />,
  },

  FOOD_RECORD_SEARCH_PAGE: {
    path: "/foodrecord/search",
    link: "/foodrecord/search",
    element: <SearchFoodPage />,
  },

  FOOD_DETAIL_PAGE: {
    path: "/food/:date/:idx",
    link: "/food",
    element: <FoodDetailPage />,
  },

  EXERCISE_RECORD_PAGE: {
    path: "/exerciserecord",
    link: "/exerciserecord",
    element: <ExerciseRecordPage />,
  },

  EXERCISE_DETAIL_PAGE: {
    path: "/exercise/:date/:idx",
    link: "/exercise",
    element: <ExerciseDetailPage />,
  },

  EXERCISE_ADD_PAGE: {
    path: "/exerciserecord/add",
    link: "/exerciserecord/add",
    element: <AddExercisePage />,
  },

  EXERCISE_SEARCH_PAGE: {
    path: "/exerciserecord/search",
    link: "/exerciserecord/search",
    element: <SearchExercisePage />,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
