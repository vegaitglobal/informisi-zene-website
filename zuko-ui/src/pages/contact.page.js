import ContactPageComponent from "../components/ContactPageComponent/ContactPageComponent"
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import { getCategoriesService } from "../services/categories.service";

export default function ContactPage() {
    return <div>
        <HorizontalSpacer desktopSize={1} mobileSize={0} />
        <ContactPageComponent/>
    </div>
}