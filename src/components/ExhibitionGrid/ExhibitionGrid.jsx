import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomCard from "../CustomCard/CustomCard";
import { useEffect, useState } from "react";

export default function ExhibitionGrid() {
  const [exhibition, setExhibition] = useState([]);

  useEffect(() => {
    fetch("/api/exhibitions")
      .then((response) => response.json())
      .then((data) => setExhibition(data));
  }, []);

  return (
    <>
      <p>{JSON.stringify(exhibition)}</p>
  <h1>{JSON.stringify(exhibition[0]?.exhibitionLocation.address)}</h1>
      <Grid className="CustomGrid" container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CustomCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CustomCard />
        </Grid>
      </Grid>
    </>
  );
}
