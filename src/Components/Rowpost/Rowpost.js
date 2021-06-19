import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imgUrl,API_KEY} from '../../Costants/constants'

function Rowpost(props) {
    const [movies,setMovies]= useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            //alert('Network Error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('array empty');
            }
        })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <div className='p-image'>
                <img  className={props.isSmall ? 'smallposter': "poster"} src={`${imgUrl+obj.backdrop_path}`} alt="Poster" />
                    <div className='image-overlay'>
                    <div className="you-icon"><i onClick={()=>handleMovie(obj.id)} class="fab fa-youtube fa-3x"></i></div>
                    <div className="play"><button className='playbtn'> Play </button> </div>
                    </div>
                    </div>
)}
                </div>


               {urlId && <Youtube opts={opts} videoId={urlId.key}/> }
               </div>

    )
}

export default Rowpost
