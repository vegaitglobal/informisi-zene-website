import styles from './HomePost.module.scss';

export default function HomePost({ imgSrc = 'www.google.com' }) {
	return (
		<div className={styles.post}>
			<img className={styles.post__img} src={imgSrc} alt="Missing" />
			<div className={styles.post__content}>
				<span className={styles.post__subheading}>
					KOLIKI JE MOJ DEO?
				</span>
				<span className={styles.post__heading}>
					Ruralne Evropljanke
				</span>
				<p className={styles.post__desc}>
					Bits of moving fluff white dwarf kindling the energy hidden
					in matter shores of the cosmic ocean Jean-François
					Champollion consciousness.
				</p>
			</div>
		</div>
	);
}
