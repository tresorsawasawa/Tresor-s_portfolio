import React from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './assets/css/main.css';
import 'aos/dist/aos.css';

AOS.init({
  delay: 100,
  duration: 800,
});
const App = () => (
  <>
    <main className="App">
      <Header />
      <Home />
      <Work />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
    {/* <Loading /> */}
  </>
);

export default App;
