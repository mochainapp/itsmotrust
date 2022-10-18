import React, { useEffect } from "react";
import Style from "../styles/Header.module.css";
import Logo from "../images/logo.png";
import { useState } from "react";
import Image from "next/future/image";
import { FaBars, FaMoon, FaRegMoon, FaTimes } from "react-icons/fa";
function Header() {
  const [isShown, setIsShown] = useState(false);
  const [theme, settheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handelClick = () => {
    setIsShown((current) => !current);
  };

  const colorSwitcher = () => {
    if (theme === "dark-theme") {
      settheme("light-theme");
    } else {
      settheme("dark-theme");
    }
    console.log(theme);
  };

  return (
    <div>
      <div className={Style.header}>
        <div className={Style.logo}>
          <Image src={Logo} width={60} height={60} alt="Logo" />
        </div>
        <div className={Style.menu}>
          <ul>
            <li>
              <a href="https://motrust.app">Home</a>
            </li>
            <li>
              <a href="https://bsctrust.app/">BSCTrust</a>
            </li>
            <li>
              <a href="https://matictrust.app/">MaticTrust</a>
            </li>
            <li>
              <a href="https://www.avaxtrust.app/">AvaxTrust</a>
            </li>
            <li>
              <a href="https://www.ftmtrust.app/">FTMTrust</a>
            </li>
            <li>
              <a href="https://www.gatetrust.app/">GateTrust </a>
            </li>
            <li>
              <a href="https://mostart.app/">About us</a>
            </li>
            <li>
              <a href="https://www.mosupport.app/">Help</a>
            </li>
            <button className={Style.switch_mobile} onClick={colorSwitcher}>
              {theme === "light-theme" ? <FaMoon /> : <FaRegMoon />}
            </button>
          </ul>
        </div>
        <div className={Style.hamburger}>
          <a onClick={handelClick} className={Style.ham_button}>
            {isShown ? <FaTimes /> : <FaBars />}
          </a>
          <button className={Style.switch_mobile} onClick={colorSwitcher}>
            {theme === "light-theme" ? <FaMoon /> : <FaRegMoon />}
          </button>
        </div>
        {isShown && (
          <div className={Style.mobileMenu}>
            <ul>
              <a href="https://motrust.app">Home</a>
              <a href="https://bsctrust.app/">BSCTrust</a>
              <a href="https://matictrust.app/">MaticTrust</a>
              <a href="https://www.avaxtrust.app/">AvaxTrust</a>
              <a href="https://www.ftmtrust.app/">FTMTrust</a>
              <a href="https://www.gatetrust.app/">GateTrust </a>
              <a href="https://mostart.app/">About us</a>
              <a href="https://www.mosupport.app/">Help</a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
