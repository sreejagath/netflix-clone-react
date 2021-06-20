import React,{useEffect, useState} from 'react'
import './Banner.css'
import {API_KEY,imgUrl} from '../../Costants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Banner() {
    const [movie, setMovie] = useState()
    const [urlId,setUrlId]=useState('')
    
   
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            var n= Math.floor(Math.random() * (19 + 1));
            setMovie(response.data.results[n])
            
        })
    }, [])
    console.log(movie);
    const handleMovie=()=>{
        const movieId= movie.id
        axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
                console.log(response.data.results[0]);
            }else{
                console.log('array empty');
            }
        })
    }
    return (
        <div style={{backgroundImage:`url(${movie ? imgUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className="content">
                <h1 className='title'> {movie ? movie.title :""} </h1>
                <div className="banner_buttons">
                    <button className="button"><p><i class="fab fa-youtube" onClick={()=>handleMovie()}></i> Play</p></button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie?movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
            
        </div> 
    )
}

export default Banner
