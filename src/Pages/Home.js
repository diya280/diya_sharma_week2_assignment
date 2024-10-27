import React from 'react';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: 'url(images/travel1.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  return (
    <div style={backgroundStyle}>
        <div className="text-center" style={{ marginBottom: '26em' }}>
        <h1 className='text-dark'>Welcome to the Travel Journal</h1>
        <p className='text-dark'>Keep track of your travel experiences and memories.</p>
      </div>
    </div>
  );
};

export default Home;
