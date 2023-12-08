import { IconSpinerImg, IconWraper } from "./styled";
import iconSpiner from "./../../images/icon-spinner.svg"
const IconSpiner = () => (
  <IconWraper>
    <IconSpinerImg src={iconSpiner} alt="loading" />
  </IconWraper>
);

export default IconSpiner