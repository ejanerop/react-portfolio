import "./skills.component.scss";

export default function Skills() {
    return (
        <section id="skills-section">
            <h1 class="display-5 lh-1 mb-3">My top skills</h1>
            <div class="skills-container">
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-html5"></i>
                    <h3 class="skill-name">HTML</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-css3-alt"></i>
                    <h3 class="skill-name">CSS</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-js"></i>
                    <h3 class="skill-name">Javascript</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-php"></i>
                    <h3 class="skill-name">PHP</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-laravel"></i>
                    <h3 class="skill-name">Laravel</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-angular"></i>
                    <h3 class="skill-name">Angular</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-java"></i>
                    <h3 class="skill-name">Java</h3>
                </div>
                <div class="col-12 col-md-3 skill">
                    <i class="fab fa-git-alt"></i>
                    <h3 class="skill-name">Git</h3>
                </div>
            </div>
        </section>
    );
}
