import React, { useState, useEffect } from 'react';
import styles from './TeamMemberContainer.module.scss';
import TeamMember from '../TeamMember/TeamMember';
import { getEmployeesService } from '../../services/employees.service';

export default function TeamMemberContainer() {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		getEmployeesService()
			.then(setTeam)
			.catch((error) => console.error(error));
	}, []);
	
	return (
		<section className={styles.team}>
			<h2 className={styles.title}>Naš tim</h2>
			<div className={styles.teamContainer}>
				{team &&
					team.map(({ name, profileImageUrl }, index) => (
						<TeamMember
							name={name}
							profileImageUrl={profileImageUrl}
							key={`team-member-${index}`}
						/>
					))}
			</div>
		</section>
	);
}
