import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import MouseGlow from "./components/MouseGlow";
import SocialLinks from "./components/SocialLinks"; // Floating Contact Buttons

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>

        {/* Mouse Glow Effect */}
        <MouseGlow />

        {/* Floating Contact Buttons */}
        <SocialLinks />

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
