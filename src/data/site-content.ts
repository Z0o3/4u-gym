const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteContent = {
  name: "4U Wellness Gym",
  description:
    "Gimnasio en Celaya con zona de fuerza, cardio y clases de combate.",
  url: siteUrl,
  location: {
    street: "Eje Nor-Poniente Manuel J. Clouthier 325, Col. La Capilla",
    city: "Celaya",
    state: "Guanajuato",
    postalCode: "38013",
    fullAddress:
      "Eje Nor-Poniente Manuel J. Clouthier 325, Col. La Capilla, C.P. 38013, Celaya, Guanajuato.",
    reference: "Frente al Hospital San José, al lado de PIRMA.",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=4U+WELLNESS+GYM+Celaya+Guanajuato",
  },
  social: {
    facebook:
      "https://www.facebook.com/profile.php?id=61559026002382&ref=NONE_xav_ig_profile_page_web#",
    instagram: "https://www.instagram.com/4uwellness_gym/",
  },
  phone: "",
  whatsapp: "",
  whatsappMessage: "",
  businessHours: [
    { days: "Lunes a viernes", hours: "05:00 - 23:00" },
    { days: "Sábado", hours: "06:00 - 17:00" },
    { days: "Domingo", hours: "06:00 - 16:00" },
  ],
  pricing: [
    { name: "General", price: "$390", detail: "Mensualidad" },
    { name: "Estudiante", price: "$370", detail: "Mensualidad" },
    { name: "Grupal", price: "$370", detail: "Mensualidad" },
    { name: "Visita", price: "$45", detail: "Acceso por día" },
    { name: "Inscripción", price: "$50", detail: "Pago de registro" },
  ],
  combatClasses: {
    names: ["Box", "Muay Thai", "MMA", "Kick boxing"],
    intro: "Atrévete a tomar tu primera clase de combate.",
    requirements: [
      "Llena tu registro en recepción.",
      "Asiste con vendas y ropa deportiva.",
      "Tu primera clase es gratis si eres socio inscrito.",
    ],
    schedule: [
      { day: "Sábado", sessions: ["14:00 - 15:00", "15:30 - 16:30"] },
      { day: "Domingo", sessions: ["13:00 - 14:00", "14:30 - 15:30"] },
    ],
    note: "Cupo limitado",
  },
  services: [
    "Área de pesas",
    "Área de boxeo",
    "Área de cardio",
    "Regaderas",
    "Abierto todos los días",
    "Aire acondicionado",
    "Horario amplio",
    "Entrenadores certificados durante todo el día",
    "Entrenamiento personalizado",
    "Estacionamiento amplio",
    "Venta de suplementación",
    "Servicio de nutrióloga",
    "Venta de accesorios deportivos",
  ],
  atmosphere: "El mejor ambiente",
  benefits: [
    "Equipo para fuerza y cardio",
    "Horario amplio de lunes a domingo",
    "Clases de combate en fin de semana",
  ],
  reviews: [],
  team: [],
  promotions: [],
  quickFacts: [
    { value: "Box, Muay Thai y MMA", note: "También kick boxing" },
    { value: "Abierto toda la semana", note: "Desde las 05:00 entre semana" },
    { value: "Visita $45", note: "Inscripción $50" },
  ],
  gallery: [
    {
      src: "/images/gallery/zona-peso-libre.jpg",
      alt: "Zona de peso libre y máquinas de 4U Wellness Gym",
      caption: "Zona de peso libre",
    },
    {
      src: "/images/gallery/piso-entrenamiento.jpg",
      alt: "Piso de entrenamiento con máquinas y espejos",
      caption: "Piso de entrenamiento",
    },
    {
      src: "/images/gallery/maquina-extension-pierna.jpg",
      alt: "Máquina para entrenamiento de pierna",
      caption: "Equipo para pierna",
    },
    {
      src: "/images/gallery/maquinas-piso-superior.jpg",
      alt: "Máquinas en el piso superior del gimnasio",
      caption: "Área de máquinas",
    },
    {
      src: "/images/gallery/prensa-piernas.jpg",
      alt: "Prensa de piernas dentro del gimnasio",
      caption: "Prensa de piernas",
    },
    {
      src: "/images/gallery/escaladoras-cardio.jpg",
      alt: "Escaladoras para entrenamiento cardiovascular",
      caption: "Cardio de alto nivel",
    },
    {
      src: "/images/gallery/elipticas.jpg",
      alt: "Fila de máquinas elípticas",
      caption: "Área cardiovascular",
    },
    {
      src: "/images/gallery/mural-cardio.jpg",
      alt: "Máquinas de cardio frente al mural de 4U Wellness Gym",
      caption: "Cardio con identidad 4U",
    },
    {
      src: "/images/gallery/prensa-discos.jpg",
      alt: "Prensa de discos en la zona de fuerza",
      caption: "Equipo de fuerza",
    },
    {
      src: "/images/gallery/smith-machine.jpg",
      alt: "Máquina Smith con banco ajustable",
      caption: "Zona de peso guiado",
    },
    {
      src: "/images/gallery/zona-fuerza.jpg",
      alt: "Equipos de fuerza con iluminación verde",
      caption: "Entrenamiento de fuerza",
    },
    {
      src: "/images/gallery/zona-cristal.jpg",
      alt: "Máquinas de fuerza junto al ventanal",
      caption: "Más espacios para entrenar",
    },
    {
      src: "/images/gallery/entrenamiento-hip-thrust.jpg",
      alt: "Socia realizando un ejercicio de fuerza",
      caption: "Entrena a tu ritmo",
    },
    {
      src: "/images/gallery/comunidad-4u.jpg",
      alt: "Integrantes de la comunidad 4U Wellness Gym",
      caption: "Comunidad 4U",
    },
    {
      src: "/images/gallery/atletas-4u.jpg",
      alt: "Dos atletas dentro de 4U Wellness Gym",
      caption: "Tu mejor versión",
    },
    {
      src: "/images/gallery/fachada.jpg",
      alt: "Fachada iluminada de 4U Wellness Gym",
      caption: "Fachada 4U Wellness Gym",
    },
    {
      src: "/images/gallery/regaderas.jpg",
      alt: "Área de regaderas del gimnasio",
      caption: "Área de regaderas",
    },
    {
      src: "/images/gallery/suplementos.jpg",
      alt: "Área de bebidas y suplementos",
      caption: "Bebidas y suplementos",
    },
    {
      src: "/images/gallery/horarios-publicados.jpg",
      alt: "Publicación de 4U Wellness Gym con los horarios de apertura",
      caption: "Horarios publicados",
    },
    {
      src: "/images/gallery/promocion-anterior.jpg",
      alt: "Publicación promocional anterior de 4U Wellness Gym",
      caption: "Promoción anterior; consulta vigencia en recepción",
    },
  ],
  faqs: [
    {
      question: "¿Cuánto cuesta entrenar en 4U Wellness Gym?",
      answer:
        "La mensualidad general cuesta $390; estudiante y grupal, $370. La visita cuesta $45 y la inscripción $50. Consulta condiciones y vigencia en recepción.",
    },
    {
      question: "¿Qué clases de combate hay?",
      answer:
        "Hay clases de box, Muay Thai, MMA y kick boxing durante el fin de semana. El cupo es limitado.",
    },
    {
      question: "¿La primera clase es gratis?",
      answer:
        "Sí, para socios inscritos. Regístrate en recepción y asiste con vendas y ropa deportiva.",
    },
    {
      question: "¿Cuál es el horario del gimnasio?",
      answer:
        "Lunes a viernes de 05:00 a 23:00, sábado de 06:00 a 17:00 y domingo de 06:00 a 16:00. Los días festivos pueden tener ajustes.",
    },
    {
      question: "¿Dónde se encuentra?",
      answer:
        "En Eje Nor-Poniente Manuel J. Clouthier 325, colonia La Capilla, C.P. 38013, Celaya, Guanajuato. Frente al Hospital San José y al lado de PIRMA.",
    },
  ],
  assets: {
    logo: "",
    heroImage: "/images/gallery/comunidad-4u.jpg",
    locationImage: "/images/gallery/fachada.jpg",
  },
  seo: {
    title: "Gimnasio en Celaya | 4U Wellness Gym",
    description:
      "Conoce 4U Wellness Gym en Celaya: mensualidades, clases de box, Muay Thai, MMA y kick boxing, instalaciones, horarios y ubicación.",
  },
} as const;
