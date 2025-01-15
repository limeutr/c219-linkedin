import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SchoolsList from "./SchoolsList"; 
import SchoolDetail from "./SchoolDetail"; 
import Header from "./Header";
import InterestRegistration from "./InterestRegistration"; 
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/school/:schoolId" element={<SchoolDetail />} /> 
        <Route path="schools" element={<SchoolsList />} /> 
        <Route path="register" element={<InterestRegistration />} /> 
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>

      <footer className="container">
        &copy;2025 | <a href="https://www.rp.edu.sg/feature/welcome-to-rp">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
