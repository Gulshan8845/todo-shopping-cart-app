import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="welcome-heading">Welcome to our To-Do List and Shopping Cart App!</h2>
      <p className="app-description">
        This is a simple React application that serves as a To-Do List and Shopping Cart.
      </p>
      <style>
        {`
        .home-container {
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }

        .welcome-heading {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .app-description {
          font-size: 16px;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
