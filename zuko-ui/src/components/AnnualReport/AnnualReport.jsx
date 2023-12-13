import React from "react";
import style from "./AnnualReport.module.scss";

export default function AnnualReport({ report }) {
  return (
    <section className={style.annualReport}>
      <h2 className={style.annualReportTitle}>
        <a
          className={style.annualReportLink}
          href={report?.url}
          target="_blank"
          rel="noreferrer"
        >
          Godišnji izveštaj o radu (link)
        </a>
      </h2>
    </section>
  );
}
