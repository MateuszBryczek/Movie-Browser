import {
  DangerImg,
  StyledHeader,
  ErrorContainer,
  StyledParagraph,
  StyledLink,
} from "./styled";
import danger from "../../images/danger.svg";

const ErrorPage = () => (
  <ErrorContainer>
    <DangerImg src={danger} alt="error"></DangerImg>
    <StyledHeader>Ooops! Something went wrong... </StyledHeader>
    <StyledParagraph>
      Please check your network connection and try again
    </StyledParagraph>
    <StyledLink to="/movielist">Back to home page</StyledLink>
  </ErrorContainer>
);

export default ErrorPage;
