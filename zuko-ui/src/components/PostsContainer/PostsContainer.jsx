import styles from './PostsContainer.module.scss';
import Post from '../Post/Post';
import PostV2 from '../PostV2/PostV2';

export default function PostsContainer({
	data = [],
	displayVersion = 'v1',
}) {

	return (
		<div className={styles.container}>
			{displayVersion === 'v1' && (
				<h3 className={styles.container__heading}>Prilike za žene</h3>
			)}
			<div className={styles.container__posts}>
				{displayVersion === 'v2'
					? data.map((post) => {
							return <PostV2 key={post.id} postData={post} />;
					  })
					: data.slice(0, 2).map((post) => {
							return (
								<>
									<Post key={post.id} postData={post} />
								</>
							);
					  })}
			</div>
		</div>
	);
}
