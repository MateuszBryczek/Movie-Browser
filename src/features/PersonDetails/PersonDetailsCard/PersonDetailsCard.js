import { IMG_URL_SMALL } from "../../config";
import noPersonImage from "../../../images/noPersonImage.svg";
import {
  PersonTile,
  Image,
  Name,
  Section,
  Description,
  TileWrapper,
  InfoSecion,
  Label,
  AdditionalData,
} from "./styled";
import { useResize } from "../../resize";

const PersonDetailsCard = ({
  profile_path,
  name,
  birthday,
  place_of_birth,
  biography,
}) => {
  const resize = useResize();
  return (
    <>
      {resize() ? (
        <PersonTile>
          <TileWrapper>
            <Image
              src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}
            />
            <Section>
              <Name>{name}</Name>
              <InfoSecion>
                <Label>Date of birth:</Label>
                <AdditionalData>{birthday ? birthday : "-"}</AdditionalData>
              </InfoSecion>
              <InfoSecion>
                <Label>Place of birth:</Label>
                <AdditionalData>
                  {place_of_birth ? place_of_birth : "-"}
                </AdditionalData>
              </InfoSecion>
              <Description>{biography}</Description>
            </Section>
          </TileWrapper>
        </PersonTile>
      ) : (
        <PersonTile>
          <TileWrapper>
            <Image
              src={profile_path ? IMG_URL_SMALL + profile_path : noPersonImage}
            />
            <Section>
              <Name>{name}</Name>
              <InfoSecion>
                <Label>Date of birth:</Label>
                <AdditionalData>{birthday ? birthday : "-"}</AdditionalData>
              </InfoSecion>
              <InfoSecion>
                <Label>Place of birth:</Label>
                <AdditionalData>
                  {place_of_birth ? place_of_birth : "-"}
                </AdditionalData>
              </InfoSecion>
            </Section>
          </TileWrapper>
          <Description>{biography}</Description>
        </PersonTile>
      )}
    </>
  );
};

export default PersonDetailsCard;
