import "./App.css";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //authenticate가 true이면 로그인 //authenticate가 false이면 로그아웃
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </>
  );
}

export default App;
