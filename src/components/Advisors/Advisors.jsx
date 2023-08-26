import React from "react";
import mentorsData from "../../util/advisorsData.json";
import styles from "./Advisors.module.css";

function Mentors() {
    return (
        <div className={`container mt-5`}>
            <h2 className="text-gradient"></h2>
            <div className={`container mt-5 ${styles.wrapper}`}>
                <h2
                    className={`text-center ${styles.textGradient} ${styles.mentor__h2}`}
                >
                    Mentor and Advisor
                </h2>
                <hr className="mx-auto" style={{ width: "100px" }} />
                <div
                    className={`d-flex justify-content-center align-items-center ${styles.mentor__members}`}
                >
                    <div className={`team-mem ${styles.mentor__team_mem}`}>
                        <img
                            src="https://www.sciastra.com/teams/dr_omkar.jpg"
                            alt="mentor"
                            className={`img-fluid ${styles.mentor__img}`}
                        />
                        <h4 className={`text-center ${styles.mentor__sub}`}>
                            Dr. Omkar
                        </h4>
                        <p className={`text-center ${styles.mentor__sub}`}>
                            Principal Project Scientist at Indian Institute of
                            Technology, Madras
                        </p>
                    </div>
                </div>
            </div>

            <div className={`container mt-5 ${styles.wrapper}`}>
                <h2
                    className={`text-center ${styles.textGradient} ${styles.mentor__h2}`}
                >
                    Founder and Cofounder
                </h2>
                <hr className="mx-auto" style={{ width: "100px" }} />
                <div
                    className={`d-flex justify-content-center align-items-center ${styles.mentor__members}`}
                >
                    <div className={`team-mem ${styles.mentor__team_mem}`}>
                        <img
                            src="https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg"
                            alt="mentor"
                            className={`img-fluid ${styles.mentor__img}`}
                        />
                        <h4 className={`text-center ${styles.mentor__sub}`}>
                            Vivek Dwivedi
                        </h4>
                        <p className={`text-center ${styles.mentor__sub}`}>
                            Founder SciAstra, Mentor, Qualified NEST, JEE
                            advanced, Mains, Master's Student at NISER
                        </p>
                    </div>
                    <div className={`team-mem ${styles.mentor__team_mem}`}>
                        <img
                            src="https://www.sciastra.com/teams/akhil_tripathi_niser.jpg"
                            alt="mentor"
                            className={`img-fluid ${styles.mentor__img}`}
                        />
                        <h4 className={`text-center ${styles.mentor__sub}`}>
                            Akhil Tripathi
                        </h4>
                        <p className={`text-center ${styles.mentor__sub}`}>
                            Cofounder SciAstra, Mentor, Qualified NEST, Master's
                            Student at NISER
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mentors;
