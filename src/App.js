import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LanDingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Auth 사용 */}
          {/* <Route path="/" element={Auth(LanDingPage, null)} /> */}
          <Route path="/" element={<LanDingPage />} />
          {/* <Route path="/login" element={Auth(LoginPage,false)} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/register" element={Auth(RegisterPage, false)} /> */}
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
