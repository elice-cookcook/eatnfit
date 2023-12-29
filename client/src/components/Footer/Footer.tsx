import { useState } from "react";
import { ModalMenuWrapper, WrappedFooter } from "./styles";
import { BsPlusCircleFill } from "react-icons/bs";
import { FooterModal } from "../FooterModal";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <WrappedFooter>
      <ModalMenuWrapper>
        {open && <FooterModal setOpen={setOpen} />}
      </ModalMenuWrapper>
      <BsPlusCircleFill
        size={"34px"}
        color=" #89cff3"
        onClick={() => setOpen(!open)}
        className={open ? "open" : ""}
      />
    </WrappedFooter>
  );
};

export default Footer;
