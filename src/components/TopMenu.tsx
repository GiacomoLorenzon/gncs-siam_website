import { useEffect, useState } from "react";
import "../assets/styles/Main.scss"; // global import, same as in Main.tsx

interface ScrollTopDivProps {
  height?: number;
}

const ScrollTopDiv: React.FC<ScrollTopDivProps> = ({ height = 60 }) => {
  const [top, setTop] = useState(-height);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setTop(0);
      } else {
        setTop(-height);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [height]);

  return (
    <div
      className="scroll-top-div" // global SCSS class
      style={{ top: `${top}px`, height: `${height}px` }} // dynamic top
    >
      <a href="#home">Home</a>
      <a href="#registration">Registration</a>
    </div>
  );
};

export default ScrollTopDiv;
