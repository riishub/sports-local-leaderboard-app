import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddScore from "./components/AddScore";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leaderboard/>}/>
        <Route path="/add" element={<AddScore/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
