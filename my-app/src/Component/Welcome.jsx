import React from 'react';
import { Alert } from 'react-bootstrap';




const Welcome = () => {
    return(
    <div className="mt-4 text-center">
    <Alert variant="info">
      <h1>Welcome to the BookShop!</h1>
      <p>Explore and enjoy reading.</p>
    </Alert>
  </div>
    )
};



export default Welcome;