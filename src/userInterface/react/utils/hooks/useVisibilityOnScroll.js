import { useState, useEffect } from 'react';

import { debounce } from '../helpers';

export default function useVisibilityOnScroll() {
  const [prevScrollPos, setPreviousScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPosition = window.pageYOffset;

    /* eslint-disable prettier/prettier */
    setVisible(
      (prevScrollPos > currentScrollPosition &&
        prevScrollPos - currentScrollPosition > 70) ||
      currentScrollPosition < 10
    );
    /* eslint-enable prettier/prettier */

    setPreviousScrollPosition(currentScrollPosition);
  }, 30);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return { visible };
}
