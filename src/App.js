import { Route, Routes } from "react-router-dom";
import Navbar from "./comps/navbar";
import HomePage from "./pages/homepage";
import Footer from "./comps/footer";
import About from "./pages/about";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="" element={<HomePage />}></Route>
      </Routes>
      <About />

      <Footer />
    </div>
  );
};

export default App;
