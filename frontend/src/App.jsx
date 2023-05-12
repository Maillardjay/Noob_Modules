import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";
import ContactForm from "./pages/ContactForm";
import Panier from "./pages/Panier";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Description" element={<DescriptionPage />} />
          <Route path="/BasketPage" element={<BasketPage />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/Panier" element={<Panier />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
