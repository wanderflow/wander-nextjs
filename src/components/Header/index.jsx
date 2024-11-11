"use client";
import { useEffect } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function Index({ refs }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className={styles.header}>
        <div
          className={styles.logo}
          onClick={() => scrollToSection(refs.landingRef)}
        >
          <Image width={35} height={35} alt={"image"} src={`/wander.png`} />
          <div className={styles.name}>
            <p className={styles.codeBy}>Wander</p>
          </div>
        </div>
        <div className={styles.nav}>
          <div
            className={styles.el}
            onClick={() => scrollToSection(refs.descriptionRef)}
          >
            <a>About Us</a>
          </div>

          <div
            className={styles.el}
            onClick={() => scrollToSection(refs.contactRef)}
          >
            <a>Contact</a>
          </div>
          <div
            className={styles.el}
            onClick={() => scrollToSection(refs.contactRef)}
          >
            <a>Reviews</a>
          </div>

          <div
            className={styles.button}
            onClick={() => scrollToSection(refs.downloadRef)}
          >
            <p>Download</p>
          </div>
        </div>
      </div>
    </>
  );
}
