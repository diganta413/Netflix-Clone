import React,{useEffect,useState} from 'react'
import axios from './request'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"

const path="https://image.tmdb.org/t/p/w500";

function Row(props) {
    const [movies,sets]=useState([]);
    const [trailerurl,seturl]=useState("");

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    useEffect(() => {
        async function request() {
            const r = await axios.get(props.url);
            
            sets(r.data.results);
        }
        request();
    }, [props.url])

    const movie_clicked= (movie) => {
        if(trailerurl)
        {
            seturl("");
        }
        else
        {
            console.log(movie)   
            movieTrailer(movie?.original_title || movie?.original_name || movie?.name || "").then(
                (url)=>{
                    const urlParams=new URLSearchParams(new URL(url).search);
                    seturl(urlParams.get("v"));
                    
                }
            ).catch((error)=>{
                console.log(error);
            })
        }
    }

    return (
        <div className="main_row">
            <h2>{props.title}</h2>
            <div className={props.title=="Netflix Originals" ? "row_large" : "row"}>
                {movies.map((movie) =>(
                    <img onClick={() => movie_clicked(movie)} src={`${path}${props.title=="Netflix Originals" ? movie.poster_path:movie.backdrop_path}`} alt={movie.original_name} className="pic"/>
                ))}
            </div>
            {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
        </div>
    )
}

export default Row
