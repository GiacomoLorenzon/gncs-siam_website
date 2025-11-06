// src/components/LogoSection.tsx
import React from "react";
import { LogoLoop } from "../components/LogoLoop";
import '../assets/styles/Main.scss'; // make sure the styles are imported

interface LogoSectionProps {
  mode: "dark" | "light";
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
            { src: "./logos/logo_mathLab_bg_v.png", alt: "mathlab" },
            { src: "./logos/logo_polimi.png", alt: "Polimi" },
            { src: "./logos/logo-8192px.png", alt: "AIM" },
            { src: "./logos/matematica_unipi_dx_blu.png", alt: "UniPi" },
            { src: "./logos/SNS.png", alt: "SNS" },
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
