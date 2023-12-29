import { 
    Description, 
    Image, 
    Name,
    PersonDetailsLink,
    Role,
} from "./styled";
import { IMG_URL_SMALL } from "../../config";
import noPersonImage from "../../../images/noPersonImage.svg"

const PeopleCard = ({
    id,
    profile_path, 
    name,
    personRole,
}) => {
    
        return (
        <>
        <PersonDetailsLink to={`/personDetails/${id}`}>
            <Image src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}></Image>
            <Description>
                <Name>{name}</Name>
                <Role>{personRole && <p>{personRole}</p>}</Role>
            </Description>
        </PersonDetailsLink>
        </>
    );
};

export default PeopleCard;