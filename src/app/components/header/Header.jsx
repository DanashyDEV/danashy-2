"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import useScreenSize from "../useScreenSize";

import style from "./Header.module.css";

import logotype from "../../assets/logotype.png";

import { Menu, ContactUs, SocialMedia } from "./Options";
import { Fade as Hamburger } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [styleMenu, setStyleMenu] = useState(style.collapseMenu);
  const width = useScreenSize();

  useEffect(() => {
    if (width >= 1200) {
      setStyleMenu(style.collapseMenu);
      setOpen(false);
    }
  }, [width]);

  function closeMenu() {
    setStyleMenu(style.collapseMenu);
    setOpen(!setOpen)
  }

  return (
    <header>
      <div className={`${style.logotype} ${style.center}`}>
        <Image
          priority
          className={style.danashy}
          src={logotype}
          alt="Danashy"
        />
        <div className={style.phrase}>
          <span className={style.title}>DANASHY</span>
          <span className={style.line}></span>
          <p className={style.subtitle}>SERVICIOS INTEGRALES</p>
        </div>
      </div>
      <div id="viewOptions" className={style.viewOptions}>
        <Hamburger
          distance="lg"
          rounded
          color="#000000"
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setStyleMenu(style.showMenu);
            } else {
              setStyleMenu(style.collapseMenu);
            }
          }}
        />
      </div>
      <div
        onClick={() => closeMenu()}
        className={`${style.generalInformation} ${styleMenu}`}
      >
        <nav className={style.navegationBox}>
          <ul className={`${style.navegation}`}>
            {Menu.map((option) => {
              if (!option.isSublist) {
                return (
                  <li
                    className={`${style.subList} ${style.center}`}
                    key={option.description}
                  >
                    <Link
                      className={`${style.center} ${style.link}`}
                      href={option.href}
                    >
                      {option.description}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    className={`${style.subList} ${style.center}`}
                    key={option.description}
                  >
                    <Link
                      className={`${style.link} ${style.center}`}
                      href={option.href}
                    >
                      {option.description}
                      <span className={style.up}></span>
                    </Link>
                    <ul className={style.subMenu}>
                      {option.subList.map((subOption) => {
                        return (
                          <li
                            className={`${style.subOptionsBox} ${style.center}`}
                            key={subOption.href}
                          >
                            <Link
                              className={`${style.link} ${style.linkNavegation} ${style.center}`}
                              href={subOption.href}
                            >
                              {subOption.description}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <div className={style.information}>
          <div className={style.data}>
            <ul className={`${style.contactUs} ${style.contactUsBox}`}>
              {ContactUs.map((option) => {
                return (
                  <li key={option.alt} className={style.contactUs}>
                    <Link
                      href={option.href}
                      target="_blanck"
                      className={`${style.contactUs} ${style.textContact}`}
                    >
                      <Image
                        className={style.icons}
                        src={option.src}
                        alt={option.alt}
                      />
                      &nbsp;&nbsp;
                      {option.description}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={`${style.contactUs} ${style.socialMedia}`}>
              {SocialMedia.map((option) => {
                return (
                  <li className={style.iconBox} key={option.alt}>
                    <Link href={option.href} target="_blanck">
                      <Image
                        className={style.icons}
                        src={option.src}
                        alt={option.alt}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
