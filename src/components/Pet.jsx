import {Link} from 'react-router-dom'
const Pet = ({ id, name, animal, breed, location, images }) => {
    return (
      <>
        <Link className="card p-4" to={`/details/${id}`}>
          <img src={images[0]}  height="100px" width="100px"/> <br />
          Name : {name} <br /> Animal : {animal} <br /> Breed : {breed} <br />{' '}
          City : {location} <br />
        </Link>
      </>
    );
  };
  export default Pet;
  
