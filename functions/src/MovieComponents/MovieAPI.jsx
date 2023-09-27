import React, { useEffect, useState } from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieAPI = () => {
  const [movies, setMovies] = useState([])
  const [inputValue, setInputValue] = useState("Batman")
  const [selectedType, setSelectedType] = useState("All")
    async function fetchAPI(inputValue, type){
      const typeParam = type === 'All' ? '' : `&type=${type}`
      
      try{
        
        const response = await fetch(`https://www.omdbapi.com/?apikey=28d44ad8&s=${inputValue}${typeParam}`)
        const data = await response.json();
        setMovies(data)
        console.log(movies)

      }catch(error){
        console.log(error)
      }
    }
    

  const handleInputChange = (e) => {
   setInputValue(e.target.value)  
  }
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value)
  }
  useEffect(() => {
    fetchAPI(inputValue, selectedType);
    console.log(inputValue);
    
  },[inputValue, selectedType]);
    
  return (
    <div>
        <Form onSearch={handleInputChange} onTypeChange={handleTypeChange} selectedType={selectedType}/>
        <MovieList movies={movies} selectedType={selectedType}/>
        
    </div>
  )
}

export default MovieAPI