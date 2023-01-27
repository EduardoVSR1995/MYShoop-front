import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SigsForm from "./pages/SigsForm";

import { UserProvider } from "./contexts/UserContext";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import User from "./pages/User";

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
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

