import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); 
  const getMovies = async() => {

    const json = await (
      await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
                                       
    //                                  ||
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // );
    // const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(()=> {
    getMovies()
  }, []);
  
  // useEffect(()=> {  ==== 보편적으로 then을 사용하지않고 async 사용  ====
  //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
  //   .then((response)=> response.json())
  //   .then((json)=> setMovies(json.data.movies));
  //   setLoading(false);
  // }, []);
  
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
               <h2>{movie.title}</h2>
               <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(genre => 
                <li key={genre}>{genre}</li>)
                }
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
