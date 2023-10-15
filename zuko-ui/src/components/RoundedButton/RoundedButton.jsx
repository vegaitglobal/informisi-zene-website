import { NavLink } from 'react-router-dom';
import styles from './RoundedButton.module.scss';

export default function RoundedButton({
	label = 'Ucitaj jos',
	onClick = () => {},
	buttonType = 'button',
	isAnchor = 'false',
	navigateTo = '/',
}) {
	if (isAnchor === "true") {
		return (
			<NavLink
				to={navigateTo}
				className={styles.button}
			>
				{label}
			</NavLink>
		);
	} else {
		return (
			<button
				className={styles.button}
				onClick={onClick}
				type={buttonType}
			>
				{label}
			</button>
		);
	}
}
