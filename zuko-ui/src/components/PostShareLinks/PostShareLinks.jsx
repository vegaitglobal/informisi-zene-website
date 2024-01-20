import styles from './PostShareLinks.module.scss';

const href = window.location.href;

const data = [
	{
		index: 0,
		alt: 'Facebook icon',
		href: `https://www.facebook.com/sharer.php?u=${href}`,
		src: '/facebook-icon.svg'
	},
	{
		index: 1,
		alt: 'Twitter icon',
		href: `https://twitter.com/intent/tweet?url=${href}`,
		src: '/twitter-icon.svg'
	},
];

export default function PostShareLinks() {
	return (
		<div className={styles.share}>
			<span className={styles.share__text}>Podeli</span>
			<div className={styles.share__icons}>
				{data?.map((item, index) => (
					<a className={styles.share__icon} href={item.href} key={`link-${index}`}>
						<img src={item.src} alt={item.alt} />
					</a>
				))}
			</div>
		</div>
	);
}
