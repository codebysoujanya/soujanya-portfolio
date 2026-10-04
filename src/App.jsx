import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>© 2026 Soujanya G. All rights reserved.</p>

          <p>
            Built with <span>React</span> & passion for technology.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;