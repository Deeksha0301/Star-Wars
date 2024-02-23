import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal } from '@mui/material';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="planet-card" elevation={5}>
      <CardContent>
        <Typography variant="h5" component="div" color="primary" gutterBottom>
          {planet.name}
        </Typography>
        <Typography className="row-info">
          <strong>Climate:</strong> {planet.climate}
        </Typography>
        <Typography className="row-info">
          <strong>Population:</strong> {planet.population}
        </Typography>
        <Typography className="row-info">
          <strong>Terrain:</strong> {planet.terrain}
        </Typography>
        <Button onClick={handleOpenModal} variant="contained" color="secondary" style={{ marginTop: '15px' }}>
          More Info
        </Button>
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div className="modal-content">
            <div className="left-side">
              <Typography variant="h4" color="primary" gutterBottom>
                {planet.name}
              </Typography>
              <div className="row-info">
                <Typography><strong>Climate:</strong> {planet.climate}</Typography>
                <Typography><strong>Population:</strong> {planet.population}</Typography>
                <Typography><strong>Terrain:</strong> {planet.terrain}</Typography>
              </div>
              <Button onClick={handleCloseModal} variant="contained" color="secondary" style={{ marginTop: '15px' }}>
                Close
              </Button>
            </div>
            <div className="right-side">
              <Typography variant="h5" gutterBottom>
                Notable Residents
              </Typography>
              <ResidentList residents={planet.residents} />
            </div>
          </div>
        </Modal>
      </CardContent>
    </Card>
  );
};

export default PlanetCard;
