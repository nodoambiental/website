module.exports = {
    title: "Fundación Nodo Ambiental",
    logo: {
        alt: "Nodo Ambiental",
        src: "img/logos/favicon.svg",
        srcDark: "img/logos/favicon.svg", // TODO
    },
    items: [
        {
            to: "services",
            label: "Servicios",
            position: "left",
        },
        {
            type: "dropdown",
            to: "projects",
            label: "Proyectos",
            items: [
                {
                    label: "Pilas Usadas",
                    to: "/projects/batteries",
                },
                {
                    label: "Huertas Agroecológicas",
                    to: "/projects/agroecological-gardens",
                },
                {
                    label: "Otros Proyectos",
                    to: "/projects/all",
                },
            ],
            position: "left",
        },
        {
            type: "dropdown",
            label: "¿Quiénes Somos?",
            items: [
                {
                    label: "Nuestra Fundación",
                    to: "/about/us/organization",
                },
                {
                    label: "Nuestro Equipo",
                    to: "/about/us/team",
                },
                {
                    label: "Nuestros Valores",
                    to: "/about/us/values",
                },
                {
                    label: "¿Qué buscamos?",
                    to: "/about/us/goals",
                },
            ],
            position: "left",
        },
        {
            type: "dropdown",
            label: "¿Qué hacemos?",
            items: [
                {
                    label: "Nuestra Producción",
                    to: "/made-here/production",
                },
                {
                    label: "Nuestra Investigación",
                    to: "/made-here/research",
                },
                {
                    label: "Documentación Abierta",
                    to: "/made-here/documentation",
                },
                {
                    label: "Filosofía Open Source",
                    to: "/about/fos",
                },
                {
                    label: "Nuestra Wiki Abierta",
                    to: "/made-here/wiki",
                },
                {
                    label: "Nuestros Proyectos",
                    to: "/about/projects",
                },
                {
                    label: "Cómo Trabajamos",
                    to: "/about/working-here",
                },
            ],
            position: "left",
        },
        {
            type: "dropdown",
            label: "Más",
            items: [
                {
                    label: "Escríbenos",
                    href: "mailto:contacto@nodoambiental.org",
                },
                {
                    label: "Consultas",
                    href: "mailto:consultas@nodoambiental.org",
                },
                {
                    label: "Nuestro Blog",
                    to: "/blog",
                },
                {
                    label: "Tech Blog",
                    href: "https://dev.nodoambiental.org",
                },
                {
                    href: "https://github.com/nodoambiental",
                    label: "",
                },
                {
                    href: "https://github.com/nodoambiental",
                    label: "Facebook",
                },
                {
                    href: "https://github.com/nodoambiental",
                    label: "LinkedIn",
                },
                {
                    href: "https://github.com/nodoambiental",
                    label: "Instagram",
                },
            ],
            position: "left",
        },
        {
            to: "join",
            label: "Quiero participar", // TODO Button style
            position: "right",
        },
        {
            to: "donations",
            label: "Doná", // TODO Button style
            position: "right",
        },
        { type: "localeDropdown", position: "right" },
    ],
};
