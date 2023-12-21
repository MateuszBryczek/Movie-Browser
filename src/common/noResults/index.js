import noResults from "../../images/noResults.svg";
import { NoResultsImg, NoResultsWrapper } from "./styled";


const NoResults = () => (
  <NoResultsWrapper>
    <NoResultsImg src={noResults} alt="" />
  </NoResultsWrapper>
);

export default NoResults;
