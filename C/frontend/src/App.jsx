import "./App.scss";
import Login from "./Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Successful from "./Successful";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/successful" element={<Successful />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
