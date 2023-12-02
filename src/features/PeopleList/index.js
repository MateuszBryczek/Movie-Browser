
import { TilesWrapper } from "./styled";
import { PeopleTile } from "./styled";
import Header from "../../common/Header";

const PeopleList = ({Header}) => (
    //wrzucenie z common nie działa, w app działa
    <TilesWrapper>
    <PeopleTile/>
    <PeopleTile/>
    <PeopleTile/>


    </TilesWrapper>
);

export default PeopleList;