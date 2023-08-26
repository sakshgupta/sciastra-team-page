import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer__main}>
            <div className={styles.Footer}>
                <div className="container">
                    <div className="row">
                        <div
                            className={`col-md-6 col-lg-5 col-12 ${styles["ft-1"]}`}
                        >
                            <a className="navbar-brand" href="/">
                                <img
                                    src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
                                    alt="logo"
                                    className={`${styles.footer__logo}`}
                                />
                            </a>
                            <h3>
                                <span>Sci</span>Astra
                            </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Laborum ea quo ex ullam
                                laboriosam magni totam, facere eos iure
                                voluptate.
                            </p>
                            <div className={styles["footer-icons"]}>
                                <a
                                    href="https://sciastra.com/follow_external.php?req=ygIy1k6vyP"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a
                                    href="https://sciastra.com/follow_external.php?req=MrrBHi4frT"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    href="https://sciastra.com/follow_external.php?req=FMlxbuQS5w"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://sciastra.com/follow_external.php?req=x1Luinj8TR"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-discord"></i>
                                </a>
                                <a
                                    href="https://sciastra.com/follow_external.php?req=xZrGX4XxE8"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                        <div
                            className={`col-md-6 col-lg-3 col-12 ${styles["ft-2"]}`}
                        >
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Our Courses
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Free Materials
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Our Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`col-md-6 col-lg-4 col-12 ${styles["ft-3"]}`}
                        >
                            <h5>Contact</h5>
                            <p>
                                <i className="fa-solid fa-envelope"></i>{" "}
                                <a
                                    href="mailto:support@sciastra.com"
                                    target="_blank"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    support@sciastra.com
                                </a>
                            </p>
                            <p>
                                <i className="fa-solid fa-paper-plane"></i>{" "}
                                Bhubaneswar, Odisha
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["Last-footer"]}>
                <p>© Copyright 2023, SciAstra. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
