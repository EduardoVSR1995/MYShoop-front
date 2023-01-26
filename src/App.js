import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SigsForm from "./pages/SigsForm";

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
            <Route path="/sign-in" element={<SigsForm signin={true} />} />
            <Route path="/sign-up" element={<SigsForm />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

