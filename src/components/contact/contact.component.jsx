import React from "react";

import "./contact.component.scss";

const Contact = () => {
    return (
        <section id="contact-section">
            <h1 className="section-title mb-5">Contact</h1>

            <div className="row mx-4">
                <div
                    className="col-lg-6"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "2em",
                    }}>
                    <div
                        style={{
                            maxWidth: "100%",
                            listStyle: "none",
                            transition: "none",
                            overflow: "hidden",
                            width: "500px",
                            height: "500px",
                        }}>
                        <div
                            id="embeddedmap-canvas"
                            style={{
                                height: "100%",
                                width: "100%",
                                maxWidth: "100%",
                            }}>
                            <iframe
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    border: 0,
                                }}
                                title="map"
                                frameBorder="0"
                                src="https://www.google.com/maps/embed/v1/place?q=Santiago+de+las+Vegas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                        </div>
                        <a
                            className="googlecode"
                            href="https://www.embed-map.com"
                            id="get-data-forembedmap">
                            https://www.embed-map.com
                        </a>
                    </div>
                </div>

                <div className="col-lg-6">
                    <form name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            placeholder="Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control form-control-lg mt-3"
                            placeholder="Email"
                            required
                        />
                        <div className="mb-3 mt-3">
                            <textarea
                                className="form-control"
                                rows="5"
                                id="message"
                                name="message"
                                style={{resize: "none"}}
                                required
                                placeholder="Your message"></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-outline-dark mt-3">
                            Contact Me
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
