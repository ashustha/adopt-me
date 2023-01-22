import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div className='container'>
        <div className="row results">
        {!pets.length ? (
            <h2>No pets found</h2>
        ) : (
            pets.map((pet) => (
                <div className='col-md-4 mb-4'>
                    <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    location={`${pet.city},${pet.state}`}
                    images={pet.images}
                    key={pet.id}
                    id={pet.id}
                    />
                </div>
            ))
        )}
        </div>
    
    </div>
  );
};

export default Results;
