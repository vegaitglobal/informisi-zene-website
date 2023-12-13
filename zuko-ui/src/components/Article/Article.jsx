import styles from './Article.module.scss';
import PostShareLinks from '../PostShareLinks/PostShareLinks';
import parse from 'html-react-parser';
import { Fragment } from 'react';

function Article({data = {}}){
    const blocks = data.blocks;
    
    return (
        <article className={styles.article}>
            {data?.categories ? 
            <div className={styles.categories}>
                {data?.categories.map((el, i) => (
                    <span className={styles.subtitle} key={el?.id}>{el?.name}</span>
                ))}
            </div>
            : null}
            {data?.title ? <h2 className={styles.title}>{data?.title}</h2> : null}
            {blocks?.map((el, i)=>{
                return (
                    <Fragment key={i}>
                        {el.type === 'text' && <div className={styles.rte}>
                            {parse(el?.value)}
                        </div>}
                        {el.type === 'image' && <img className={styles.image} src={el?.value} alt="Post image" />}
                    </Fragment>
                )
            })}
            <PostShareLinks />
        </article>
    )
}

export default Article
