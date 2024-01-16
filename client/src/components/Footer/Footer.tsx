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
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes/Route";
import { getUserCookie } from "../../utils";
import { message } from "antd";

const Footer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserCookie()) {
      navigate(ROUTE.LOGIN_PAGE.link);
      message.error("로그인이 필요합니다.");
    }
  }, [navigate]);

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

  const linkToMainPage = () => {
    document.getElementById("root")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(ROUTE.MAIN_PAGE.link);
  };

  const linkToSettingPage = () => {
    document.getElementById("root")?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(ROUTE.SETTING_PAGE.link);
  };

  return (
    <WrappedFooter>
      <ModalMenuWrapper ref={modalRef}>
        {open && <FooterModal setOpen={setOpen} />}
      </ModalMenuWrapper>
      <MenuButton onClick={linkToMainPage}>
        <IoCalendarClearOutline />
      </MenuButton>
      <ModalButton
        ref={buttonRef}
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      >
        <IoIosAddCircleOutline />
      </ModalButton>
      <MenuButton onClick={linkToSettingPage}>
        <IoSettingsOutline />
      </MenuButton>
    </WrappedFooter>
  );
};

export default Footer;
