import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MembershipPage from "./pages/MembershipPage";
import ContactPage from "./pages/ContactPage";
import StartPage from "./pages/StartPage";
import JoinPage from "./pages/JoinPage";
import CoursesPage from "./pages/CoursesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join-us" element={<JoinPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
