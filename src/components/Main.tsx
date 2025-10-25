import { useRef, useState } from "react";
import "../assets/styles/Main.scss";

// MUI Components
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// MUI Icons
import PlaceIcon from "@mui/icons-material/Place";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TaskIcon from "@mui/icons-material/Task";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ChecklistIcon from "@mui/icons-material/Checklist";

// Custom Components
import RegistrationSection from "./RegistrationSection";
import ScrollTopDiv from "./TopMenu";

interface MainProps {
  mode: "light" | "dark";
}

function Main({ mode }: MainProps) {
  // -------------------- Refs --------------------
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // -------------------- Timeline Data --------------------
  const timelineData = [
    { date: "Jan 10, 2025", event: "Abstract submission deadline", icon: <TaskIcon /> },
    { date: "Jan 31, 2025", event: "Registration deadline", icon: <HowToRegIcon /> },
    { date: "Feb 10, 2025", event: "Conference begins", icon: <ChecklistIcon /> },
  ];

  // -------------------- Map State --------------------
  const [mapIndex, setMapIndex] = useState(0);

  const maps = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1764.4805339412846!2d9.227924950723565!3d45.478326232416634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6f67dd11753%3A0x8e30fae1774a3377!2sPolitecnico%20di%20Milano!5e0!3m2!1sit!2sit!4v1761218267733!5m2!1sit!2sit",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999999999999!2d2.294481315674003!3d48.8583700792874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f10b4df0e2d%3A0x7c0d2e6f2b8e4a0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v0000000000000!5m2!1sen!2sfr",
  ];

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: number | null
  ) => {
    if (newValue !== null) setMapIndex(newValue);
  };

  // -------------------- Topics --------------------
  const topics = [
    "Numerical Linear Algebra",
    "Mathematical Modeling",
    "Inverse Problems",
    "Large-Scale Problems",
    "Uncertainty Quantification",
    "Computational Mechanics",
    "IsoGeometric Analysis",
    "Finite Element Method",
    "Finite Volume Method",
    "Virtual Element Method",
    "Physics-Informed Machine Learning",
    "Mathematical Foundations of Deep Learning",
  ];

  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm")); // small screens

  // -------------------- JSX --------------------
  return (
    <div>
      {/* Menu */}
      <ScrollTopDiv/>
      {/* Hero Section */}
      <div className="container" id="home" style={{ height: "calc(100vh - 26px)" }}>
        <div className="main-section">
          <div className="title">
            <h1>Joint GNCS-SIAM Chapters Meeting</h1>
            <h2>for Young Researchers in Numerical Analysis and Applied Mathematics</h2>
            <h3>
              <PlaceIcon /> Pavia, Italy &nbsp;&nbsp;&nbsp;&nbsp;
              <EventAvailableIcon /> 10-11 February, 2025
            </h3>
          </div>
        </div>

        <Button
          className="scroll-button"
          variant="contained"
          size="large"
          disableElevation
          onClick={scrollToNextSection}
          sx={{ fontFamily: "inherit" }}
        >
          More
        </Button>
      </div>

      {/* About Section */}
      <div ref={nextSectionRef} className="about-section">
        <h2>About the conference</h2>
        <p>
          The first edition of the Joint GNCS-SIAM Chapters Meeting for Young Researchers in Numerical Analysis and Applied Mathematics will take place in Pavia on February 10-11, 2025. This two-day meeting is designed to enhance scientific interaction among young researchers, particularly PhD students and PostDocs, working in the fields of numerical analysis, scientific computing, and applied mathematics. The meeting is organized, with the support of INDAM-GNCS, by the four SIAM Student Chapters in Italy: Università di Pavia - IMATI (UniPV-IMATI), Politecnico di Milano (PoliMi), Scuola Internazionale Superiore di Studi Avanzati (SISSA), Università di Pisa - Scuola Normale Superiore (UniPi-SNS). In addition to keynote presentations and talks by SIAM Student Chapters' representatives, young researchers are encouraged to share their latest findings through contributed talks and posters. Don’t miss this opportunity to showcase your work!
        </p>

        <h3>Included topics</h3>
        <p>Included topics are, but not limited to</p>

        {/* Topics Grid */}
        <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 1,
                }}
              >
                {topics.map((topic, i) => {
                  // Adjust based on screen size
                  const isWide = isSm ? i % 4 === 0 : i % 5 === 0;
                  const isTall = isSm ? i % 2 === 0 : i % 3 === 0; // small screens all normal height

                  const isFirst = i === 0;
                  const isLast = i === topics.length - 1;

                  return (
                    <Paper
                      className="topics"
                      key={i}
                      elevation={0}
                      sx={{
                        gridColumn: isWide ? "span 2" : "span 1",
                        gridRow: isTall ? "span 2" : "span 1",
                        borderRadius: 3,
                        p: 3,
                        m: 0,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.025)",
                        },
                      }}
                    >
                      {topic}
                    </Paper>
                  );
                })}
              </Grid>
            </Box>

        {/* Timeline */}
        <h2>Important dates</h2>
        <div className="timeline-section">
          <Timeline
            position="right"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 1,
              },
            }}
          >
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "transparent",
                      color: mode === "dark" ? "#fff" : "#000",
                      boxShadow: "none",
                    }}
                  >
                    {item.icon}
                  </TimelineDot>
                  {index < timelineData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: mode === "dark" ? "#fff" : "#000",
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent
                  sx={{ display: "flex", alignItems: "center", fontFamily: "inherit" }}
                >
                  <Typography variant="body1" sx={{ fontFamily: "inherit" }}>
                    {item.event}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ fontFamily: "inherit" }}>
                    {item.date}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <p>
          The meeting will take place on February 10-11, 2025, at Aula Foscolo, University of Pavia, 27100 Pavia, Italy.
        </p>

        {/* Map Section */}
        <div className="map-container">
          <ToggleButtonGroup
            value={mapIndex}
            exclusive
            onChange={handleToggle}
            className="map-toggle-group"
          >
            <ToggleButton value={0} className="map-toggle-left">
              Event location
            </ToggleButton>
            <ToggleButton value={1} className="map-toggle-right">
              Catering
            </ToggleButton>
          </ToggleButtonGroup>

          <div className="map">
            <iframe
              src={maps[mapIndex]}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p>
          A detailed program can be found here. If you have any question, don't hesitate to contact us at gncssiamchapters@gmail.com
        </p>
      </div>

      {/* Registration */}
      <div id="registration">
        <RegistrationSection/>
      </div>
    </div>
  );
}

export default Main;
