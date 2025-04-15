// /data/resume-data.es.ts

import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA_ES = {
    name: "Karlos Zurutuza",
    initials: "KZ",
    location: "Rockwall, TX, USA", // you might translate location info if needed
    locationLink: "https://www.google.com/maps/place/College+Station,+TX",
    about:
        "Reciente graduado en Ciencias de la Computación de Texas A&M (diciembre 2024). Desarrollé y actualmente dirijo MyCache, un juego de búsqueda del tesoro basado en NFC.",
    summary:
        "Soy un estudiante dedicado de Ciencias de la Computación en Texas A&M University, con graduación en 2024. Tengo experiencia como pasante en Vex Robotics y he participado en diversos proyectos y hackathones, demostrando mis habilidades en desarrollo de software y liderazgo de equipos.",
    avatarUrl: "https://avatars.githubusercontent.com/u/55366904?v=4",
    personalWebsiteUrl: "https://github.com/torfoes",
    contact: {
        email: "karloszuru@gmail.com",
        tel: null,
        social: [
            {
                name: "GitHub",
                url: "https://github.com/torfoes",
                icon: GitHubIcon,
            },
        ],
    },
    education: [
        {
            school: "Texas A&M University",
            degree: "Licenciatura en Ciencias de la Computación",
            start: "Ago. 2019",
            end: "2024",
        },
    ],
    work: [
        {
            company: "MyCache",
            link: "https://mycache.dev",
            badges: [],
            title: "Ingeniero de Software",
            logo: null, // agrega el logo de MyCache si está disponible
            start: "Nov. 2023",
            end: "Actualidad",
            description:
                "Dirijo un equipo para mejorar el geocaching mediante tecnología NFC, desarrollando aplicaciones web y móviles, servicios de backend y un codificador NFC reel-to-reel para una programación eficiente de etiquetas.",
        },
        {
            company: "Vex Robotics",
            link: "https://www.vexrobotics.com",
            badges: [],
            title: "Pasante",
            logo: null,
            start: "Mar. 2018",
            end: "Ago. 2020",
            description:
                "Asistí en el desarrollo de productos a través del ciclo completo de diseño de ingeniería. Creé dibujos para clientes y manufactura, y apoyé en el diseño, modelado y pruebas de proyectos futuros.",
        },
    ],
    activities: [
        {
            organization: "FRC Team 3310",
            title: "Mentor",
            start: "Ene. 2022",
            end: "Actualidad",
            description:
                "Delegué tareas y lideré sesiones de formación en CAD y programación. Gestioné la compra de nuevas piezas y colaboré con estrategas para definir objetivos y plazos de diseño.",
        },
    ],
    skills: [
        "C++",
        "Python",
        "TypeScript",
        "SQL",
        "Postgres",
        "Django",
        "Next.js",
        "React",
        "ROS2",
        "Solidworks",
        "Photoshop",
        "Illustrator",
        "Azure",
        "AWS",
        "GCP",
        "Git",
        "Docker",
        "CI/CD",
        "JIRA",
        "Agile",
    ],
    projects: [
        {
            title: "MyCache",
            techStack: ["NFC", "Django", "React", "React Native"],
            description:
                "Juego digital de búsqueda del tesoro impulsado por tecnología NFC.",
            link: {
                label: "MyCache",
                href: "https://mycache.dev"
            }
        },
        {
            title: "Whisper Disco",
            techStack: ["WebRTC", "MediaSoup"],
            description:
                "Transmitir audio para fiestas silenciosas en una red local. ¡Ven y anima la fiesta!",
            link: {
                label: "Whisper Disco",
                href: "https://github.com/torfoes/whisperdisco"
            }
        },
        {
            title: "PushPal",
            techStack: ["Next.js", "WebPush"],
            description:
                "Gestiona asistencia y registros, y envía notificaciones a grupos para mantener a todos informados.",
            link: {
                label: "PushPal",
                href: "https://pushpal.app",
            },
        },
    ],
    leadershipAndService: [
        {
            organization: "Aggie Entrepreneurship Program",
            title: "Miembro",
            start: "Ene. 2024",
            end: "Dic. 2024",
            description:
                "Nos reuníamos semanalmente para desarrollar y perfeccionar conceptos de negocio, colaborando en análisis de mercado y compitiendo en pitch competitions.",
        },
        {
            organization: "Boy Scouts of America",
            title: "Eagle Scout",
            description:
                "Obtuve el rango Eagle al liderar proyectos de servicio comunitario, coordinando esfuerzos de equipo y asesorando a scouts más jóvenes.",
        },
        {
            organization: "FRC Team 3310 (FIRST Robotics)",
            title: "Mentor y Ex Miembro",
            description:
                "Asesoré a miembros del equipo en diseño CAD y programación; lideré sesiones de formación técnica, coordiné compras de piezas y establecí objetivos de diseño.",
        },
    ],
} as const;
