import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import fetchPet from '../customHooks/fetchPet'

const Details = () => {
  const {id} =useParams();
  const results = useQuery(['details', id], fetchPet)

  if(results.isLoading){
    return(
      <h2>Loading</h2>
    )
  }
  const pets = results.data.pets[0]
  return (
    <div>
      <h1>{pets.name}</h1>
      <h3>{pets.animal},{pets.breed}--{pets.city}</h3>
      <p>{pets.description}</p>
    </div>
  )
}

export default Details
