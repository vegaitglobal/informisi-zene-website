import AboutHero from "../components/AboutHero/AboutHero";
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div >
        <TestComponent testProperty="new text"/>
        <h1>Home Page</h1>
        <AboutHero 
        text1="Žensko udruženje kolubarskog okruga (ŽUKO) je osnovano u maju 2013. godine sa idejom unapređenja položaja žena na lokalnom nivou."
        text2="Vremenom su se, sa rastom udruženja, i ciljevi rada jasnije definisali, a danas ŽUKO aktivno deluje širom Srbije."
        description="Zahvaljujući podršci pojedinaca, organizacija, fondacija, kompanija i drugih saradnika, ŽUKO je uspešno sproveo preko 30 projekata koji su značajno doprineli boljem životu žena, posebno žena na selu i njihovih porodica."
        src="./AboutHero.png" />
        </div>
}