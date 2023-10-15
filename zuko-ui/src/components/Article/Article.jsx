import styles from './Article.module.scss';
import PostShareLinks from '../PostShareLinks/PostShareLinks';
import parse from 'html-react-parser';
import { Fragment } from 'react';

function Article({data = {}}){
    const blocks = data.blocks;
    return (
        <article className={styles.article}>
            <span className={styles.subtitle}>Koliki je moj deo?</span>
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
