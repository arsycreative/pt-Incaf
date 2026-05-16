export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.16, 1, 0.3, 1] // Custom "expensive" ease-out curve
    },
  }),
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.16, 1, 0.3, 1] 
    },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: i * 0.1, 
      ease: [0.16, 1, 0.3, 1] 
    },
  }),
}
