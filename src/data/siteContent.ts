/**
 * Contenido centralizado del press kit — edita aquí texto, enlaces, colores e imágenes.
 * Tras cambiar archivos en /public, ajusta `available` y rutas en downloads / hero.
 */

export type SocialPlatform =
  | "spotify"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  handle?: string;
}

export interface BandMember {
  name: string;
  role: string;
  instrument: string;
  /** Ruta bajo /public, ej: /images/members/omar.jpg — opcional */
  photoSrc?: string;
}

export interface Milestone {
  headline: string;
  detail: string;
  /** Ruta bajo /public — foto del hito */
  imageSrc?: string;
  imageAlt?: string;
  /** Destaca el hito (diseño principal — ej. Arena Monterrey) */
  featured?: boolean;
}

export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface DownloadItem {
  id: string;
  label: string;
  description: string;
  /** Ruta bajo /public */
  href: string;
  /** Pon false hasta que subas el archivo real */
  available: boolean;
}

export interface SiteTheme {
  /** Variables CSS — hex u oklch */
  metalBlack: string;
  metalVoid: string;
  metalSteel: string;
  metalSilver: string;
  metalChrome: string;
  metalBlood: string;
}

export const siteContent = {
  meta: {
    title: "Nightrise — Press Kit | Heavy Metal Monterrey",
    description:
      "Press kit oficial de Nightrise: Heavy Metal desde Monterrey, Nuevo León. EPK para promotores, medios y venues.",
    keywords: [
      "Nightrise",
      "Heavy Metal",
      "Monterrey",
      "press kit",
      "EPK",
      "México",
      "metal",
    ],
    ogImage: "/images/og-default.svg",
  },

  theme: {
    metalBlack: "#070708",
    metalVoid: "#0c0d10",
    metalSteel: "#1a1b22",
    metalSilver: "#c4c6ce",
    metalChrome: "#e8eaef",
    metalBlood: "#7a1518",
  } satisfies SiteTheme,

  band: {
    name: "Nightrise",
    genre: "Heavy Metal",
    city: "Monterrey, Nuevo León, México",
    tagline: "Heavy Metal from Monterrey, Nuevo León",
    /** Logotipo oficial — ruta bajo /public */
    logoSrc: "/images/logo-nightrise.png",
  },

  /** Biografía única para prensa (párrafos separados) */
  biography: [
    "Banda de heavy metal originaria de Monterrey, Nuevo León, la cual busca una variedad de estilos en sus composiciones sin perder la esencia del género, principalmente influenciados por el sonido del N.W.O.T.H.M. (new wave of traditional heavy metal), de bandas como Enforcer, Skullfist, Ambush, Accept.",
    "Este proyecto inicia en 2016 con algunas ideas desarrolladas por el guitarrista Omar Valdez, poco después se integran Erick, Yahir y Juan quien en conjunto continúan con los trabajos de composición.",
    "La banda se completa formalmente al integrarse Adrián Sombra, quien además de prestar su voz a la banda es quien escribe las letras de los temas, definiendo así la alineación como hasta hoy en día.",
    "Actualmente estamos promocionando nuestro primer disco «Ride in Hell» bajo el sello Asenath Records.",
  ],

  hero: {
    /** Imagen de fondo del hero — foto grupal detrás del logo */
    backgroundImage: "/images/grupal.jpg",
    useBackgroundImage: true,
  },

  music: {
    featuredTitle: "Álbum en Spotify",
    featuredDescription:
      "Escucha el lanzamiento completo en streaming. Heavy Metal desde Monterrey, Nuevo León.",
    /** Embed desde Spotify → Compartir → Insertar (iframe src) */
    spotifyEmbedSrc:
      "https://open.spotify.com/embed/album/5N4wJq2ndpMVWUVNU3x0Zt?utm_source=generator&theme=0",
    /** Enlace directo al álbum en la app / web */
    spotifyProfileUrl:
      "https://open.spotify.com/album/5N4wJq2ndpMVWUVNU3x0Zt",
  },

  videos: {
    sectionTitle: "Videos",
    /** Añade IDs de YouTube (la parte final de youtube.com/watch?v=) */
    items: [] as YouTubeVideo[],
  },

  members: [
    {
      name: "Omar Valdez",
      role: "Guitarra líder",
      instrument: "Guitarra",
      photoSrc: "/images/members/omar-valdez.png",
    },
    {
      name: "Erick Lope",
      role: "Guitarra rítmica",
      instrument: "Guitarra",
      photoSrc: "/images/members/erick-lope.png",
    },
    {
      name: "Juan Izaguirre",
      role: "Batería",
      instrument: "Batería",
      photoSrc: "/images/members/juan-izaguirre.png",
    },
    {
      name: "Adrian Serna",
      role: "Vocalista",
      instrument: "Voz principal",
      photoSrc: "/images/members/adrian-serna.png",
    },
    {
      name: "Julio Lope",
      role: "Bajista",
      instrument: "Bajo",
      photoSrc: "/images/members/julio-lope.png",
    },
  ] satisfies BandMember[],

  milestones: [
    {
      headline: "Arena Monterrey",
      detail: "Todos Somos Ángeles Rock Fest",
      imageSrc: "/images/trayectoria/arena-monterrey.jpg",
      imageAlt: "Nightrise en Arena Monterrey — Todos Somos Ángeles Rock Fest",
      featured: true,
    },
    {
      headline: "Savaged (España)",
      detail: "La Tumba",
      imageSrc: "/images/trayectoria/savaged.jpg",
      imageAlt: "Nightrise con Savaged en La Tumba",
    },
    {
      headline: "Tim Ripper Owens",
      detail: "Nodriza Estudio",
      imageSrc: "/images/trayectoria/tim-ripper.jpg",
      imageAlt: "Nightrise con Tim Ripper Owens — Nodriza Estudio",
    },
    {
      headline: "Road To Mexico Metal Fest",
      detail: "Foro Tims",
      imageSrc: "/images/trayectoria/road-to-mexico-metal-fest.jpg",
      imageAlt: "Nightrise en Road To Mexico Metal Fest — Foro Tims",
    },
    {
      headline: "Cobra Spell",
      detail: "Cafe Iguana",
      imageSrc: "/images/trayectoria/cobra-spell.jpg",
      imageAlt: "Nightrise con Cobra Spell en Cafe Iguana",
    },
    {
      headline: "Jose Andrea (Ex Mago de Oz)",
      detail: "La Tumba",
      imageSrc: "/images/trayectoria/jose-andrea.jpg",
      imageAlt: "Nightrise con Jose Andrea — La Tumba",
    },
  ] satisfies Milestone[],

  social: [
    {
      platform: "spotify",
      label: "Spotify",
      url: "https://open.spotify.com/album/5N4wJq2ndpMVWUVNU3x0Zt",
      handle: "Nightrise",
    },
    {
      platform: "youtube",
      label: "YouTube",
      url: "https://www.youtube.com/@NightriseMty",
      handle: "NightriseMty",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/nightrisemty/",
      handle: "nightrisemty",
    },
    {
      platform: "tiktok",
      label: "TikTok",
      url: "https://www.tiktok.com/@nightrisemty",
      handle: "nightrisemty",
    },
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/nightrisemty",
      handle: "nightrisemty",
    },
  ] satisfies SocialLink[],

  contact: {
    booking: {
      label: "Booking",
      email: "reyes@dve.com.mx",
    },
    press: {
      label: "Prensa",
      email: "reyes@dve.com.mx",
    },
    whatsapp: {
      label: "WhatsApp",
      /** Número en formato internacional sin + */
      number: "528114202429",
      display: "81 1420 2429",
    },
  },

  downloads: [
    {
      id: "logo",
      label: "Logo",
      description: "PNG en alta para flyers y banners",
      href: "/images/logo-nightrise.png",
      available: true,
    },
    {
      id: "bio",
      label: "Biografía (PDF)",
      description: "Texto extendido listo para medios",
      href: "/downloads/bio.pdf",
      available: false,
    },
  ] satisfies DownloadItem[],
} as const;

export type SiteContent = typeof siteContent;
