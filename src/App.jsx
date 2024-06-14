import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IpadProPage from "./ipadpro/IpadProPage.jsx";

function App() {
  return (
    <main className="main-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/ipadpro" element={<IpadProPage />}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
