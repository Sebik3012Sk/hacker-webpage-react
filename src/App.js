import Home from "./pages/Home";
import AboutHackers from "./pages/AboutHackers";
import HackersType from "./pages/HackersType";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import LederBoard from "./pages/LederBoard";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/aboutHackers" element={ <AboutHackers /> } />
          <Route path="/hackersType" element={ <HackersType /> } />
          <Route path="/lederboard-hackers" element={ <LederBoard /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;