import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<SigninPage />} exact />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
