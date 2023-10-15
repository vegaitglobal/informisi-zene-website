import styles from './PostShareLinks.module.scss';

export default function PostShareLinks() {
	const data = [
		{
			alt: 'Instagram icon',
			href: 'www.instagram.com',
			src: '/instagram-icon.svg'
		},
		{
			alt: 'Tiktok icon',
			href: 'www.tiktok.com',
			src: '/tiktok-icon.svg'
		},
		{
			alt: 'Facebook icon',
			href: 'www.facebook.com',
			src: '/facebook-icon.svg'
		},
		{
			alt: 'Twitter icon',
			href: 'www.twitter.com',
			src: '/twitter-icon.svg'
		},
	];

	return (
		<div className={styles.share}>
			<span className={styles.share__text}>Podeli</span>
			<div className={styles.share__icons}>
				{data?.map((item) => (
					<a className={styles.share__icon} href={item.href}>
						<img src={item.src} alt={item.alt} />
					</a>
				))}
			</div>
		</div>
	);
}
