import { useState } from "react";
import { ModalMenuWrapper, WrappedFooter } from "./styles";
import { BsPlusCircle } from "react-icons/bs";
import { FooterModal } from "../FooterModal";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <WrappedFooter>
      <ModalMenuWrapper>{open && <FooterModal />}</ModalMenuWrapper>
      <BsPlusCircle
        size={"40px"}
        onClick={() => setOpen(!open)}
        className={open ? "open" : ""}
      />
    </WrappedFooter>
  );
};

export default Footer;
