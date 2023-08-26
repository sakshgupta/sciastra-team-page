import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
                        alt="logo"
                        className={`${styles.navbar__logo}`}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Selections
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Blogs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Materials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Team
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${styles.navLink}`}
                                href="/"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <form class="form-inline my-4 my-lg-0">
                        <button
                            class={`btn btn-outline-success my-2 my-sm-0 ${styles.navbar__btn}`}
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
