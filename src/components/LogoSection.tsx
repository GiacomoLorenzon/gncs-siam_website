// src/components/LogoSection.tsx
import React from "react";
import { LogoLoop } from "../components/LogoLoop";
import '../assets/styles/Main.scss'; // make sure the styles are imported

interface LogoSectionProps {
  mode: "light" | "dark";
}

const LogoSection: React.FC<LogoSectionProps> = ({ mode }) => {
  return (
    <div className="logo-section">
      <h2>Institutions involved</h2>
      <p>All the institutions involved are bla bla bla.</p>
      <section>
        <LogoLoop
          className="logo-loop"
          logos={[
            { src: "./logos/logo_polimi.webp", alt: "Polimi" },
            { src: "./logos/dipmate.png", alt: "Dip Mate" },
            { src: "./logos/imati.png", alt: "IMATI" },
            { src: "./logos/logo-indam-gncs.webp", alt: "INDAM" },
            { src: "./logos/mathlab.png", alt: "SISSA" },
            { src: "./logos/pavia.png", alt: "Pavia" },
            { src: "./logos/siam.png", alt: "SIAM" },
          ]}
          speed={80}
          direction="left"
          logoHeight={100}
          gap={40}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#fff"
          scaleOnHover={false}
          ariaLabel="Partner logos"
        />
      </section>
    </div>
  );
};

export default LogoSection;
