import footerPlus from "../../img/footerPlus.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <WrappedFooter>
      <img src={footerPlus} width="30" />
    </WrappedFooter>
  );
};

export default Footer;

const WrappedFooter = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;
