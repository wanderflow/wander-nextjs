export const slideUp = {
  initial: {
    opacity: 0
  },
  open: (i) => ({
    opacity: 1,
      transition: {duration: 1, delay: 1 * i}
  }),
  closed: {
    opacity: 0,
      transition: {duration: 1}
  }
}

export const opacity = {
  initial: {
      opacity: 0
  },
  open: {
      opacity: 1,
      transition: {duration: 1, delay: 1.}
  },
  closed: {
      opacity: 0,
      transition: {duration: 1}
  }
}