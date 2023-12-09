import { Description, Image, Name } from "./styled";
import { IMG_URL_SMALL } from "../../config";

const PeopleCard = ({
    id,
    profile_path, 
    name,
}) => {
    
        return (
        <>
            <Image src={IMG_URL_SMALL + profile_path}></Image>
            <Description>
                <Name>{name}</Name>
            </Description>
        </>
    );
};

export default PeopleCard;