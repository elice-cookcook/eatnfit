import { useEffect, useRef, useState } from "react";
import { ModalButton, ModalMenuWrapper, WrappedFooter } from "./styles";
import { BsPlusCircleFill } from "react-icons/bs";
import { FooterModal } from "../FooterModal";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutsige = (e: MouseEvent) => {
      if (
        open &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsige);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsige);
    };
  }, [open, modalRef]);

  return (
    <WrappedFooter>
      <ModalMenuWrapper ref={modalRef}>
        {open && <FooterModal setOpen={setOpen} />}
      </ModalMenuWrapper>
      <ModalButton
        ref={buttonRef}
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <BsPlusCircleFill size={"34px"} color=" #89cff3" />
      </ModalButton>
    </WrappedFooter>
  );
};

export default Footer;
