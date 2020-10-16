import React from 'react';

const MovieInfo = (props) =>{
    return(
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left"></i>
                <span style={{marginLeft: 10}}>Go Back</span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                {props.currentMovie.poster_path == null ? <img src={"http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} alt="Card image" style={{width: "100%", height: 360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{width: "100%", height: 360}}/>  }
                </div>
                <div className="col s12 m8">
                    <div className="info-container">
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date}</p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieInfo;