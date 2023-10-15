import React from "react";
import style from "./TeamMember.module.scss";

export default  function TeamMember({ name, profileImageUrl }) {
	return (
		<div className={style.teamMember}>
			<div className={style.teamMemberImage}>
				{profileImageUrl && (
					<img src={profileImageUrl} alt={name} title={name} />
				)}
			</div>
			<p className={style.teamMemberName}>{name}</p>
		</div>
	);
}
