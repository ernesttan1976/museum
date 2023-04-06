import * as React from "react";
import Grid from "@mui/material/Grid";
import ExhibitionCard from "../ExhibitionCard/ExhibitionCard";
import "./ExhibitionGrid.css";

export default function ExhibitionGrid() {
  return (
    <>
      <Grid
        className="ExhibitionGridContainer"
        container
        spacing={2}
      >
        <Grid className="ExhibitionGridItem" item xs={12} sm={6} lg={3}>
          <ExhibitionCard/>
        </Grid>
      </Grid>
    </>
  );
}
