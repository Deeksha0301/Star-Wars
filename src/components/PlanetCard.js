import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  return (
    <Card className="planet-card">
      <CardContent>
        <Typography variant="h5" component="div">
          {planet.name}
        </Typography>
        <Typography color="text.secondary">
          Climate: {planet.climate}
        </Typography>
        <Typography color="text.secondary">
          Population: {planet.population}
        </Typography>
        <Typography color="text.secondary">
          Terrain: {planet.terrain}
        </Typography>
        <ResidentList residents={planet.residents} />
      </CardContent>
    </Card>
  );
};

export default PlanetCard;
