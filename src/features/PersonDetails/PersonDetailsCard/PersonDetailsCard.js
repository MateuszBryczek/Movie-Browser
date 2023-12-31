import { IMG_URL_SMALL } from "../../config";
import noPersonImage from "../../../images/noPersonImage.svg";
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
} from "./styled";

const PersonDetailsCard = ({
  profile_path,
  name,
  birthday,
  place_of_birth,
  biography,
}) => {
  return (
    <>
      <PersonTile>
        <TileWrapper>
          <Image
            src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}
          />
          <Section>
            <Name>{name}</Name>
            <InfoSecion>
              Date of birth:
              <Date>{birthday ? birthday : "-"}</Date>
            </InfoSecion>
            <InfoSecion>
              Place of birth:
              <BirthPlace>{place_of_birth ? place_of_birth : "-"}</BirthPlace>
            </InfoSecion>
            <Description>{biography}</Description>
          </Section>
        </TileWrapper>
      </PersonTile>
    </>
  );
};

export default PersonDetailsCard;
