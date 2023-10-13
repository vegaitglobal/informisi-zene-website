import React from "react";
import style from "./TeamMember.module.css";

export default  function TeamMember({imageLink, name}) {
    return (
        <div className={style.teamMember}>
            <div className={style.teamMemberImage}>
                <img src={imageLink} alt={name} title={name}/>
            </div>
            <p className={style.teamMemberName}>
                {name}
            </p>
        </div>
    )
}
