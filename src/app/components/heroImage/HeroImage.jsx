import Image from "next/image";
import Link from "next/link";

import style from "./HeroImage.module.css";

import heroImageHome from "../../assets/images/cdmx.svg";

export default function HeroImage(props) {
  return (
    <>
      <Image
        className={style.heroImages}
        src={heroImageHome}
        alt="cdmx"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
      <div className={style.information}>
        <p className={style.title}>{props.title}</p>
        <p className={style.description}>{props.description}</p>
        <Link
          className={style.btnContactUs}
          href="/#contact"
        >
          CONTÁCTANOS
        </Link>
      </div>
    </>
  );
}
