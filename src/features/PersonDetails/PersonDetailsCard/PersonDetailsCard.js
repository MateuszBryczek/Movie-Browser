import { IMG_URL_SMALL } from "../../config";
import {
    Image,
    Name,
    Section,
} from "./styled"


const PersonDetailsCard = ({ profile_path, name, }) => {

    return (
        <>
            <Image src={IMG_URL_SMALL + profile_path}/>
            <Name>{name}</Name>
            <Section>
                
            </Section>
        </>
    );
};

export default PersonDetailsCard;