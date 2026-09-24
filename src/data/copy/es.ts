import type { AppCopy } from "./types";

export const es: AppCopy = {
  meta: {
    title: "IMPACT-FRAME XK75",
    description: "IMPACT-FRAME XK75 — Ingeniería para mentes que construyen.",
  },
  brand: {
    name: "IMPACT-FRAME",
    mark: "IMPACT—FRAME",
    product: "XK75",
    tagline: "Ingeniería para mentes que construyen.",
    taglineAccents: ["Ingeniería", "mentes", "construyen"],
  },
  language: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
  hero: {
    imageAlt:
      "Teclado compacto IMPACT-FRAME XK75 de formato 75 por ciento en aluminio grafito con iluminación cian.",
    cta: "Reservar XK75",
    features: {
      form: {
        code: "75% FORM",
        label: "Compacto. Completo.",
      },
      material: {
        code: "CNC ALUMINUM",
        label: "Mecanizado de precisión.",
      },
      hotswap: {
        code: "HOT-SWAP",
        label: "Tu construcción. Tu elección.",
      },
      connectivity: {
        code: "2.4G / USB-C",
        label: "Libertad para crear.",
      },
    },
  },
  manifesto: {
    headline: "La herramienta debe dejar paso al trabajo.",
    body: "XK75 está diseñado para quienes crean sistemas, resuelven problemas y construyen aquello en lo que otros confían.",
    imageAlt:
      "Vista cenital del teclado XK75; la tecla Escape aún muestra la leyenda RK75.",
  },
  architecture: {
    title: "Ingeniería desde el interior.",
    intro:
      "Cada capa tiene una función. Explora la estructura detrás de cada pulsación.",
    imageAlt:
      "Fotografías apiladas de las capas internas del XK75; las cámaras no están registradas para una explosión 2.5D.",
    layers: {
      keycaps: {
        name: "Keycaps",
        description: "Superficie de contacto en PBT.",
      },
      switches: {
        name: "Switches",
        description: "Mecanismo de actuación de cada tecla.",
      },
      frame: {
        name: "Marco superior",
        description: "Estructura que delimita y protege el conjunto.",
      },
      plate: {
        name: "Placa",
        description: "Soporte y alineación de los switches.",
      },
      foam: {
        name: "Espuma acústica",
        description: "Amortiguación de resonancias internas.",
      },
      pcb: {
        name: "PCB",
        description: "Circuito que registra las pulsaciones.",
      },
      battery: {
        name: "Batería y módulo de control",
        description: "Alimentación y gestión del funcionamiento.",
      },
      bottom: {
        name: "Carcasa inferior",
        description: "Base estructural del teclado.",
      },
    },
  },
  switchSystem: {
    title: "Precisión en cada pulsación.",
    intro: "Explora el mecanismo que transforma el movimiento en una entrada.",
    press: "Simple clic",
    hint: "Click con la tecla espacio.",
    parts: {
      keycap: {
        name: "Keycap PBT",
        description: "Superficie de contacto.",
      },
      housingUpper: {
        name: "Carcasa superior",
        description: "Guía y protección del mecanismo.",
      },
      stem: {
        name: "Stem",
        description: "Pieza móvil que transmite la pulsación.",
      },
      spring: {
        name: "Resorte",
        description: "Resistencia y retorno.",
      },
      contact: {
        name: "Contacto",
        description: "Registro eléctrico de la actuación.",
      },
      housingLower: {
        name: "Carcasa inferior",
        description: "Soporte del conjunto.",
      },
    },
  },
  materials: {
    title: "Solidez en cada detalle.",
    intro:
      "Superficies mecanizadas, capas estructurales y materiales cuidadosamente seleccionados definen el carácter del XK75.",
    items: {
      aluminum: {
        name: "Aluminio CNC",
        description: "Estructura del chasis y precisión del mecanizado.",
        imageAlt:
          "Vista cercana del chasis de aluminio mecanizado del XK75, con el borde de la carcasa y el bloque de teclas.",
      },
      keycaps: {
        name: "Keycaps PBT",
        description: "Superficie de contacto y textura.",
        imageAlt:
          "Vista cercana de las keycaps PBT del XK75 en el bloque alfanumérico.",
      },
      plate: {
        name: "Placa metálica",
        description: "Soporte y alineación de los switches.",
        imageAlt:
          "Vista cercana de la placa metálica del XK75, con huecos para switches y acabado cepillado.",
      },
      foam: {
        name: "Espuma acústica",
        description: "Amortiguación de resonancias internas.",
        imageAlt:
          "Vista cercana de la capa de espuma acústica interna del XK75.",
      },
      knob: {
        name: "Perilla mecanizada",
        description: "Detalle metálico del control giratorio.",
        imageAlt:
          "Vista cercana de la perilla mecanizada del XK75, con acabado metálico concéntrico.",
      },
      finish: {
        name: "Acabado grafito",
        description: "Textura de la carcasa y reflejos de sus superficies.",
        imageAlt:
          "Vista cercana de la superficie grafito de la carcasa, con grano metálico y reflejos fríos.",
      },
    },
  },
  performance: {
    title: "Conectado a tu forma de trabajar.",
    intro: "Explora los modos de conexión que integran el XK75 en tu entorno.",
    modeLabel: "Modo de conexión",
    keyboardAlt: "Teclado XK75 usado como origen del diagrama de conexión.",
    hostLabel: "Host",
    hostAlt: "Monitor de escritorio usado como host en el diagrama de conexión.",
    modes: {
      usbc: {
        name: "USB-C",
        description: "Un cable conecta el XK75 directamente al equipo.",
      },
      ghz24: {
        name: "2.4 GHz",
        description: "Un receptor en el equipo establece el enlace inalámbrico.",
      },
      bluetooth: {
        name: "Bluetooth",
        description:
          "El XK75 se enlaza de forma inalámbrica con dispositivos compatibles.",
      },
    },
  },
  specifications: {
    title: "Especificaciones técnicas.",
    imageAlt:
      "Vista lateral del teclado IMPACT-FRAME XK75, con el perfil de la carcasa, las keycaps y la perilla.",
    planAlt:
      "Vista cenital plana del teclado XK75, la misma imagen neutra de Philosophy; la tecla Escape aún muestra la leyenda RK75.",
    groups: {
      identity: { title: "Producto" },
      construction: { title: "Construcción" },
      connectivity: { title: "Conectividad" },
      controls: { title: "Controles" },
    },
    items: {
      model: { label: "Modelo", value: "IMPACT-FRAME XK75" },
      identifier: { label: "Identificador", value: "IF-XK75 / REV.01" },
      form: { label: "Formato", value: "75%" },
      chassis: { label: "Chasis", value: "Aluminio mecanizado CNC" },
      keycaps: { label: "Keycaps", value: "PBT" },
      switches: { label: "Switches", value: "Hot-swap" },
      plate: { label: "Placa", value: "Metálica" },
      foam: { label: "Amortiguación interna", value: "Espuma acústica" },
      connectivity: {
        label: "Conectividad",
        value: "USB-C, 2.4 GHz, Bluetooth",
      },
      lighting: { label: "Iluminación", value: "RGB" },
      knob: { label: "Control físico", value: "Perilla mecanizada" },
    },
  },
  reserve: {
    title: "Reservar XK75",
    intro:
      "Registra tu interés en este concepto. El formulario no crea una reserva.",
    notice:
      "XK75 es un producto ficticio. En esta página no se envía, guarda ni vende nada.",
    nameLabel: "Nombre",
    emailLabel: "Correo",
    submit: "Solicitar reserva",
    nameRequired: "Escribe un nombre.",
    emailRequired: "Escribe un correo.",
    emailInvalid: "Escribe un correo válido.",
    resultTitle: "Un concepto para explorar.",
    resultMessage:
      "IMPACT-FRAME XK75 es un producto ficticio. Esta experiencia presenta su concepto de diseño e ingeniería; no hay compras ni reservas disponibles.",
    continue: "Seguir explorando",
  },
  finalStatement: {
    tagline: "Ingeniería para mentes que construyen.",
    imageAlt:
      "Teclado IMPACT-FRAME XK75 ensamblado, centrado como vista de cierre de la página.",
    ctaPrimary: "Volver arriba",
  },
  nav: {
    label: "Navegación",
    manifesto: "Manifiesto",
    architecture: "Arquitectura",
    switches: "Switches",
    materials: "Materiales",
    performance: "Rendimiento",
    specs: "Especificaciones",
    reserve: "Reserva",
    final: "Cierre",
    menu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  footer: {
    tagline: "Ingeniería para mentes que construyen.",
    navLabel: "Secciones",
    notice:
      "Producto conceptual. Esta página es una demostración frontend y no ofrece ventas, pagos ni reservas reales.",
    year: "2026",
    rights: "Todos los derechos reservados.",
    author: "Donovan NUDRAK",
  },
  legal: {
    notice:
      "Producto conceptual. Esta página es una demostración frontend y no ofrece ventas, pagos ni reservas reales.",
  },
};
