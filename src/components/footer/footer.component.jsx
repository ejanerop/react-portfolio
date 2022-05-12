import SocialIcon from "../social-icon/social-icon.component";
import "./footer.component.scss";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer id="site-footer">
            <div className="footer-content">
                <div className="container">
                    <div className="down-below">
                        <div className="contact">
                            <a
                                href="mailto:ejanerop97@gmail.com"
                                title="Send me an email"
                                rel="me noreferrer"
                                target="_blank">
                                ejanerop97@gmail.com
                            </a>
                        </div>

                        <ul className="links">
                            <li>
                                <SocialIcon
                                    url="https://github.com/ejanerop"
                                    title="@ejanerop on GitHub"
                                    icon="fa-github"
                                />
                            </li>
                            <li>
                                <SocialIcon
                                    url="https://twitter.com/@eric_janero"
                                    title="@eric_janero on twitter"
                                    icon="fa-twitter"
                                />
                            </li>
                            <li>
                                <SocialIcon
                                    url="https://www.instagram.com/ejanero/"
                                    title="Eric Janero on Instagram"
                                    icon="fa-instagram"
                                />
                            </li>
                            <li>
                                <SocialIcon
                                    url="https://www.facebook.com/profile.php?id=100009854975845"
                                    title="Eric Janero on Facebook"
                                    icon="fa-facebook-f"
                                />
                            </li>
                            <li>
                                <SocialIcon
                                    url="https://www.linkedin.com/in/eric-janero"
                                    title="Eric Janero on LinkedIn"
                                    icon="fa-linkedin-in"
                                />
                            </li>
                        </ul>

                        <button
                            type="button"
                            className="to-top"
                            onClick={scrollToTop}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
