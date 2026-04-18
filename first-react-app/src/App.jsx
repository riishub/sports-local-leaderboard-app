import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cricket from "./SportsList/Cricket";
import AddScore from "./components/CricketLeaderboard/UploadStats"
import Leaderboard from "./components/CricketLeaderboard/Leaderboard"
import UploadStats from "./components/CricketLeaderboard/UploadStats"
import BowlingLeaderboard from "./components/CricketLeaderboard/BowlingLeaderboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/cricket" element={<Cricket />} />
          <Route path="/cricleaderboard" element={<Leaderboard/>}></Route>
          <Route path="/uploadstats" element={<UploadStats/>}></Route>
          <Route path="/bowlingleaderboard" element={<BowlingLeaderboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
