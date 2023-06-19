import './App.css';
import SideBar from './layouts/SideBar';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Services from './components/Services';
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <SideBar />
    <main id="main">
    <Hero />
    <About />
    <Skills />
    <Resume />
    {/* <Portfolio /> */}
    <Services />

    {/* Contact not functional */}
    {/* <Contact /> */}


    </main>
    
    </>
    
  );
}

export default App;
