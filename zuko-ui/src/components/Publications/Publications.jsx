import React from 'react'
import style from "./Publications.module.scss";

export default function Publications({data}) {
  return (
    <div className={style.publications}>
      {data.map(({cover_image_url, url, title }) => (
        <a href={url} target="_blank" rel="noreferrer" className={style.card} key={data.id}>
            <figure className={style.imgContainer}>
                <img src={cover_image_url} alt={title} className={style.img}/>
            </figure>
            <p className={style.title}>
                {title}
            </p>
        </a>
      ))}
    </div>
  )
}
