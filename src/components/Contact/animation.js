export const slideUp = {
  initial: {
    fontSize: "5vw",
  },
  open: (i) => ({
    fontSize: "1vw",
    transition: { duration: 1, delay: 1 },
  }),
  closed: {
    fontSize: "5vw",
    transition: { duration: 1 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1, delay: 0.6 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

const fadeVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};