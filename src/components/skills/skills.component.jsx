import "./skills.component.scss";

export default function Skills() {
    return (
        <section id="skills-section">
            <h1 className="display-5 lh-1 mb-3">My top skills</h1>
            <div className="skills-container">
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-html5"></i>
                    <h3 className="skill-name">HTML</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-css3-alt"></i>
                    <h3 className="skill-name">CSS</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-js"></i>
                    <h3 className="skill-name">Javascript</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-php"></i>
                    <h3 className="skill-name">PHP</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-laravel"></i>
                    <h3 className="skill-name">Laravel</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-angular"></i>
                    <h3 className="skill-name">Angular</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-java"></i>
                    <h3 className="skill-name">Java</h3>
                </div>
                <div className="col-12 col-md-3 skill">
                    <i className="fab fa-git-alt"></i>
                    <h3 className="skill-name">Git</h3>
                </div>
            </div>
        </section>
    );
}
