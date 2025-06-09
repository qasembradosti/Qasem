import { BrowserRouter } from "react-router-dom";
import { About,Language, Contact, Experience, Hero, Navbar, Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
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
