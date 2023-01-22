import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../customHooks/fetchSearch";
import Results from "../Components/Results";
import useBreedList from "./../customHooks/useBreedList";
const ANIMALS = ["dog", "bird", "cat", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds, status] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <>
      <div className="container">
        <h2>Search Params</h2>
        <form
          className="mb-4"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const obj = {
              animal: formData.get("animal") ?? "",
              breed: formData.get("breed") ?? "",
              location: formData.get("location") ?? "",
            };
            setRequestParams(obj);
          }}
        >
          <div className="mb-3">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="animal">Animal</label>
            <select
              name="animal"
              value={animal}
              id="animal"
              className="form-control"
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option> Select Animal </option>
              {ANIMALS?.map((animal) => (
                <option>{animal} </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="breed">Bread</label> <span>({status})</span>
            <select
              name="breeds"
              disabled={!breeds.length}
              className="form-control"
              id="breed"
            >
              <option> Select breed </option>
              {breeds?.map((breed) => (
                <option>{breed} </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Results pets={pets} />
    </>
  );
};

export default SearchParams;
