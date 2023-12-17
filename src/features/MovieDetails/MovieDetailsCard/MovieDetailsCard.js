import { ReactComponent as Star } from "../../../images/starVector.svg";
import { POSTER_URL_BIG } from "../../config";
import { 
    PosterTile,
    Poster,
    Title,
    Rating,
    Votes,
    MovieTile,
 } from "./styled";

 const MovieDetailsCard = ({ backdrop_path, title, vote_average, vote_count }) => { 
    console.log("Props:", { backdrop_path, title, vote_average, vote_count });
    
    return (
        <>
            <PosterTile>
                <Poster src={ POSTER_URL_BIG + backdrop_path } />
                    <Title>{title}</Title>
                    <Star />
                    <Rating>{vote_average}</Rating>/10
                    <Votes>{vote_count} votes</Votes>
            </PosterTile>
            <MovieTile>
        
            </MovieTile>
        </>
    );

};

export default MovieDetailsCard;