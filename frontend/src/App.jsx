import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Description" element={<DescriptionPage />} />
          <Route path="/BasketPage" element={<BasketPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
