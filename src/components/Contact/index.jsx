"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function Index() {
  const container = useRef(null);
  const top = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center end", "end end"],
  });
  const fontSize = useTransform(scrollYProgress, [0, 0.75], ["10vw", "5vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["500px", "350px"]);

  const [showDiv, setShowDiv] = useState(false);
  const fadeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0.75) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const commentItems = [
    {
      content: "I have met my best friends here and truly bonded ”",
      user: "Cecilia (User)",
    },
    {
      content:
        "Matched with a like minded person in under a min, pretty magical! ”",
      user: "pp|h5853 (User)",
    },
    {
      content: "The topics are super trendy! ”",
      user: "Gcclaire (User)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [commentItems.length]);

  const commentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      ref={container}
      className={styles.contact}
      style={{ position: "relative" }}
    >
      <motion.div ref={top} style={{ height }} className={styles.top}>
        <div className={styles.title}>
          <motion.h2
            style={{
              fontSize,
            }}
          >
            What’s the buzz?
          </motion.h2>
        </div>
        <AnimatePresence>
          {showDiv && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariants}
              transition={{ duration: 0.5 }}
              className={styles.comments}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className={styles.comment}
                  variants={commentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <span>“</span>
                  <h3>{commentItems[currentIndex].content}</h3>
                  <p>{commentItems[currentIndex].user}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className={styles.bottom}>
        <div className={styles.title}>
          <h2>Wander</h2>
        </div>
        <div className={styles.follow}>
          <Link href="https://www.instagram.com/wanderforsocial/" passHref>
            <Image
              src="/images/ins.png"
              alt=""
              className={styles.logo}
              width={41}
              height={39}
            />
          </Link>
          {/* <Image
            src="/images/x.png"
            alt=""
            className={styles.logo}
            width={41}
            height={39}
          />
          <Image
            src="/images/facebook.png"
            alt=""
            className={styles.logo}
            width={41}
            height={39}
          />
          <Image
            src="/images/youtb.png"
            alt=""
            className={styles.logo}
            width={41}
            height={39}
          />
          <Image
            src="/images/tikt.png"
            alt=""
            className={styles.logo}
            width={41}
            height={39}
          /> */}
        </div>
        <div className={styles.copyright}>
          Copyright © ActEarn Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
