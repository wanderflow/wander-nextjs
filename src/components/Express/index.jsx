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

  const handleAnimationComplete = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div ref={description} className={styles.container}>
      <div className={styles.description}>
        <div className={styles.body}>
          <motion.h2
            variants={slideUp}
            custom={0.3}
            animate={isInView ? "open" : "closed"}
            onAnimationComplete={handleAnimationComplete}
          >
            EXPRESS
          </motion.h2>
          <motion.h2
            variants={slideUp}
            custom={0.6}
            animate={isInView ? "open" : "closed"}
          >
            AND FIND OUT
          </motion.h2>
          <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
            Share your most genuine thoughts on these trending topics and, most
            importantly, be yourself! Our advanced Al technology will connect
            you with like-minded individuals, making it easy to find and
            interact with people who share your interests and viewpoints.
          </motion.p>
        </div>
      </div>

      <motion.video
        ref={videoRef}
        muted
        playsInline
        loop={false}
        autoPlay={false}
      >
        <source
          src="/videos/test-vp9-chrome.webm"
          type='video/mp4; codecs="hvc1"'
        />
        <source src="/videos/test-hevc-safari.mp4" type="video/webm" />
      </motion.video>
    </div>
  );
}
