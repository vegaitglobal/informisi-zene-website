import style from "./Value.module.scss";

export default function Value({imageUrl, title, description}) {
    return (
        <div className={style.value}>
            <div className={style.imgContainer}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={style.contentContainer}>
                <h3 className={style.title}>
                        {title}
                </h3>

                <p className={style.description}>
                    {description}
                </p>
            </div>
        </div> 
    )
}