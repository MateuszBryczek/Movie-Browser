import { IMG_URL_SMALL } from "../../config";
import {
    PersonTile,
    Image,
    Name,
    Section,
    Date,
    BirthPlace,
    Description,
    TileWrapper,
    InfoSecion,

} from "./styled"


const PersonDetailsCard = ({ profile_path, name, birthday, place_of_birth, biography }) => {

    return (
        <>
            <PersonTile>
            <TileWrapper>
            <Image src={IMG_URL_SMALL + profile_path}/>
            <Section>
            <Name>{name}</Name>
            
                Date of birth: <Date>{birthday}</Date>
                Place of birth: <BirthPlace>{place_of_birth}</BirthPlace>
            
            <Description>{biography}</Description>
            </Section>
            </TileWrapper>
            </PersonTile>
        </>
    );
};

export default PersonDetailsCard;