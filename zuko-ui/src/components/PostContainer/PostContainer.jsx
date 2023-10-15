import React from 'react'
import Article from '../Article/Article'
import style from "./PostContainer.module.scss";
import BlogRecommendationContainer from './../BlogRecommendationContainer/BlogRecommendationContainer';

export default function PostContainer({data, blogs}) {
  return (
    <section className={style.postContainer}>
        <div className={style.article}>
            <Article data={data}/>
        </div>
        <div className={style.aside}>
          <BlogRecommendationContainer blogs={blogs}/>
        </div>
    </section>
  )
}