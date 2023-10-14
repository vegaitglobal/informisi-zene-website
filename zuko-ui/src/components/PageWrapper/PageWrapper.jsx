import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

export default function PageWrapper({children}){
    return <>
        <Header />
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        <Footer/>
    </>
    
}