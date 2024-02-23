import React from 'react';
import { Button } from '@mui/material';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-controls">
      <Button
        variant="contained"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <Button
        variant="contained"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
