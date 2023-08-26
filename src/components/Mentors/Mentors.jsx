import React from "react";
import mentorsData from "../../util/mentorsData.json";
import styles from "./Mentors.module.css";

function Mentors() {
    const disciplines = ["Biology", "Physics", "Mathematics", "Chemistry"];

    // Sort mentors based on their disciplines
    const sortedMentors = {};
    disciplines.forEach((discipline) => {
        sortedMentors[discipline] = mentorsData.filter(
            (mentor) => mentor.discipline === discipline
        );
    });

    return (
        <div className={`container mt-5`}>
            <h2 className="text-gradient text-center">
                Meet your Mentors
            </h2>
            <div className={`${styles.wrapper}`}>
                {disciplines.map((discipline) => (
                    <div key={discipline}>
                        <h3
                            className={`text-center ${styles.mentor__subheading}`}
                        >
                            {discipline}
                        </h3>
                        <div
                            className={`d-flex justify-content-center ${styles.mentor__members_fullwidth}`}
                        >
                            {sortedMentors[discipline].map((mentor) => (
                                <div
                                    className={`team-mem ${styles.mentor__team_mem}`}
                                    key={mentor.id}
                                >
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name}
                                        className={`img-fluid ${styles.mentor__img}`}
                                    />
                                    <h4 className={`${styles.mentor__sub}`}>
                                        {mentor.name}
                                    </h4>
                                    <p className={`${styles.mentor__sub}`}>
                                        {mentor.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Mentors;

// Styles...
