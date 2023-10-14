import styles from './Article.module.scss';
import PostShareLinks from '../PostShareLinks/PostShareLinks';
import parse from 'html-react-parser';

const paragraphs = 
    "<p>Dok je jedan deo ŽUKO tima ovih dana bio angažovan na posetama srednjim školama u projektu „Koliki je moj deo?“, drugi deo tima je bio u Novom Sadu, gde je u Privrednoj komori Vojvodine učestvovao na međunarodnoj konferenciji pod nazivom Ruralne Evropljanke.</p><p>U ime Ženskog udruženja kolubarskog okruga, Katarina Ranković predstavila je kampanju projekta „Koliki je moj deo?“, prisutne je upoznala sa problemima nepravedne raspodele nasledstva između muškaraca i žena i pojasnila zbog čega je sporan Član.82 Zakona o socijalnoj zaštiti po kom osobe koje se odreknu nasledstva nemaju pravo na socijalnu pomoć u određenom periodu.</p><p>Međunarodna konferencija ima za cilj povezivanje i stvaranje partnerstava za nove EU projekte u oblasti ruralnog turizma sa akcentom na žene koje pokreću biznis i deo je projekta čiji je inicijator Hrvatska zadruga za turizam i ruralni razvoj „Klub članova Selo“ iz Zagreba, a u koji su uključene i organizacije iz Srbije, Severne Makedonije i Bosne i Hercegovine.</p><p>Katarina je naglasila da je za unapređenje biznisa žena u ruralnom području ključno raspolaganje imovinom koja im obezbeđuje pristup krediranju, a da su žene u ruralnom delu Srbije vlasnice samo oko 16% od ukupne imovine. Zbog toga je važno raditi na razbijanju rodnih obrazaca prema kojima se žene odriču nasledstva u korist muških članova porodice jer ekonomska nezavisnost žena je jedan od osnovnih pokazatelja položaja žena u društvu.</p>";

function Article(){
    return (
        <article className={styles.article}>
            <span className={styles.subtitle}>Koliki je moj deo?</span>
            <h2 className={styles.title}>Ruralne Evropljanke</h2>
            <div className={styles.rte}>
                {parse(paragraphs)}
            </div>
            <img className={styles.image} src="/placeholder.png" alt="Post image" />
            <PostShareLinks />
        </article>
    )
}

export default Article
