import { Image, Name } from "./styled";

const PeopleCard = ({ poster_path, name }) => {
    return (
        <>
            <Image src={poster_path}></Image>
            <Name>{name}</Name>
        </>
    );
};

export default PeopleCard;