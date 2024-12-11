import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
   const [loading, setLoading] = useState(false);
   const [movieDetail, setMovieDetail] = useState([]);

   const {id} = useParams();
   const getMovie = async () => {
      const json = await(
         await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
         )  
       ).json();
       setMovieDetail(json.data.movie)
       setLoading(false);
     
   }

   useEffect(()=>{
      getMovie();
   }, [])
   console.log(movieDetail.genres)
   return (
      <div>
         {loading ? loading : 
         <div>
            <img src={movieDetail.large_cover_image} alt={movieDetail.title}></img>
            <h1>{movieDetail.title}</h1>
            <ul>
               {movieDetail.genres?.map((genre) => (
               <li key={genre}>{genre}</li>
               ))}
            </ul>

         </div>
         }
      </div>
   ) 
}

export default Detail;