// import logo from './logo.svg';
// import './App.css';
import SideBar from "./component/layouts/Sidebar";
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Resume from './component/Resume';
// import Portfolio from './component/Portfolio';
import Services from './component/Services';

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


    </main>
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
