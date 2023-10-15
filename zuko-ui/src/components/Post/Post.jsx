import { NavLink } from 'react-router-dom';
import styles from './Post.module.scss';

export default function Post({ postData = {} }) {
	return (
		<div className={styles.post}>
			<NavLink to={`posts/${postData.id}`} target="_blank">
				<div className={styles.post__img}>
					<img
						src={postData?.cover_image}
						alt={postData.title}
					/>
				</div>
			</NavLink>
			<div className={styles.post__content}>
				{postData.categories && (
					postData.categories.map((category) => (
						<span key={category.id} className={styles.post__subheading}>
							{category.name}
						</span>
					))
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
		</div>
	);
}
