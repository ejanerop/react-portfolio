import "./App.scss";
import About from "./components/about/about.component";
import Experience from "./components/experience/experiece.component";
import Hero from "./components/hero/hero.component";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/projects.component";
import Skills from "./components/skills/skills.component";

import Rick1 from "./assets/rick1.png";
import Rick2 from "./assets/rick2.png";
import Quotes1 from "./assets/quotes1.png";
import Quotes2 from "./assets/quotes2.png";
import Gitlab from "./assets/gitlab3.png";
import Gitlab2 from "./assets/gitlab4.png";
import Footer from "./components/footer/footer.component";

function App() {
    let projects = [
        {
            title: "RickAndMortyPedia",
            description:
                "App built in Angular that uses the Rick and Morty API to display the characters, episodes and locations from the show.",
            url: {
                preview: "https://rick-and-morty-pedia.netlify.app/",
                github: "https://github.com/ejanerop/rick-and-morty-app",
            },
            images: [Rick1, Rick2],
            startDate: "2022",
            technologies: [
                {
                    class: "fab fa-angular",
                    name: "Angular",
                },
                {
                    class: "fab fa-bootstrap",
                    name: "Bootstrap",
                },
                {
                    class: "fab fa-sass",
                    name: "Sass",
                },
            ],
        },
        {
            title: "Gitlab Manager",
            description:
                "App built with Angular and Laravel that uses the Gitlab API to display the projects inside a group that a user owns in Gitlab, and to remove members from them and from the group.",
            url: {
                backend: "https://github.com/ejanerop/gitlab-back",
                frontend: "https://github.com/ejanerop/gitlab-front",
            },
            images: [Gitlab, Gitlab2],
            startDate: "2021",
            technologies: [
                {
                    class: "fab fa-angular",
                    name: "Angular",
                },
                {
                    class: "fab fa-laravel",
                    name: "Laravel",
                },
            ],
        },
        {
            title: "Random Quote Machine",
            description:
                "Simple app built in React that shows a random quote from Friends TV Show, as a part of the Front End Development Libraries Certification in freeCodeCamp.",
            url: {
                preview: "https://random-friends-quote-machine.netlify.app/",
                github: "https://github.com/ejanerop/random-quote-machine",
            },
            images: [Quotes1, Quotes2],
            startDate: "2021",
            technologies: [
                {
                    class: "fab fa-angular",
                    name: "Angular",
                },
                {
                    class: "fab fa-react",
                    name: "React",
                },
            ],
        },
    ];
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
