import "./App.css";
import About from "./components/about/about.component";
import Experience from "./components/experience/experiece.component";
import Hero from "./components/hero/hero.component";
import Navbar from "./components/navbar/navbar.component";
import Skills from "./components/skills/skills.component";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Experience />
        </div>
    );
}

export default App;
