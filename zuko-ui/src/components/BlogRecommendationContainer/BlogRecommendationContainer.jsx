import React, {useState, useEffect} from 'react'
import style from "./BlogRecommendationContainer.module.scss";
import BlogRecommendation from '../BlogRecommendation/BlogRecommendation';

export default function BlogRecommendationContainer() {
	const [blogs, setBlogs] = useState([]);

	const mockBlogs = [
        {
            "id": 1,
            "title": "Ruralne Evropljanke",
            "user": "Jelena",
            "created":"2023-10-13T18:00",
            "description" : "Bits of moving fluff white dwarf kindling the energy hidden in matter shores of the cosmic ocean Jean-François Champollion consciousness."
        },
		{
            "id": 2,
            "title": "(Ne)pravedno nasleđivanje, Insajder TV",
            "user": "Jelena",
            "created":"2023-10-13T18:00",
            "description" : "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
    ];

	useEffect(() => {
		setBlogs(mockBlogs);
	}, [])
	

	return (
		<aside className={style.blogRecommendationContainer}>
			<h2 className={style.title}>
				Čitajte još
			</h2>

			<div className={style.blogs}>
				{blogs.map(({id, title, description}) => (
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