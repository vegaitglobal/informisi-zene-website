import React, { useState, useEffect } from "react";
import styles from "./TeamMemberContainer.module.scss";
import TeamMember from "../TeamMember/TeamMember";

export default  function TeamMemberContainer() {
    const [team, setTeam] = useState({});

    const mockData = {
        title: "Naš tim",
        data: [
            {
                imageLink: "https://placehold.co/260x315/webp",
                name: "Jelena Ružić",
            },
            {
                imageLink: "https://placehold.co/260x315/webp",
                name: "Jelena Ružić",
            },
            {
                imageLink: "https://placehold.co/260x315/webp",
                name: "Jelena Ružić",
            },
            {
                imageLink: "https://placehold.co/260x315/webp",
                name: "Jelena Ružić",
            }
        ]
    }

    useEffect(() => {
      setTeam(mockData);
    }, [])

    return (
        <section className={styles.team}>
            <h2 className={styles.title}>
                {team.title}
            </h2>
            <div className={styles.teamContainer}>
                {team?.data && team.data.map(({imageLink, name}, index)=> (
                    <TeamMember imageLink={imageLink} name={name} key={`team-member-${index}`}/>
                ))}
            </div>
        </section>
    )
}
