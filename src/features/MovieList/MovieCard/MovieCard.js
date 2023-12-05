import { Poster, Title, Date, Tags, Rating, Votes, Description, } from "./styled";
import { IMG_URL_500 } from "../../config";
import GenreList from "../Genras/GenresList";

const MovieCard = ({ original_title, release_date, genre_ids, vote_average, vote_count, poster_path }) => {

    return (
        <>
            <Poster src={IMG_URL_500+poster_path} ></Poster>
            <Description>
                <Title>{original_title}</Title>
                <Date>{release_date}</Date>
            </Description>
            <Tags><GenreList genreIds={genre_ids} /></Tags>
            <Rating>{vote_average}</Rating>
            <Votes>{vote_count} votes</Votes>
        </>
    );
};

export default MovieCard;