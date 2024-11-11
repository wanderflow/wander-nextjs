"use client";
import styles from "./page.module.scss";
import { useRef } from "react";
import Landing from "../components/Landing";
import Description from "../components/Description";
import Contact from "../components/Contact";
import Express from "@/components/Express";
import Encounter from "@/components/Encounter";
import Download from "@/components/Download";
import Header from "../components/Header";

export default function Home() {
  const landingRef = useRef(null);
  const descriptionRef = useRef(null);
  const expressRef = useRef(null);
  const encounterRef = useRef(null);
  const downloadRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className={styles.main}>
      <Header
        refs={{
          landingRef,
          descriptionRef,
          expressRef,
          encounterRef,
          downloadRef,
          contactRef,
        }}
      />
      <section ref={landingRef}>
        <Landing />
      </section>
      <section ref={descriptionRef}>
        <Description />
      </section>
      <section ref={expressRef}>
        <Express />
      </section>
      <section ref={encounterRef}>
        <Encounter />
      </section>
      <section ref={downloadRef}>
        <Download />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </main>
  );
}
