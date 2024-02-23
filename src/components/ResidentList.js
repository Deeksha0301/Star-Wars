import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const ResidentList = ({ residents }) => {
  const [residentData, setResidentData] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentRequests = residents.map((residentUrl) => fetch(residentUrl).then(res => res.json()));
      const residentDetails = await Promise.all(residentRequests);
      setResidentData(residentDetails);
    };

    fetchResidents();
  }, [residents]);

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Notable Residents:
      </Typography>
      {residentData.length > 0 ? (
        <List>
          {residentData.map((resident) => (
            <ListItem key={resident.name}>
              <ListItemText
                primary={resident.name}
                secondary={`${resident.height}, ${resident.mass}, ${resident.gender}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="textSecondary">
          None
        </Typography>
      )}
    </div>
  );
};

export default ResidentList;
