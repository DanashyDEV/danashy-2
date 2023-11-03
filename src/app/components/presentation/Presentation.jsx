import Image from "next/image";

import backgroundP from "@/app/assets/data.svg";

import style from "./Presentation.module.css";

export default function Presentation() {
  return (
    <>
      <div className={style.background}>
        <Image
          src={backgroundP}
          alt="presentacion"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className={style.mision}>
        Somos una empresa mexicana dedicada a satisfacer las necesidades de
        nuestros clientes ofreciendo nuestros servicios y productos con una
        excelente calidad proporcionado mejoras desarrollo e innovación
        comprometidos con la integridad entusiasmo y responsabilidad propia de
        nuestra empresa.
      </div>
      <div className={style.video1}>
        <video
          src="./vision.mp4"
          style={{ width: "100%", height: "100%" }}
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        />
      </div>
      <div className={style.vision}>
        Queremos consolidarnos como una de las mejores empresas a nivel nacional
        e internacional donde la ética profesional y los altos estándares de
        seguridad nos lleven de la mano a generar un grado máximo de
        satisfacción y confianza en cada uno de nuestros clientes, asociados y
        personal que hace posible la existencia y desarrollo de nuestra empresa.
      </div>
      <div className={style.video2}>
        <video
          src="./mision.mp4"
          style={{ width: "100%", height: "100%" }}
          autoPlay={true}
          muted={true}
          playsInline={true}
          loop={true}
        />
      </div>
    </>
  );
}
