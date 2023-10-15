import React from 'react'
import style from "./BlogRecommendation.module.scss";
import { Link } from 'react-router-dom';

export default function BlogRecommendation({title, description, blogId, categories=[]}) {
  return (
    <Link className={style.blogRecommendation} to={`/post/${blogId}`}>
      <h4 className={style.subtitle}>
        {categories.map(({name, id}) => <span key={`category-${id}`}>{name} <br /></span>)}
      </h4>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </Link>
  )
}