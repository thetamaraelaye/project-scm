import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import "./App.css";
import Signup from "./pages/auth/signup";
import DashboardPage from "./pages/admin/dashboard";
import Sidebar from "./component/SideBar/Sidebar";
import SetUpAccount from "./pages/auth/setUpAccount";
// import AdminRoute from './component/PrivateRoutes/AdminRoutes';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/setup-supplier-account" element={<SetUpAccount />} />

          {/* <Route path="/" element={<DashboardPage/>} /> */}
          <Route
            path="admin/dashboard"
            element={<Sidebar title="Dashboard" children={<DashboardPage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
