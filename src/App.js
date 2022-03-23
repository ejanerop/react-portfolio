import "./App.scss";
import About from "./components/about/about.component";
import Experience from "./components/experience/experiece.component";
import Hero from "./components/hero/hero.component";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/projects.component";
import Skills from "./components/skills/skills.component";
import Footer from "./components/footer/footer.component";
import projects from "./projects";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Hero />

            <About />

            <Skills />

            <Experience />

            <Projects projects={projects} />

            <Footer />
        </div>
    );
}

export default App;
