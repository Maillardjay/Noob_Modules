import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./pages/NavBar";
import HomePage from "./pages/HomePage";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/description/:id" element={<DescriptionPage />} />
          <Route path="/Basket" element={<BasketPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
