import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExhibitionGrid from "../ExhibitionGrid/ExhibitionGrid";
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
    "Level 7",
  ];

  return (
    <>
      <Typography variant="h4" color="text.secondary">
        What's On
      </Typography>
      <Box className="exhibitionAccordionContainer">
        {floors.map((floor, index) => (
          <Accordion className="ExhibitionAccordion" key={index}>
            <AccordionSummary
              className="AccordionSummary"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{floor}</Typography>
            </AccordionSummary>
            <AccordionDetails className="AccordionDetails">
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                  <ExhibitionCard />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
