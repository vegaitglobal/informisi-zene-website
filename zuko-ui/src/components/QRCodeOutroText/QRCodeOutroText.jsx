import React, { useEffect, useState } from "react";
import styles from "./QRCodeOutroText.module.scss";
import { Link } from "react-router-dom";
import { getLatestReportService } from "../../services/publication.service";

const QRCodeOutroText = () => {
  const [latestReport, setlatestReport] = useState({});

  useEffect(() => {
    getLatestReportService().then(setlatestReport);
  }, []);

  return (
    <p className={styles.QRCodeText}>
      Važno nam je da znate kako trošimo Vaš novac i zato svakog donatra kroz
      izveštaj o radu i trošenju doniranih sredstava obaveštavamo kako smo
      iskoristili donirana sredstva.
      <br />
      <br />
      Izveštaj o radu možete pogledati <Link to={latestReport?.url}>ovde</Link>
    </p>
  );
};

export default QRCodeOutroText;
