import { WrappedFooter } from "./styles";
import footerPlus from "../../img/footerPlus.png";

const Footer = () => {
  return (
    <WrappedFooter>
      <img src={footerPlus} width="30" />
    </WrappedFooter>
  );
};

export default Footer;
