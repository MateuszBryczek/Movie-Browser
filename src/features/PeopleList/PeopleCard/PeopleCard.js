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
    personRole,
}) => {
    
        return (
        <>
        <PersonDetailsLink to={`/personDetails/${id}`}>
            <Image src={IMG_URL_SMALL + profile_path}></Image>
                <Name>{name}</Name>
                {personRole && <p>{personRole}</p>}
            <Description/>
        </PersonDetailsLink>
        </>
    );
};

export default PeopleCard;