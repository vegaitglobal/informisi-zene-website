import Footer from "../Footer/Footer";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

export default function PageWrapper({children}){
    return <>
        <h3>Header</h3>
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        <Footer/>
    </>
    
}