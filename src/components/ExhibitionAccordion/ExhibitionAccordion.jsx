import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExhibitionGrid from "../ExhibitionGrid/ExhibitionGrid";

export default function ExhibitionAccordion() {
  const floors = [
    "Basement 1",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
    "Level 7",
  ];

  return (
    <div>
      <Typography variant="h4" color="text.secondary">
        What's On
      </Typography>
      {floors.map((floor, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{floor}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ExhibitionGrid />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}



