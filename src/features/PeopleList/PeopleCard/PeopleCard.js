import {
  Description,
  Image,
  Name,
  PersonDetailsLink,
  Role,
  InsideWrapper,
} from "./styled";
import { IMG_URL_SMALL } from "../../getAPI/config";
import noPersonImage from "../../../images/noPersonImage.svg";

const PeopleCard = ({ id, profile_path, name, personRole }) => {
  return (
    <>
      <PersonDetailsLink to={`/personDetails/${id}`}>
        <InsideWrapper>
          <Image
            src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}
          ></Image>
          <Description>
            <Name>{name}</Name>
            <Role>{personRole && personRole}</Role>
          </Description>
        </InsideWrapper>
      </PersonDetailsLink>
    </>
  );
};

export default PeopleCard;
