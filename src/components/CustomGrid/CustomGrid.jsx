import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomCard from '../CustomCard/CustomCard';

export default function CustomGrid() {
  return (
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
  );
}