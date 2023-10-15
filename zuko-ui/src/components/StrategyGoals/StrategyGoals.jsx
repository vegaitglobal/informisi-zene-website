import styles from './StrategyGoals.module.scss';

const goals = [
    {
        image: "/goal-1.svg",
        alt: 'Decorative image',
        text: 'Ekonomsko osnaživanje žena'
    },
    {
        image: "/goal-2.svg",
        alt: 'Decorative image',
        text: 'Jačanje mehanizama za rodnu ravnopravnost'
    },
    {
        image: "/goal-3.svg",
        alt: 'Decorative image',
        text: 'Podsticanje političke participacije žena na lokalnom nivou'
    },
]

function StrategyGoals(){
    return (
        <section className={styles.holder}>
            <h2 className={styles.title}>Naši strateški ciljevi</h2>
            <div className={styles.goals}>
                {goals.map((goal, i) => (
                    <div className={styles.goal} key={i}>
                        <img className={styles.image} src={goal.image} alt={goal.alt} />
                        <p className={styles.text}>{goal.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StrategyGoals
 