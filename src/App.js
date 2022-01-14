import './App.scss';
import 'animate.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useState, useEffect } from 'react';

import Navigation from './components/navigation';
import Hero from './components/hero';
import Roadmap from './components/roadmap';
import Collections from './components/collections';
import Merch from './components/merch';
import Team from './components/team';
import Footer from './components/footer';
import NavigationMobile from './components/navigationMobile';

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navigation setOpen={setOpen} open={open}/> 
      <Hero /> 
      <Roadmap />
      <Collections />
      <Merch />
      <Team />
      <Footer />
      <NavigationMobile setOpen={setOpen} open={open} />
    </div>
  );
}

export default App;