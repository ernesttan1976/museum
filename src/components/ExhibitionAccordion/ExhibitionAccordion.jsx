import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ExhibitionCardB1 from "../ExhibitionCard/ExhibitionCardB1";
import ExhibitionCardL1 from "../ExhibitionCard/ExhibitionCardL1";
import ExhibitionCardL2 from "../ExhibitionCard/ExhibitionCardL2";
import ExhibitionCardL3 from "../ExhibitionCard/ExhibitionCardL3";
import ExhibitionCardL4 from "../ExhibitionCard/ExhibitionCardL4";
import ExhibitionCardL5 from "../ExhibitionCard/ExhibitionCardL5";
import ExhibitionCardL6 from "../ExhibitionCard/ExhibitionCardL6";
import "./ExhibitionAccordion.css";

export default function ExhibitionAccordion() {
  return (
    <>
      <br></br>
      <Typography variant="h3">Exhibitions</Typography>
      <br></br>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Basement 1</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardB1 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 1</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL1 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 2</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL2 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 3</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL3 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 4</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL4 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 5</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL5 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className="exhibitionAccordionContainer">
        <Accordion className="ExhibitionAccordion">
          <AccordionSummary
            className="AccordionSummary"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Level 6</Typography>
          </AccordionSummary>
          <AccordionDetails className="AccordionDetails">
            <Grid container className="ExhibitionGridContainer" spacing={2}>
              <ExhibitionCardL6 item xs={12} md={6} lg={3} />
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
