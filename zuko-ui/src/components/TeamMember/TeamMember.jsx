import React from "react";
import style from "./TeamMember.module.scss";

export default  function TeamMember({ name, profileImageUrl }) {
	return (
		<div className={style.teamMember}>
			<div className={style.teamMemberImage}>
					<img src={profileImageUrl || "https://zuko.rs/wp-content/uploads/2023/06/viber_image_2023-06-06_11-40-20-190-768x575.jpg"} alt={name} title={name} />
			</div>
			<p className={style.teamMemberName}>{name}</p>
		</div>
	);
}
