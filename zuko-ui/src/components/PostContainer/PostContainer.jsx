import React from 'react'
import Article from '../Article/Article'
import style from "./PostContainer.module.scss";

export default function PostContainer({data}) {
  return (
    <section className={style.postContainer}>
        <div className={style.article}>
            <Article data={data}/>
        </div>
        <div className={style.aside}>

        </div>
    </section>
  )
}