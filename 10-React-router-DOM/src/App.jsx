import { Route,Routes } from "React-router-dom";
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from './Components/Navbar';


function App() {
  return (
    <div>
        <Navbar />
        <h1>This is Single Page Application</h1>
           <div className="linkpage">
              <Routes>
                  <Route path='/home' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>    
    </div>
  )
}

export default App