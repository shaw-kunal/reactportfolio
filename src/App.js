import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/works/Work";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
   
      <Topbar  open={menuOpen} setOpen={setMenuOpen} />
      <Menu  open={menuOpen} setOpen={setMenuOpen}/>
      <div className="section">

        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />


      </div>
    </div>
  );
}

export default App;
