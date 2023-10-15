import React from 'react'
import style from "./BlogRecommendationContainer.module.scss";
import BlogRecommendation from '../BlogRecommendation/BlogRecommendation';

export default function BlogRecommendationContainer({blogs}) {
	console.log(blogs)
	return (
		<aside className={style.blogRecommendationContainer}>
			<h2 className={style.title}>
				Čitajte još
			</h2>

			<div className={style.blogs}>
				{blogs.length && blogs.map(({id, title, description}) => (
					<BlogRecommendation 
						title={title}
						description={description}
						blogId={id}
						key={`recommended-blog-${id}`}
					/>
				))}
			</div>
		</aside>
	)
}