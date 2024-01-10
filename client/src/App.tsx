import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ROUTE_ARR } from "./routes/Route";
import store from "./redux/store";
import "./index.css";
import { Footer } from "./components";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTE_ARR.map((el) => (
            <Route
              path={el.path}
              key={el.path}
              element={
                <div className={el.haveFooter ? "content-page" : ""}>
                  {el.element}
                  {el.haveFooter && <Footer />}
                </div>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
