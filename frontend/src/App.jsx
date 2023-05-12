import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";
import Footer from "./pages/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Description" element={<DescriptionPage />} />
         <Route path="/BasketPage" element={<BasketPage />} />
       </Routes>
       <NavBar />
      </Router>
    </div>
  );
}

export default App;
