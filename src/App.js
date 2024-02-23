import React, { useState, useEffect } from 'react';
import PlanetsList from './components/PlanetsList';
import PaginationControls from './components/PaginationControls';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPlanets();
  }, [currentPage]);

  const fetchPlanets = async () => {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${currentPage}&format=json`);
    const data = await response.json();

    setPlanets(data.results);
    setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 planets per page
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app">
      <img className="logo" src="https://yt3.googleusercontent.com/1-DNvHqrqXCIrMMfHDu1kWUUM4mkOSBERS_9gj_W7r3ZNVnCzK9UW11hlka-ezUceQHSOIK73ps=s900-c-k-c0x00ffffff-no-rj" alt="Logo" />
      <h1>Star Wars Planets Directory</h1>
      <PlanetsList planets={planets} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
