# Nightrise — Press Kit (EPK)

Press kit profesional en **Next.js 15**, **TypeScript** y **Tailwind CSS**. Diseño oscuro, metálico y responsivo, pensado para promotores, venues, festivales y medios.

## Requisitos

- Node.js **18.18+** o **20+** ([nodejs.org](https://nodejs.org))
- npm (incluido con Node)

## Instalación y desarrollo local

En la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). El modo desarrollo usa Turbopack (`next dev --turbopack`).

### Producción local

```bash
npm run build
npm start
```

## Contenido editable

Todo el texto, enlaces, colores, embeds y rutas de archivos viven en:

**`src/data/siteContent.ts`**

Ahí puedes cambiar:

| Qué | Dónde en el archivo |
|-----|---------------------|
| Nombre, género, ciudad, frase | `band` |
| Bios | `bios` |
| Hero e imagen de fondo | `hero` (`useBackgroundImage`, `backgroundImage`) |
| Spotify (embed y URLs) | `music` |
| Videos de YouTube | `videos.items` (solo el ID del video) |
| Integrantes y fotos | `members` (+ `photoSrc` opcional por persona) |
| Logros / trayectoria | `milestones` |
| Redes | `social` |
| Contacto y WhatsApp | `contact` |
| Galería y ZIP | `gallery` |
| Descargas y disponibilidad | `downloads` |
| Paleta (CSS) | `theme` (variables aplicadas en el `<html>`) |
| SEO (título, descripción, OG) | `meta` |

### Imágenes

- **Hero:** coloca `public/images/hero-bg.jpg` (u otro nombre y actualiza `hero.backgroundImage`) y pon **`useBackgroundImage: true`** en `siteContent.ts`.
- **Prensa:** por defecto hay SVGs de ejemplo en `public/images/press/`. Sustitúyelos por JPG/WebP/PNG y actualiza `gallery.images`.
- **Integrantes:** añade por ejemplo `photoSrc: "/images/members/omar.jpg"` en cada integrante y guarda los archivos bajo `public/images/members/`.
- **Open Graph:** reemplaza `public/images/og-default.svg` por una imagen **1200×630** (JPG/PNG) y actualiza `meta.ogImage` si cambias el nombre.

### Archivos descargables

Sube a **`public/downloads/`**:

- `logo.png`
- `bio.pdf`
- `tech-rider.pdf`
- `stage-plot.pdf`
- `fotos-prensa.zip`

En **`siteContent.ts`**, en el array **`downloads`** (y en **`gallery.zipDownload`** para el ZIP de fotos), pon **`available: true`** en cada ítem que ya exista.

### Spotify

1. En Spotify: álbum, sencillo o perfil de artista → **Compartir** → **Copiar enlace al código de inserción** (o construye la URL `https://open.spotify.com/embed/...`).
2. Pega esa URL en **`music.spotifyEmbedSrc`**.
3. Ajusta **`music.spotifyProfileUrl`** y la entrada **`social`** de Spotify al enlace correcto de la banda (no uses búsqueda genérica en producción).

**Autoplay:** la web **no** fuerza reproducción al cargar. El reproductor funciona con la interacción del visitante dentro del iframe.

### YouTube

En **`videos.items`**, añade objetos `{ id: "XXXX", title: "Título" }`, donde **`id`** es el código de `youtube.com/watch?v=XXXX`.

### URL pública (SEO)

Copia `.env.example` a **`.env.local`** y define:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

En Vercel, define la misma variable en **Settings → Environment Variables**.

## Desplegar en Vercel

1. Sube el proyecto a GitHub, GitLab o Bitbucket (o usa **Vercel CLI**).
2. En [vercel.com](https://vercel.com): **Add New → Project** e importa el repo.
3. Framework: **Next.js** (detección automática). Comando de build: **`npm run build`** (por defecto).
4. Añade **`NEXT_PUBLIC_SITE_URL`** con la URL final (p. ej. `https://nightrise-epk.vercel.app`).
5. Deploy.

Los archivos estáticos en **`public/`** se sirven tal cual; no hace falta configuración extra para PDFs o ZIP.

## Estructura principal

```text
src/
  app/
    layout.tsx      # Fuentes, metadatos, variables de tema
    page.tsx        # JSON-LD + página principal
    globals.css     # Estilos globales y animaciones
  components/
    layout/         # Navegación y footer
    sections/       # Secciones del EPK
    social/         # Iconos de redes
    ui/             # Botones, contenedor, reveal al scroll
  data/
    siteContent.ts  # Todo el contenido editable
public/
  images/
  downloads/
  videos/
```

## Licencia

Uso para **Nightrise** / tu promoción. Ajusta según tus necesidades legales.
