import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
  Github,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/benja85a",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/benjamin-rivas/",
  } /* ,
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  }, */,
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Frontend Junior",
    subtitle: "Ministerio de Salud",
    description:
      "Diseñé e implementé interfaces interactivas con ReactJS, VueJS y NextJS, mejorando la usabilidad y accesibilidad. Optimizé el rendimiento de aplicaciones web, reduciendo tiempos de carga y colaborando con equipos multidisciplinarios para desarrollar soluciones escalables.",
    date: "2022 - 2024",
  },
  {
    id: 2,
    title: "Desarrollador de Interfaces y Experiencias Digitales",
    subtitle: "Freelance & Proyectos Personales",
    description:
      "Lideré el diseño y desarrollo de plataformas web utilizando tecnologías modernas como ReactJS, VueJS, TypeScript y NodeJS. Implementé dashboards interactivos con gráficos dinámicos, sistemas de autenticación segura y aplicaciones escalables optimizadas para el rendimiento.",
    date: "2021",
  },
  {
    id: 3,
    title: "Especialista en Desarrollo Frontend",
    subtitle: "Proyectos de Alto Impacto",
    description:
      "Desarrollé soluciones personalizadas, incluyendo e-commerce con integración de pagos, sistemas de gestión de inventarios y plataformas de reservas en línea. Utilicé herramientas como Firebase, Stripe API y Prisma para garantizar una experiencia óptima y segura.",
    date: "2019 ",
  },
  {
    id: 4,
    title: "Prácticas",
    subtitle: "Universidad Francisco Gavidia",
    description:
      "Participé en el desarrollo de aplicaciones web interactivas, aplicando buenas prácticas de UI/UX y optimización de rendimiento. Fortalecí mis conocimientos en desarrollo frontend con tecnologías modernas y metodologías ágiles.",
    date: "2018",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 2,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 8,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 20,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 10,
    text: "Tecnologias aprendidas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Dashboard y Visualización de Datos",
    description:
      "Desarrollo de dashboards interactivos con Chart.js y Firebase.",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Desarrollo Backend",
    description:
      "Implementación de servidores y APIs RESTful con NodeJS, Express y MongoDB.",
  },
  {
    icon: <Rocket />,
    title: "Metodologías Ágiles",
    description:
      "Trabajo con SCRUM y Agile para una entrega eficiente y colaborativa en proyectos de desarrollo.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Web Pro",
    image: "/image-1.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 2,
    title: "Desarrollo Web Ágil",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Estrategias Web",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Ideas Creativas",
    image: "/image-4.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 5,
    title: "Webs Impactantes",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 6,
    title: "Web Dinámica",
    image: "/image-6.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  }, 
  {
    id: 7,
    title: "Dark Web ",
    image: "/image-7.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 8,
    title: "E-commerce web",
    image: "/image-8.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  }, 
];

export const dataTestimonials = [
  {
    id: 1,
    name: "Carlos Martínez",
    description:
      "Estoy muy satisfecho con el sitio web que desarrolló para mi negocio. La interfaz es intuitiva y visualmente atractiva. Me ayudó a mejorar la experiencia de mis usuarios. ¡Excelente trabajo!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    description:
      "Contratar sus servicios fue una de las mejores decisiones que tomé. Mi página web ahora es más accesible y fácil de usar, gracias a su enfoque en diseño y funcionalidad. ¡Recomiendo totalmente sus servicios!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "Luis Fernández",
    description:
      "Necesitaba un rediseño para mi página, y lo que entregó superó mis expectativas. La web es moderna, rápida, y la experiencia de navegación es excelente. ¡Estoy muy contento con el resultado!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Marta Gómez",
    description:
      "Estoy encantada con mi sitio web. No solo está increíblemente bien diseñado, sino que también funciona perfectamente en dispositivos móviles. Ha mejorado mi presencia en línea enormemente.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Fernando López",
    description:
      "Gracias a su trabajo, mi página ahora es mucho más atractiva y funcional. Me ayudó a captar más clientes gracias a la mejora en la experiencia de usuario. ¡Totalmente satisfecho!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Sofía Ruiz",
    description:
      "El sitio web que me diseñó no solo es visualmente impresionante, sino que también está optimizado y es fácil de navegar. La atención al detalle y su enfoque en las necesidades del cliente son excepcionales.",
    imageUrl: "/profile6.png",
  },
];

