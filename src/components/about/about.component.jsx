import "./about.component.scss";
import Picture from "./../../eric.jpg";
import CV from "./../../assets/eric_resume_en.pdf";

export default function About() {
    return (
        <section id="about-section">
            <div className="px-4 py-5">
                <div className="row g-5 py-5 about-container">
                    <div className="col-8 col-sm-8 col-md-6 col-lg-3 col-xl-3 image-container">
                        <img
                            src={Picture}
                            className="d-block mx-lg-auto img-fluid portfolio-img"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6 about-info">
                        <h2 className="display-5 lh-1 mb-3">About me</h2>
                        <p className="lead">
                            I'm a software engineer graduated from the
                            Technological University of Havana (CUJAE) in
                            December 2020. Excellent communication and teamwork
                            skills, as well as good decision-making and
                            problem-solving skills, high level of responsibility
                            and ease and interest to learn and improve. My
                            career goal is to be the best developer I can while
                            creating software that helps and impacts many
                            people.
                        </p>
                        <a
                            href={CV}
                            target="_blank"
                            className="btn btn-outline-dark cv-btn"
                            rel="noreferrer">
                            Download CV <i className="fas fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
