import Image from "next/image";
import PhoneInput from "react-phone-input-2";

import cyborg from "@/app/assets/cyborg.gif";
import contactUs from "@/app/assets/images/contact-us.svg";

import style from "./Contact.module.css";
import "react-phone-input-2/lib/style.css";

export default function Contact() {
  return (
    <>
      <div className={style.imageContainer}>
        <Image
          src={contactUs}
          alt="contactUs"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className={style.container}>
        <div className={`${style.presentation}`}>
          <div className={`${style.title}`}>¿En qué te podemos servir?</div>
          <div className={`${style.description}`}>
            DANASHY ofrece un conjunto de servicios que permiten controlar,
            instalar, monitorear y mantener en óptimas condiciones las
            instalaciones de tu organización, somos la mejor opción, averigua
            como podemos ayudarte.
          </div>
          <div className={style.animation}>
            <Image
              src={cyborg}
              alt="cyborg"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <form
          className={`${style.form}`}
          action="https://formsubmit.co/danashy.develop@gmail.com"
          method="POST"
        >
          <div className={style.subTitle}>Contáctanos</div>
          <div className={`${style.boxInput}`}>
            <input
              className={`${style.input}`}
              type="text"
              name="name"
              maxLength={50}
              autoComplete="off"
              required
            />
            <div className={style.underline}></div>
            <label className={`${style.label}`}>Nombre</label>
          </div>
          <div className={`${style.boxInputPhone}`}>
            <PhoneInput
              placeholder=""
              inputClass={`${style.input}`}
              inputStyle={{ width: "89%", height: "100%", padding: "13px 0", marginLeft: "40px", background: "white" }}
              country={"mx"}
              name="phone"
              required= {true}
            />
            <label className={style.labelPhone}>Teléfono</label>
          </div>
          <div className={`${style.boxInput}`}>
            <input
              className={`${style.input}`}
              type="email"
              name="email"
              maxLength={50}
              autoComplete="off"
              required
            />
            <div className={style.underline}></div>
            <label className={`${style.label}`}>Correo electrónico</label>
          </div>
          <div className={`${style.boxInput}`}>
            <input
              className={`${style.input}`}
              type="text"
              name="company"
              maxLength={400}
              autoComplete="off"
              required
            />
            <label className={`${style.label}`}>Organización/Empresa</label>
          </div>
          <div className={`${style.boxInputText}`}>
            <textarea
              className={`${style.inputText}`}
              name="message"
              id=""
              rows={6}
              maxLength={400}
              autoComplete="off"
              required
            />
            <label className={`${style.labelText}`}>Mensaje</label>
          </div>
          <button className={`${style.btnSend}`} type="submit">
            Envíar
          </button>
        </form>
      </div>
    </>
  );
}
