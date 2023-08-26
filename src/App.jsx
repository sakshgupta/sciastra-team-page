import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Advisors from "./components/Advisors/Advisors";
import Institutes from "./components/Institutes/Institutes";
import Mentors from "./components/Mentors/Mentors";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Institutes />
            <Mentors />
            <Advisors />
            <Footer/>
        </div>
    );
}

export default App;
