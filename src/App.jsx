import { BrowserRouter } from "react-router-dom";
import { About, Education, Language, Contact, Experience, Hero, Navbar, Projects, Tech, WhatsAppButton } from "./components";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative z-0 overflow-x-hidden bg-black select-none">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
          <Education />
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
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;
