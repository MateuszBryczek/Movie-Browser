import { ReactComponent as Star } from "../../images/starVector.svg";
import { 
    PosterTile,
    Poster,
    Title,
    Rating,
    Votes,
 } from "./styled";

const MovieDetails = ({
    original_title,
    vote_average,
    vote_count
}) => { 

    return (
        <>
            <PosterTile>
                <Poster>
                    <Title>{original_title}</Title>
                    <Star />
                    <Rating>{vote_average.toFixed(1)}</Rating>/10
                    <Votes>{vote_count} votes</Votes>
                </Poster>
            </PosterTile>
        </>
    );

};

export default MovieDetails;