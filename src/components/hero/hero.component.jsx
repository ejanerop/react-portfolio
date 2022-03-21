import "./hero.component.scss";

export default function Hero() {
    return (
        <section class="bgimage" id="home">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                        <h2 class="hero_title">Hi, I'm Eric!</h2>
                        <p class="hero_desc">
                            I am a fullstack software developer.
                        </p>
                        <span>
                            <i class="fa fa-envelope"></i>
                            &nbsp;ejanerop97@gmail.com
                        </span>
                        <div class="social-icons-container">
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
