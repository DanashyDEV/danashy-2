import ascensor from "../assets/ascensor.gif";
import control from "../assets/control.gif";
import monitor from "../assets/monitor.gif"

export const Services = [
  { ind: 0, li: "VENTA DE REFACCIONES" },
  { ind: 1, li: "MANTENIMIENTO PREVENTIVO" },
  { ind: 2, li: "MODERNIZACIÓN EN TRANSPORTE VERTICAL" },
  { ind: 3, li: "REPARACIÓN DE TARJETAS ELECTRÓNICAS" },
  { ind: 4, li: "SISTEMAS DE SEGURIDAD CCTV" },
  { ind: 5, li: "SISTEMAS DE MONITOREO" },
  { ind: 6, li: "TABLEROS DE CONTROL" },
  { ind: 7, li: "SOLUCIONES EN SISTEMAS DE AUTOMATIZACIÓN Y CONTROL" },
];

export const InfoServices = [
  {
    src: ascensor,
    alt: "escaleras-mecanicas",
    title: "TRANSPORTE VERTICAL",
    list: [
      { ind: 0, li: "Reparación de equipos" },
      { ind: 1, li: "Mantenimientos preventivos y correctivos" },
      { ind: 2, li: "Modernización de tableros de control" },
      { ind: 3, li: "Inspección de equipos" },
      { ind: 4, li: "Venta de refacciones" },
      { ind: 5, li: "Reparación de tarjetas de control" },
      { ind: 6, li: "Reparación de motores y reductores" },
      { ind: 7, li: "Estilización exterior de equipos" },
    ],
    href: "www.youtube.com",
  },
  {
    src: monitor,
    alt: "monitoreo",
    title: "SISTEMAS DE MONITOREO",
    list: [
      { ind: 0, li: "Historial y reportes" },
      { ind: 1, li: "Alertas y notificaciones" },
      { ind: 2, li: "Integración con sistemas existentes" },
      { ind: 3, li: "Adquisición de datos" },
      { ind: 4, li: "Análisis Predictivo" },
      { ind: 5, li: "Software a la medida" },
      { ind: 6, li: "Seguridad cibernética" },
      { ind: 7, li: "Atención de averías" },
    ],
    href: "www.youtube.com",
  },
  {
    src: control,
    alt: "automatizacion",
    title: "AUTOMATIZACIÓN Y CONTROL",
    list: [
      { ind: 0, li: "Modernización de tableros de control" },
      { ind: 1, li: "Programación de PLC's" },
      { ind: 2, li: "Mantenimiento eléctrico" },
      { ind: 3, li: "Desarrollo de sistemas de control" },
      { ind: 4, li: "Optimización y eficiencia energética" },
      { ind: 5, li: "Implementación de sistemas de seguridad" },
      { ind: 6, li: "Implementación de Internet de las Cosas" },
      { ind: 7, li: "Automatización de procesos" },
    ],
    href: "www.youtube.com",
  },
]
