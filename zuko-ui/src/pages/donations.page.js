import QRCode from "../components/QRCode/QRCode";
import QRCodeOutroText from "../components/QRCodeOutroText/QRCodeOutroText";
import DonationHero from "../components/DonationHero/DonationHero";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";

export default function DonationsPage() {
    return <div>
        <HorizontalSpacer desktopSize={90} mobileSize={0}/>
        <DonationHero />
        <QRCode/>
        <QRCodeOutroText/>
        <HorizontalSpacer desktopSize={120} mobileSize={60} />
    </div>
}