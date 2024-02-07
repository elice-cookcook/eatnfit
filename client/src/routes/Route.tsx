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
  SettingPage,
  SignUpPage,
} from "../pages";

interface RouteItem {
  path: string;
  link: string;
  element: JSX.Element;
  haveFooter?: boolean;
}

interface Routes {
  [key: string]: RouteItem;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTE: Routes = {
  LANDING_PAGE: {
    path: "/",
    link: "/",
    element: <LandingPage />,
  },

  MAIN_PAGE: {
    path: "/main",
    link: "/main",
    haveFooter: true,
    element: <MainPage />,
  },

  LOGIN_PAGE: {
    path: "/login",
    link: "/login",
    element: <LoginPage />,
  },

  SIGNUP_PAGE: {
    path: "/signup",
    link: "/signup",
    element: <SignUpPage />,
  },

  FOOD_RECORD_PAGE: {
    path: "/foodrecord",
    link: "/foodrecord",
    haveFooter: true,
    element: <FoodRecordPage />,
  },

  FOOD_RECORD_ADD_PAGE: {
    path: "/foodrecord/add",
    link: "/foodrecord/add",
    haveFooter: true,
    element: <AddFoodPage />,
  },

  FOOD_RECORD_SEARCH_PAGE: {
    path: "/foodrecord/search",
    link: "/foodrecord/search",
    haveFooter: true,
    element: <SearchFoodPage />,
  },

  FOOD_DETAIL_PAGE: {
    path: "/food/:date/:idx",
    link: "/food",
    haveFooter: true,
    element: <FoodDetailPage />,
  },

  EXERCISE_RECORD_PAGE: {
    path: "/exerciserecord",
    link: "/exerciserecord",
    haveFooter: true,
    element: <ExerciseRecordPage />,
  },

  EXERCISE_DETAIL_PAGE: {
    path: "/exercise/:date/:idx",
    link: "/exercise",
    haveFooter: true,
    element: <ExerciseDetailPage />,
  },

  EXERCISE_ADD_PAGE: {
    path: "/exerciserecord/add",
    link: "/exerciserecord/add",
    haveFooter: true,
    element: <AddExercisePage />,
  },

  EXERCISE_SEARCH_PAGE: {
    path: "/exerciserecord/search",
    link: "/exerciserecord/search",
    haveFooter: true,
    element: <SearchExercisePage />,
  },

  SETTING_PAGE: {
    path: "/setting",
    link: "/setting",
    haveFooter: true,
    element: <SettingPage />,
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTE_ARR = Object.values(ROUTE);
