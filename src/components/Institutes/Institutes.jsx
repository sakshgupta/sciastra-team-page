import React from "react";
import institutesData from "../../util/institutesData.json";
import styles from "./Institutes.module.css";

function Institutes() {
    return (
        <div className={`container mt-5 ${styles.institutesContainer}`}>
            <h2 className={`text-center text-gradient ${styles.heading}`}>
                Learn from scientists and research scholars
                <br /> from the top institutes around the world
            </h2>
            <div className={`row mt-4 ${styles.institutesRow}`}>
                {institutesData.map((institute) => (
                    <div
                        className={`col-md-4 mb-4 ${styles.instituteCard}`}
                        key={institute.id}
                    >
                        <div
                            className={`card ${styles.customCard}`}
                            style={{
                                backgroundImage: `url(${institute.backgroundImage})`,
                            }}
                        >
                            <div className={`cardBackground`} />
                            <div className={`card-body ${styles.cardBody}`}>
                                <h4
                                    className={`card-title ${styles.cardTitle}`}
                                >
                                    {institute.name}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Institutes;
