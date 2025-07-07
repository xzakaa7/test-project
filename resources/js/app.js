import "./bootstrap";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner1";
import Privacy from "./components/privacy"; // Pastikan penamaan file dan import sesuai

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
        </Router>
    );
}

export default App;
