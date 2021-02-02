import React,{ useEffect,useState } from 'react'
import axios from "./request";
import "./Banner.css";

const path="https://image.tmdb.org/t/p/w500";

function Banner(props) {
    const [movies,sets]=useState([]);

    useEffect(() => {
        async function request() {
          const r=await axios.get(props.url);
          var rand=r.data.results[Math.floor(Math.random() * (r.data.results.length))];
          console.log(rand);
          sets(rand);
        }
        request();
    }, [props.url])
    
    return (
        <header className="banner"
        style={{
            backgroundSize:"100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundImage:`url(${path}${movies.backdrop_path})`,
            
        }}>
            <div className="banner_content">
                <h1>{movies.name}</h1>
                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <p>{movies.overview}</p>
            
            

            </div>
            <div className="banner_down"/>
        </header>
    )
}


export default Banner
