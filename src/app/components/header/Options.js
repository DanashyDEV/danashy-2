import phone from "../../assets/phone.png";
import letter from "../../assets/letter.png";
import facebook from "../../assets/facebook.png";
// import instagram from "../../assets/instagram.png";

export const Menu = [
  {
    description: "INICIO",
    href: "/home",
    isSublist: false,
  },
  {
    description: "NOSOTROS",
    href: "/#about-us",
    isSublist: false,
  },
  {
    description: "SERVICIOS",
    href: "/#services",
    isSublist: false,
    subList: [
      {
        description: "TRANSPORTE VERTICAL",
        href: "/services/vertical-transport",
      },
      {
        description: "SISTEMAS DE MONITOREO",
        href: "/services/monitoring-systems",
      },
      {
        description: "AUTOMATIZACIÓN Y CONTROL",
        href: "/services/automation-and-control",
      },
    ],
  },
  {
    description: "CONTACTO",
    href: "/#contact",
    isSublist: false,
  },
];

export const ContactUs = [
  {
    src: phone,
    alt: "phone",
    href: "https://wa.me/5618374471?text=Quiero%20más%20información%20de%20sus%20servicios...%20",
    description: "56 1837 4471",
  },
  {
    src: letter,
    alt: "letter",
    href: "mailto:danashy.develop@gmail.com?subject=Solicito más información",
    description: "contacto@danashy.com.mx",
  },
];

export const SocialMedia = [
  {
    src: facebook,
    alt: "facebook",
    href: "https://www.facebook.com/danashyoficial",
  },
  // {
  //   src: instagram,
  //   alt: "instagram",
  //   href: "",
  // },
];
