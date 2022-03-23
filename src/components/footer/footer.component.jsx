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
            <div class="footer-content">
                <div class="container">
                    <div class="down-below">
                        <div class="contact">
                            <a
                                href="mailto:ejanerop97@gmail.com"
                                title="Send me an email"
                                rel="me noreferrer"
                                target="_blank">
                                ejanerop97@gmail.com
                            </a>
                        </div>

                        <ul class="links">
                            <li>
                                <a
                                    href="https://github.com/ejanerop97"
                                    title="@ejanerop97 on GitHub"
                                    rel="me noreferrer"
                                    target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/@eric_j_p_"
                                    title="@eric_j_p_ on twitter"
                                    rel="me noreferrer"
                                    target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/ejanero/"
                                    rel="me noreferrer"
                                    title="Eric Janero on Instagram"
                                    target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100009854975845"
                                    rel="me noreferrer"
                                    title="Eric Janero on Facebook"
                                    target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/eric-janero"
                                    rel="me noreferrer"
                                    title="Eric Janero on LinkedIn"
                                    target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>

                        <button
                            type="button"
                            class="to-top"
                            onClick={scrollToTop}>
                            <i class="fa fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
