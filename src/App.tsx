import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import { DetailsCustomer } from "./components/detailsCustomer/detailsCustomer";

export function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/details/:id"
            element={<DetailsCustomer />}
            key="details"
          />
        </Routes>
      </Router>
    </div>
  );
}
