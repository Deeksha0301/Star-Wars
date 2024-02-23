import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';

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
      
      {residentData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Mass</TableCell>
                <TableCell>Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {residentData.map((resident) => (
                <TableRow key={resident.name}>
                  <TableCell>{resident.name}</TableCell>
                  <TableCell>{resident.height}</TableCell>
                  <TableCell>{resident.mass}</TableCell>
                  <TableCell>{resident.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="body2" color="textSecondary">
          None
        </Typography>
      )}
    </div>
  );
};

export default ResidentList;
