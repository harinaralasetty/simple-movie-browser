import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';
import { searchMovies, fetchMovies } from './utils/movie_api';

function App() {
  const [searchResults, setSearchResults] = useState([])

  const handleSearch= async (searchTerm)=>{
    console.log("Search term:", searchTerm);
    try{
      if(searchTerm.trim()===''){
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

  return (
    <div className="App">
      <Header onSearch={handleSearch}/>
      <Body records={searchResults}/>
    </div>
  );
}

export default App;
