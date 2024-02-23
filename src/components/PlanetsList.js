import React from 'react';
import PlanetCard from './PlanetCard';

const PlanetsList = ({ planets }) => {
  return (
    <div className="planets-list">
      {planets.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
    </div>
  );
};

export default PlanetsList;
