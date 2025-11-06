// src/components/LogoSection.tsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../assets/styles/Main.scss";

interface ScheduleProps {
  mode: "light" | "dark";
}

interface Session {
  time: string;
  programme: string;
  speaker: string;
}

const Schedule: React.FC<ScheduleProps> = ({ mode }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);

  const day1: Session[] = [
    { time: "8:30-9:00", programme: "Opening", speaker: "-" },
    { time: "9:00-9:40", programme: "Keynote 1", speaker: "[SENIOR 1]" },
    { time: "9:40-11:00", programme: "Session 1", speaker: "[JUNIOR 1A]" },
    { time: "", programme: "", speaker: "[JUNIOR 1B]" },
    { time: "", programme: "", speaker: "[JUNIOR 1C]" },
    { time: "", programme: "", speaker: "[JUNIOR 1D]" },
    { time: "11:00-11:30", programme: "Coffee", speaker: "-" },
    { time: "11:30-12:50", programme: "Session 2", speaker: "[JUNIOR 2A]" },
    { time: "", programme: "", speaker: "[JUNIOR 2B]" },
    { time: "", programme: "", speaker: "[JUNIOR 2C]" },
    { time: "", programme: "", speaker: "[JUNIOR 2D]" },
    { time: "12:50-14:10", programme: "Lunch", speaker: "-" },
    { time: "14:10-14:50", programme: "Keynote 2", speaker: "[SENIOR 2]" },
    { time: "14:50-16:10", programme: "Elevator Pitch", speaker: "-" },
    { time: "16:10-17:30", programme: "Poster + Aperitif", speaker: "-" },
  ];

  const day2: Session[] = [
    { time: "8:30-9:00", programme: "Opening + Registration", speaker: "-" },
    { time: "9:00-9:40", programme: "Keynote 3", speaker: "[SENIOR 3]" },
    { time: "9:40-11:00", programme: "Sessione 3 (Tema 3)", speaker: "[JUNIOR 3A]" },
    { time: "", programme: "", speaker: "[JUNIOR 3B]" },
    { time: "", programme: "", speaker: "[JUNIOR 3C]" },
    { time: "", programme: "", speaker: "[JUNIOR 3D]" },
    { time: "11:00-11:30", programme: "Coffee", speaker: "-" },
    { time: "11:30-12:50", programme: "Sessione 4 (Tema 4)", speaker: "[JUNIOR 4A]" },
    { time: "", programme: "", speaker: "[JUNIOR 4B]" },
    { time: "", programme: "", speaker: "[JUNIOR 4C]" },
    { time: "", programme: "", speaker: "[JUNIOR 4D]" },
    { time: "12:50-14:10", programme: "Pranzo", speaker: "-" },
    { time: "14:10-14:50", programme: "Keynote 4", speaker: "[SENIOR 4]" },
    { time: "14:50-15:30", programme: "Sessione 5 (Free)", speaker: "[JUNIOR 5A]" },
    { time: "", programme: "", speaker: "[JUNIOR 5B]" },
    { time: "15:30-16:00", programme: "Poster + Coffee", speaker: "-" },
    { time: "16:00-16:40", programme: "Keynote 5", speaker: "[SENIOR 5]" },
    { time: "16:40-17:00", programme: "Closing", speaker: "-" },
  ];

  return (
    <div className="schedule-section" id="schedule">
      <h2>Programme</h2>
      <p>Here you can find the programme of the SIAM chapters meeting.</p>

      <Paper elevation={0} className={`schedule-card ${mode === "dark" ? "dark" : ""}`}>
        <Accordion
          expanded={expanded === "day1"}
          onChange={handleChange("day1")}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>December 12, 2025</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table size="small" aria-label="day 1 schedule" sx={{tableLayout: 'auto', whiteSpace: 'nowrap' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Time</strong></TableCell>
                    <TableCell><strong>Programme</strong></TableCell>
                    <TableCell><strong>Speaker</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {day1.map((session, i) => (
                    <TableRow key={i}>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.programme}</TableCell>
                      <TableCell>{session.speaker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "day2"}
          onChange={handleChange("day2")}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>December 13, 2025</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table size="small" aria-label="day 2 schedule" sx={{tableLayout: 'auto', whiteSpace: 'nowrap' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Time</strong></TableCell>
                    <TableCell><strong>Programme</strong></TableCell>
                    <TableCell><strong>Speaker</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {day2.map((session, i) => (
                    <TableRow key={i}>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.programme}</TableCell>
                      <TableCell>{session.speaker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </div>
  );
};

export default Schedule;
