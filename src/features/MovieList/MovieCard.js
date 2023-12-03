import { Poster, Title, Date, Tags, Rating, Votes, Description, } from "./styled";
import { IMG_URL_500 } from "../config";

const MovieCard = ({ original_title, release_date, genres, vote_average, vote_count, poster_path }) => {
    return (
        <>
            <Poster src={IMG_URL_500+poster_path} ></Poster>
            <Description>
                <Title>{original_title}</Title>
                <Date>{release_date}</Date>
            </Description>
            <Tags>{genres}</Tags>
            <Rating>{vote_average}</Rating>
            <Votes>{vote_count} votes</Votes>
        </>
    );
};

export default MovieCard;