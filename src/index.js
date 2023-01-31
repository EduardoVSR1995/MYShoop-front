import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/styles/reset.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./services/api";

const container = document.querySelector(".root");

const root = ReactDOM.createRoot(container);

async function All() {
  const name = await store();
  root.render(<App name={name} />);
};

All();
