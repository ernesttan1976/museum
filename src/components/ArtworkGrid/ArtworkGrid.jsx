import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArtworksCard from '../ArtworksCard/ArtworksCard';

export default function ArtworkGrid() {
  return (
      <Grid className="CustomGrid" container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <ArtworksCard />
        </Grid>
        {/* <Grid item xs={12} sm={6} lg={3}>
          <ArtworksCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ArtworksCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ArtworksCard />
        </Grid> */}
        
      </Grid>
  );
}