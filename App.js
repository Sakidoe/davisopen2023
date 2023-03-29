import "./App.css";
import MainPage from "./MainPage";
import courtLayout from "./courtLayout.png";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path={"/"} element={<MainPage></MainPage>}></Route>
        <Route
          path={"/courts"}
          element={
            <div>
              <center>
                <img src={courtLayout} alt="" width={550} height={1000}></img>
              </center>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
