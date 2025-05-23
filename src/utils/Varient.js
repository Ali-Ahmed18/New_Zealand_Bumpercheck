export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
        scale: .8,
        transition: {
          type: 'tween',
          duration: 1.5,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        scale: 1,
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

