import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Content from "./components/Content";
import Action from "./genre/Action";
import Horror from "./genre/Horror";
import Family from "./genre/Family";
import Scifi from "./genre/Scifi";
import Animation from "./genre/Animation";
import Login from "./components/Login";
import Register from "./components/Register";
import Cari from "./components/Cari";
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
          <Route path="genre/scifi/*" element={<Scifi />} />
          <Route path="genre/animation/*" element={<Animation />} />
          <Route path="cari/*" element={<Cari />} />
          <Route path="login/*" element={<Login />} />
          <Route path="register/*" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
