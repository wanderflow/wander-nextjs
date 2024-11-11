"use client";
import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { slideUp, opacity } from "./animation";

export default function Index() {
  const description = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(description, {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <motion.h2
          variants={slideUp}
          custom={0.3}
          animate={isInView ? "open" : "closed"}
        >
          DISCOVER
        </motion.h2>
        <motion.h2
          variants={slideUp}
          custom={0.6}
          animate={isInView ? "open" : "closed"}
        >
          YOUR COMMUNITY
        </motion.h2>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Explore a diverse range of trending topics within your community,
          where you can engage directly with your peers.
        </motion.p>
      </div>

      <motion.video
        ref={videoRef}
        muted
        playsInline
        loop={false}
        autoPlay={false}
      >
        <source
          src="/videos/comm-vp9-chrome.webm"
          type='video/mp4; codecs="hvc1"'
        />
        <source src="/videos/comm-hevc-safari.mp4" type="video/webm" />
      </motion.video>
    </div>
  );
}
