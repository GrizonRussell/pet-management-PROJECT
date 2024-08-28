import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const AddPet = () => {
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const speciesRes = await fetch('http://localhost/api/species.php');
      const breedsRes = await fetch('http://localhost/api/breeds.php');
      const ownersRes = await fetch('http://localhost/api/owners.php');

      setSpecies(await speciesRes.json());
      setBreeds(await breedsRes.json());
      setOwners(await ownersRes.json());
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      Name: event.target.petName.value,
      SpeciesID: event.target.species.value,
      BreedID: event.target.breed.value,
      DateOfBirth: event.target.dob.value,
      OwnerID: event.target.owner.value,
    };

    const response = await fetch('http://localhost/api/pets.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-5">Add New Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Pet Name</label>
          <input type="text" name="petName" className="mt-1 block w-full" placeholder="Enter pet name" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Species</label>
          <select name="species" className="mt-1 block w-full" required>
            {species.map(species => (
              <option key={species.SpeciesID} value={species.SpeciesID}>
                {species.SpeciesName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Breed</label>
          <select name="breed" className="mt-1 block w-full" required>
            {breeds.map(breed => (
              <option key={breed.BreedID} value={breed.BreedID}>
                {breed.BreedName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Owner</label>
          <select name="owner" className="mt-1 block w-full" required>
            {owners.map(owner => (
              <option key={owner.OwnerID} value={owner.OwnerID}>
                {owner.Name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input type="date" name="dob" className="mt-1 block w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700">Submit</button>
      </form>
    </Layout>
  );
};

export default AddPet;
