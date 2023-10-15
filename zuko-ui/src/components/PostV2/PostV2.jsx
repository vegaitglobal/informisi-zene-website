import { NavLink } from 'react-router-dom';
import styles from './PostV2.module.scss';

const initialValue = {
	id: 0,
	title: 'Ruralne Evropljanke',
	user: 'Marina',
	crated: '2023-10-13T18:00',
	description:
		'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
	coverImageUri: './placeholder.png',
	category: 'KOLIKI JE MOJ DEO?',
};

export default function PostV2({ postData = initialValue }) {
	return (
		<div>
			<div className={styles.post}>
				<NavLink to={`posts/${postData.id}`} target="_blank">
					<div className={styles.post__img}>
						<img
							src={postData.coverImageUri}
							alt={postData.title}
						/>
					</div>
				</NavLink>
				<div className={styles.post__content}>
					{postData.category && (
						<span className={styles.post__subheading}>
							{postData.category}
						</span>
					)}
					<NavLink to={`posts/${postData.id}`} target="_blank">
						{postData.title && (
							<span className={styles.post__heading}>
								{postData.title}
							</span>
						)}
					</NavLink>
					{postData.description && (
						<p className={styles.post__desc}>
							{postData.description}
						</p>
					)}
				</div>
				{postData.readMoreUri && (
					<div className={styles.post__link}>
						<NavLink to={`posts/${postData.id}`}>
							Pročitaj više
						</NavLink>
						<img src="./arrow-right-orange.svg" alt="Arrow icon" />
					</div>
				)}
			</div>
		</div>
	);
}
