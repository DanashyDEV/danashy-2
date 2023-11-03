import Image from "next/image";

import style from "./Sections.module.css";

import Link from "next/link";

export default function Sections({props}) {
  const { src, alt, title, list, href } = props
  return (
    <div className={`${style.card} ${style.center}`}>
      <div className={style.imageContainer}>
        <Image
          src={src}
          alt={alt}
          style={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <p className={style.subTitle}>{title}</p>
      <ul className={style.list}>
        {list.map((item) => {
          return (
            <li key={item.ind}>{item.li}</li>
          )
        })}
      </ul>
      {/* <button type="button" className={`${style.btnInfo} ${style.center}`}>
        <Link
          className={`${style.link} ${style.center}`}
          href={href}
        >
          MÁS INFORMACIÓN
        </Link>{" "}
      </button> */}
    </div>
  );
}
