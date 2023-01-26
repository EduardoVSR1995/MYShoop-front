import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignIn from "./pages/SignIn";

import { UserProvider } from "./contexts/UserContext";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

