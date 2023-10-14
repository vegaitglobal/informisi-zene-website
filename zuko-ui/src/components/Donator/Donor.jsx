import style from "./Donor.module.scss";

export default function Donor({name, link}) {
    return (
		<div className={style.donor}>
			<a href={link} target="_blank" rel="noreferrer">
				<span>{name}</span>
			</a>	
		</div>
    )
}
