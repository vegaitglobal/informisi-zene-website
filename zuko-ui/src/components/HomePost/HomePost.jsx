import styles from './HomePost.module.scss';

export default function HomePost() {
	const data = [
		{
			imgSrc: './test.png',
			imgAlt: 'Missing',
			subheading: 'KOLIKI JE MOJ DEO?',
			heading: 'Ruralne Evropljanke',
			desc: 'Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness.',
		},
	];

	return (
		<div>
			{data.map((post) => (
				<div className={styles.post}>
					<img
						className={styles.post__img}
						src={post.imgSrc}
						alt={post.imgAlt}
					/>
					<div className={styles.post__content}>
						{post.subheading && (
							<span className={styles.post__subheading}>
								{post.subheading}
							</span>
						)}
						{post.heading && (
							<span className={styles.post__heading}>
								{post.heading}
							</span>
						)}
						{post.desc && (
							<p className={styles.post__desc}>{post.desc}</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
