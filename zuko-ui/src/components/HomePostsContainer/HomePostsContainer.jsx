import styles from './HomePostsContainer.module.scss';

export default function HomePostsContainer() {
	return (
		<div className={styles.container}>
			<h3 className={styles.container__heading}>Prilike za žene</h3>
			<div className={styles.container__posts}></div>
		</div>
	);
}
