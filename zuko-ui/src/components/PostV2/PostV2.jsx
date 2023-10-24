import { NavLink } from "react-router-dom";
import styles from "./PostV2.module.scss";

export default function PostV2({ postData = {} }) {
  return (
    <div className={styles.post}>
      <NavLink to={`/posts/${postData.id}`} target="_blank">
        <div className={styles.post__img}>
          <img src={postData?.cover_image} alt={postData.title} />
        </div>
      </NavLink>
      <div className={styles.post__content}>
        {postData.categories &&
          postData.categories.map((category) => (
            <span key={category.id} className={styles.post__subheading}>
              {category.name}
            </span>
          ))}
        <NavLink to={`/posts/${postData.id}`} target="_blank">
          {postData.title && (
            <span className={styles.post__heading}>{postData.title}</span>
          )}
        </NavLink>
        {postData.description && (
          <p className={styles.post__desc}>{postData.description}</p>
        )}
      </div>
      <NavLink className={styles.post__link} to={`/posts/${postData.id}`}>
        <span>Pročitaj više</span>
        <img src="./arrow-right-orange.svg" alt="Arrow icon" />
      </NavLink>
    </div>
  );
}
