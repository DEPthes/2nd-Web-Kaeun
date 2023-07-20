import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
