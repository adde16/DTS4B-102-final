import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Content from "./components/Content";
import Action from "./genre/Action";
import Horror from "./genre/Horror";
import Family from "./genre/Family";
import "./style/style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="genre/action/*" element={<Action />} />
          <Route path="genre/horror/*" element={<Horror />} />
          <Route path="genre/family/*" element={<Family />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
