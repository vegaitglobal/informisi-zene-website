import React from 'react'
import style from "./BlogRecommendation.module.scss";
import { Link } from 'react-router-dom';

export default function BlogRecommendation({title, description, blogId}) {
  return (
    <Link className={style.blogRecommendation} to={`/post/${blogId}`}>
      <h4 className={style.subtitle}>koliki je moj deo?</h4>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </Link>
  )
}