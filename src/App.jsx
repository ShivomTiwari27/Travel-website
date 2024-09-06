import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Service from "./routes/Service.jsx";
import Contact from "./routes/Contact.jsx";
import SignUp from "./Component/SignUp/SignUp.jsx";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element ={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
