import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cricket from "./SportsList/Cricket";
import AddScore from "./components/CricketLeaderboard/UploadStats"
import Leaderboard from "./components/CricketLeaderboard/Leaderboard"
import UploadStats from "./components/CricketLeaderboard/UploadStats"
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MyScores from "./components/MyScores"
import EditScore from "./components/CricketLeaderboard/EditScore"
import AIAnalysis from "./components/AIAnalysis"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/leaderboard/:role" element={<Leaderboard/>}></Route>
        <Route path="/uploadstats" element={<UploadStats/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/myscores" element={<MyScores/>}></Route>
        <Route path="/edit/:id" element={<EditScore/>}></Route>
        <Route path="/ai" element={<AIAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
