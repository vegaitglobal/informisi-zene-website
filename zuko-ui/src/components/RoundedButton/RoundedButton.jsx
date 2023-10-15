import { NavLink } from 'react-router-dom';
import styles from './RoundedButton.module.css';

export default function RoundedButton({
	label = 'Ucitaj jos',
	onClick = () => {},
	buttonType = 'button',
	isAnchor = false,
	navigateTo = '/',
}) {
	if (isAnchor) {
		return (
			<NavLink
				to={navigateTo}
				className={styles.button}
				onClick={onClick}
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
