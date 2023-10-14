import styles from './DonationHero.module.scss';

export default function DonationHero() {
	return (
		<div className={styles.hero}>
			<h2 className={styles.hero__heading}>
				Želite da pomognete našem radu na unapređenju položaja žena?
			</h2>
			<div className={styles.hero__img}>
				<img
					className={styles.img__hand}
					src="./hand-left-icon.svg"
					alt="Hand icon"
				/>
				<span className={styles.img__heart}>♡</span>
				<img
					className={styles.img__hand}
					src="./hand-right-icon.svg"
					alt="Hand icon"
				/>
			</div>
			<p className={styles.hero__text}>
				ŽUKO radi direktno na terenu i uspostavlja bliske veze sa ženama
				u lokalnim zajednicama, što nam omogućava  da direktno saznamo o
				njihovim izazovima i potrebama koje se često ne mogu predvideti
				unapred. Vašom podrškom putem donacija, pružate konkretan
				doprinos rešavanju stvarnih problema u tim zajednicama.
			</p>
		</div>
	);
}
