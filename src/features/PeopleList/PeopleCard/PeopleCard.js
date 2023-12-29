import { Image, Name } from "./styled";
import { IMG_URL_SMALL } from "../../config";
import noPersonImage from "../../../images/noPersonImage.svg"

const PeopleCard = ({
    id,
    profile_path, 
    name,
}) => {
    
        return (
        <>
            <Image src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}></Image>

                <Name>{name}</Name>

        </>
    );
};

export default PeopleCard;