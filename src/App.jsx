import { BrowserRouter } from "react-router-dom";
import { About, Language, Contact, Experience, Hero, Navbar, Projects, Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 overflow-x-hidden bg-black select-none">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          <Projects />
        </div>

        <div id="skills"  className="flex flex-col gap-6">
          <Tech />
        </div>
        
        <div className="flex flex-col gap-6">
          <Language />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
