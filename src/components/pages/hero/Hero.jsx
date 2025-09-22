import { useState, useEffect } from "react";
import "./Hero.css";
import TrueFocus from "../../animations/truefocus/TrueFocus";
import TextType from "../../animations/texttype/TextType";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero({ isDark }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // slight delay to trigger transition

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`hero ${isDark ? "dark" : "light"} fade-transition ${
        isVisible ? "fade-in" : ""
      }`}
    >
      <div className="inner">
        <h1 className={`true-focus ${isDark ? "dark" : "light"}`}>
          Welcome to my Portfolio
        </h1>

        <h2 className={`hero-name ${isDark ? "dark" : "light"}`}>
          Kirtik Ayush
        </h2>

        <TextType
          text={["Data Analyst", "Flutter Developer", "React Noob"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
          textColors={
            isDark
              ? ["#ffffff", "#ffffff", "#ffffff"]
              : ["#000000", "#000000", "#000000"]
          }
          style={{ fontSize: "2.5rem" }}
        />
      </div>
    </div>
  );
}

export default Hero;
