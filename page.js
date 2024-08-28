import PetLayout from '../components/PetLayout';

const Home = () => {
  return (
    <PetLayout>
      <h1 className="text-4xl font-bold text-center my-5">Welcome to the Pet Management System</h1>
      <p className="text-center">Manage your pet data efficiently with our easy-to-use system.</p>
      <div className="text-center mt-5">
        <a href="/dashboard" className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-700">Go to Dashboard</a>
      </div>
    </PetLayout>
  );
};

export default Home;
