import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState, useEffect } from 'react';
import { searchMovies, fetchMovies } from './utils/movie_api';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch= async (searchTerm)=>{
    console.log("Search term:", searchTerm);
    try{
      if(searchTerm.trim()===''){
        console.log("hit here")
        const movies = await fetchMovies() ;
        setSearchResults(movies) ;
      } else {
        const search_movies = await searchMovies(searchTerm);
        setSearchResults(search_movies);
      }
    } catch(error){
      console.error("Something failed:", error);
    }
  }

  useEffect(() => {
    const fetchAndSetMovies = async () => {
      try {
        const movies = await fetchMovies();
        setSearchResults(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
      fetchAndSetMovies();
    } ,[])
  
  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch}/>
      <Body searchResults={searchResults}/>
    </div>
  );
}

export default App;
