import Layout from '../components/Layout';

const ViewPets = () => {
  const pets = [
    { owner: 'John Doe', petName: 'Rex', species: 'Dog', breed: 'Labrador', dob: '2020-01-01' },
    { owner: 'Jane Smith', petName: 'Mittens', species: 'Cat', breed: 'Siamese', dob: '2019-05-12' },
    // Add more pets for testing...
  ];

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-5">View Pets</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 p-3 text-left">Owner's Name</th>
            <th className="w-1/5 p-3 text-left">Pet Name</th>
            <th className="w-1/5 p-3 text-left">Species</th>
            <th className="w-1/5 p-3 text-left">Breed</th>
            <th className="w-1/5 p-3 text-left">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index} className="bg-gray-100 border-b">
              <td className="p-3">{pet.owner}</td>
              <td className="p-3">{pet.petName}</td>
              <td className="p-3">{pet.species}</td>
              <td className="p-3">{pet.breed}</td>
              <td className="p-3">{pet.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default ViewPets;
