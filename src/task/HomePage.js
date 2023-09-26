// HomePage.js
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button component={Link} to="/next" variant="contained" color="primary">
        Go to Next Page
      </Button>
    </div>
  );
}

export default HomePage;
