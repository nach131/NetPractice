export default {
  head: metadata(),
  title: "NetPractice",
  titleTemplate: ":title - 42 Barcelona",
  appearance: "dark",
  description: "Guía NetPractice.",
  cleanUrls: true,
  base: '/NetPractice/',
  lang: "es-ES",
  markdown: {
    math: true
  },
  themeConfig: {
    siteTitle: "NetPractice",
    darkModeSwitchLabel: "Apariencia",
    sidebarMenuLabel: "Menu",
    returnToTopLabel: "Ir arriba",
    outlineTitle: "Tabla de contenido",
    logo: {
      src: "/logo.png",
      alt: "Logo",
    },
    docFooter: {
      prev: "Página anterior",
      next: "Pagína siguiente",
    },
    outline: [2, 5],
    editLink: {
      pattern: "https://github.com/nach131/NetPracticer/edit/main/docs/:path",
      text: "Editar esta página en GitHub",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Buscar",
                buttonAriaLabel: "Buscar documentos",
              },
              modal: {
                noResultsText: "No se han encontrado resultados",
                resetButtonTitle: "Borrar criterios de búsqueda",
                footer: {
                  selectText: "Seleccione",
                  navigateText: "Ir a",
                  closeText: "Cerrar",
                },
              },
            },
          },
        },
      },
    },
    notFound: {
      title: "Oops !!! página no encontrada",
      quote:
        "Asegúrate este bien escrita o reportarlo si es un error",
      linkLabel: "Regresar",
      linkText: "Regresar",
      code: "404",
    },
    socialLinks: socials(),
    nav: nav(),
    sidebar: siderbar(),
  },
};

function metadata() {
  return [
    ["meta", { property: "theme-color", content: "#4583df" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://raw.githubusercontent.com/nach131/NetPracticer/main/docs/public/logo.png",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["link", { rel: "icon", href: "/logo.png" }],
    // // ANALITYC GOOGLE
    // [
    //   'script',
    //   { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-GFZ7EFNBGK' }
    // ],
    // [
    //   'script',
    //   {},
    //   `window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //   gtag('config', 'G-GFZ7EFNBGK');`
    // ]
  ];
}

function socials() {
  return [

    { icon: "github", link: "https://github.com/nach131" },
    {
      icon: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>',
      },
      link: "https://enunpimpam.com/",
    },
  ];
}

function nav() {
  return [
    { text: "Guías", link: "/guias/", activeMatch: "/guias/" },
    { text: "Creditos", link: "/creditos", activeMatch: "/creditos/" },
    // {
    //   text: "Historial de cambios",
    //   link: "https://github.com/nach131/cpp42projects/blob/main/CHANGELOG.md",
    // },
  ];
}

function siderbar() {
  return [
    {
      text: "",
      items: [{ text: "Introducción", link: "/guias/" }],
    },
    {
      // text: "Categorías",
      items: [
        {
          text: "Básico",
          link: "/guias/basico/",
          collapsed: true,
          items: [
            // {
            //   text: "Conceptos",
            //   link: "/guias/basico/conceptos"
            // },

          ]
        },
        {
          text: "Basic calculator",
          link: "/guias/bc",
        },
        {
          text: "Tipos de redes",
          link: "/guias/basico/tipos",
        },
        {
          text: "Level 6",
          link: "/guias/level_6",
        },
        {
          text: "Level 7",
          link: "/guias/level_7",
        },
        {
          text: "Level 8",
          link: "/guias/level_8",
        },
        {
          text: "Level 9",
          link: "/guias/level_9",
        },
        {
          text: "Level 10",
          link: "/guias/level_10",
        },
        // {
        //   text: "Ejemplos",
        //   link: "/guias/ejemplo/",
        //   collapsed: true,
        //   items: [
        //     // {
        //     //   text: "Style",
        //     //   link: "/guias/ejemplo/style",
        //     // }
        //   ]
        // }
      ],
    },
    {
      text: "",
      items: [
        { text: "Creditos", link: "/creditos" },
      ],
    },
  ];
}
