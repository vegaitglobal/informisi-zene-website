import React from "react";
import style from "./AnnualReport.module.scss";

export default function AnnualReport() {
  return (
    <section className={style.annualReport}>
        <h2 className={style.annualReportTitle}>
            <a className={style.annualReportLink} href="https://example.com/" target="_blank" rel="noreferrer">
                Godišnji izveštaj o radu (link)
            </a>
        </h2>
    </section>
  )
}