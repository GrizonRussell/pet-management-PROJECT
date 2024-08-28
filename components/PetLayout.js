import React from 'react';

const PetLayout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul className="flex space-x-4 bg-gray-800 p-4 text-white">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/add-pet" className="hover:underline">Add Pet</a></li>
            <li><a href="/view-pets" className="hover:underline">View Pets</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-6">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Pet Management</p>
      </footer>
    </div>
  );
};

export default PetLayout;
