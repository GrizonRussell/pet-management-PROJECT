import PetLayout from '../components/PetLayout';

const Dashboard = () => {
  return (
    <PetLayout>
      <h1 className="text-4xl font-bold text-center my-5">Dashboard</h1>
      <p className="text-center">Welcome to the Pet Management System.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <a href="/add-species" className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-700">Add Species</a>
        <a href="/add-breed" className="bg-green-500 text-white p-4 rounded-lg shadow-md hover:bg-green-700">Add Breed</a>
        <a href="/add-owner" className="bg-purple-500 text-white p-4 rounded-lg shadow-md hover:bg-purple-700">Add Owner</a>
        <a href="/add-pet" className="bg-yellow-500 text-white p-4 rounded-lg shadow-md hover:bg-yellow-700">Add Pet</a>
        <a href="/view-pets" className="bg-red-500 text-white p-4 rounded-lg shadow-md hover:bg-red-700">View Pets</a>
      </div>
    </PetLayout>
  );
};

export default Dashboard;
