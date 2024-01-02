import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ROUTE_ARR } from "./routes/Route";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTE_ARR.map((el) => (
            <Route path={el.path} key={el.path} element={el.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
