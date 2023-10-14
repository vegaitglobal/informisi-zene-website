import styles from './HomePost.module.scss';

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

export default function HomePost({ postData = initialValue }) {
	return (
		<div>
			<div className={styles.post}>
				<div className={styles.post__img}>
					<img src={postData.coverImageUri} alt="Missing" />
				</div>
				<div className={styles.post__content}>
					{postData.category && (
						<span className={styles.post__subheading}>
							{postData.category}
						</span>
					)}
					{postData.title && (
						<span className={styles.post__heading}>
							{postData.title}
						</span>
					)}
					{postData.description && (
						<p className={styles.post__desc}>
							{postData.description}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
