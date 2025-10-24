import React, { useState, useEffect } from "react";
import { FormControlLabel, Switch, styled } from "@mui/material";

/* ---------- Icons ---------- */
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

/* ---------- Components ---------- */
import { LiquidEther, Main } from "./components";
import Footer from "./components/Footer";
import LogoSection from "./components/LogoSection";

/* ---------- Styles ---------- */
import "./index.scss";
import "./App.scss";

/* ------------------------------ App ------------------------------ */
function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  /* ---------- Load saved or system theme ---------- */
  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setMode(mediaQuery.matches ? "dark" : "light");
    }
  }, []);

  /* ---------- Theme toggle handler ---------- */
  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMode = event.target.checked ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      {/* ---------- Background ---------- */}
      <div className={`background-container ${mode}-mode`}>
        <LiquidEther
          colors={
            mode === "dark"
            ? ["#fff", "#fff", "#001e44"] // dark shades
            : ["#e9e9e9", "#e9e9e9", "#e9e9e9"] // light shades
          }
          mouseForce={20}
          cursorSize={40}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.1}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* ---------- Foreground Content ---------- */}
      <div className="content-overlay">
        {/* Theme Switch */}
        <div className="theme-switch">
          <FormControlLabel
            control={<Switch checked={mode === "dark"} onChange={handleModeChange} />}
            label={
              mode === "dark" ? (
                <NightsStayIcon sx={{ fontSize: 30, color: "#ffffff"}} />
              ) : (
                <WbSunnyIcon sx={{ fontSize: 30, color: "#ffffff"}} />
              )
            }
            sx={{
              mx: 1,
              gap: 2,
              fontFamily: "inherit",
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: mode === "dark" ? "#ffffff" : "#ffffff", // icona toggle
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: mode === "dark" ? "#6085a1" : "#e9e9e9", // track toggle
              },
              "& .MuiSwitch-track": {
                backgroundColor: mode === "dark" ? "#e9e9e9" : "#6085a1", // track normale
              },
            }}
          />
        </div>

        {/* Sections */}
        <Main mode={mode}/>
        <LogoSection mode={mode} />
        <Footer mode={mode} />
      </div>
    </div>
  );
}

export default App;
