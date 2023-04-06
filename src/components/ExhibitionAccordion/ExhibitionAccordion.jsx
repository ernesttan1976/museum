import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import "./ExhibitionAccordion.css";
import ExhibitionCard from "../ExhibitionCard/ExhibitionCard";
import Grid from "@mui/material/Grid";

export default function ExhibitionAccordion() {
  const floors = [
    "Basement 1",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
  ];

  return (
    <>
      <Typography variant="h2">Exhibitions</Typography>
      <Box className="exhibitionAccordionContainer">
        {floors.map((floor, index) => (
          <Accordion className="ExhibitionAccordion" key={index}>
            <AccordionSummary
              className="AccordionSummary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">{floor}</Typography>
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              <Grid container className="ExhibitionGridContainer" spacing={2}>
                <ExhibitionCard item xs={12} md={6} lg={3} />
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
