import AboutHero from "../components/AboutHero/AboutHero";
import AnnualReport from "../components/AnnualReport/AnnualReport";
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import TeamMemberContainer from "../components/TeamMemberContainer/TeamMemberContainer";
import DonorsContainer from "./../components/DonorsContainer/DonorsContainer";
import OurValues from "./../components/OurValues/OurValues";
import { getDonationSites } from "../services/donationService";
import { useEffect, useState } from "react";
import { getLatestReportService } from "../services/publication.service";

export default function AboutPage() {
  const [data, setData] = useState([]);
  const [latestReport, setlatestReport] = useState([]);

  useEffect(() => {
    getDonationSites().then(setData);
    getLatestReportService().then(setlatestReport);
  }, []);

  return (
    <div>
      <HorizontalSpacer desktopSize={90} mobileSize={0} />
      <AboutHero />
      <OurValues />
      <TeamMemberContainer />
      <AnnualReport report={latestReport} />
      <DonorsContainer data={data} />
    </div>
  );
}
