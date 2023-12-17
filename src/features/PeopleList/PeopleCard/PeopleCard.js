import { 
    Description, 
    Image, 
    Name,
    PersonDetailsLink,
} from "./styled";
import { IMG_URL_SMALL } from "../../config";

const PeopleCard = ({
    id,
    profile_path, 
    name,
}) => {
    
        return (
        <>
        <PersonDetailsLink to={`/personDetails${id}`}>
            <Image src={IMG_URL_SMALL + profile_path}></Image>
            <Description>
                <Name>{name}</Name>
            </Description>
        </PersonDetailsLink>
        </>
    );
};

export default PeopleCard;