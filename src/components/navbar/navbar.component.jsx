import {useEffect, useState} from "react";
import "./navbar.component.scss";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <nav
            className={
                navbar
                    ? "navbar active navbar-expand-lg fixed-top navbarScroll"
                    : "navbar navbar-expand-lg fixed-top navbarScroll"
            }>
            <div className="container">
                <a className="navbar-brand" href="/">
                    Eric
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-section">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills-section">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience-section">
                                Experience
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
