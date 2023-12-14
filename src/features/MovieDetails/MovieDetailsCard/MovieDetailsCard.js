import { ReactComponent as Star } from "../../../images/starVector.svg";
import { POSTER_URL_BIG } from "../../config";
import { 
    PosterTile,
    Poster,
    Title,
    Rating,
    Votes,
 } from "./styled";

const MovieDetailsCard = ({ selectedMovie }) => { 
    
    return (
        <>
            <PosterTile>
                <Poster src={ POSTER_URL_BIG + `${selectedMovie.backdrop_path}` } />
                    <Title>{selectedMovie.title}</Title>
                    <Star />
                    <Rating>{selectedMovie.vote_average}</Rating>/10
                    <Votes>{selectedMovie.vote_count} votes</Votes>
            </PosterTile>
        </>
    );

};

export default MovieDetailsCard;