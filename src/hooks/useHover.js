import {useState, useEffect, useRef} from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const element = useRef(null)

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    element.current.addEventListener('mouseenter', enter);
    element.current.addEventListener('mouseleave', leave);
    element.current.addEventListener('touchstart', enter);
    element.current.addEventListener('touchend', leave);
    return () => {
      element.current.removeEventListener('mouseenter', enter);
      element.current.removeEventListener('mouseleave', leave);
      element.current.removeEventListener('touchstart', enter);
      element.current.removeEventListener('touchend', leave);
    };
  }, []);

  return [hovered, element];
}

export default useHover;