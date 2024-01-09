import { useEffect, useRef, useState } from "react";
import {
  MenuButton,
  ModalButton,
  ModalMenuWrapper,
  WrappedFooter,
} from "./styles";
import { FooterModal } from "../FooterModal";
import { IoCalendarClearOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";

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
      <MenuButton>
        <IoCalendarClearOutline />
      </MenuButton>
      <ModalButton
        ref={buttonRef}
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <IoIosAddCircleOutline />
      </ModalButton>
      <MenuButton>
        <IoSettingsOutline />
      </MenuButton>
    </WrappedFooter>
  );
};

export default Footer;
