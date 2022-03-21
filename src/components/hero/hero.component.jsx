import "./hero.component.scss";

export default function Hero() {
    return (
        <section className="bgimage" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                        <h2 className="hero_title">Hi, I'm Eric!</h2>
                        <p className="hero_desc">
                            I am a fullstack software developer.
                        </p>
                        <span>
                            <i className="fa fa-envelope"></i>
                            &nbsp;ejanerop97@gmail.com
                        </span>
                        <div className="social-icons-container">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/profile.php?id=100009854975845">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://twitter.com/eric_j_p_">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/eric-janero/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/ejanerop">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
