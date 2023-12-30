import { 
    Description, 
    Image, 
    Name,
    PersonDetailsLink,
    Role,
} from "./styled";
import { IMG_URL_SMALL } from "../../config";

const PeopleCard = ({
    id,
    profile_path, 
    name,
    personRole,
}) => {
    
        return (
        <>
        <PersonDetailsLink to={`/personDetails/${id}`}>
            <Image src={IMG_URL_SMALL + profile_path}></Image>
            <Description>
                <Name>{name}</Name>
                <Role>{personRole && <p>{personRole}</p>}</Role>
            </Description>
        </PersonDetailsLink>
        </>
    );
};

export default PeopleCard;