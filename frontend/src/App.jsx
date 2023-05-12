import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Description" element={<DescriptionPage />} />
          <Route path="/BasketPage" element={<BasketPage />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
