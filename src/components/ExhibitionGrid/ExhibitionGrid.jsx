import * as React from "react";
import Grid from "@mui/material/Grid";
import ExhibitionCard from "../ExhibitionCard/ExhibitionCard";

export default function ExhibitionGrid() {

  return (
    <>
      <Grid
        className="CustomGrid"
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} lg={12}>
        <ExhibitionCard />
        </Grid>
        </Grid>
    </>
  );
}


