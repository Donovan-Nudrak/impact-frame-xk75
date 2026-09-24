# Contexto de implementación — IMPACT-FRAME XK75

Registro del estado real del código para continuar el desarrollo. No sustituye al documento general ni describe funcionalidades previstas como si ya existieran.

| Dato | Definición |
| --- | --- |
| Archivo | `docs/CONTEXT.md` |
| Actualizado | 24 de septiembre de 2026 |
| Documento general | `docs/DOC-KX-75.md` |
| Etapa actual | Construcción por secciones |
| Gestor de paquetes | npm (`package-lock.json`) |
| Git | No hay repositorio git inicializado |

## Cómo usar este documento

Antes de modificar el proyecto, leer:

1. Las instrucciones del repositorio, si existen.
2. `docs/DOC-KX-75.md` (objetivo, alcance, dirección visual, estructura prevista).
3. Este archivo (qué hay implementado y con qué limitaciones).
4. Los archivos de la zona que se va a tocar.

`DOC-KX-75.md` define el producto y las decisiones de diseño. `CONTEXT.md` registra la implementación. Actualizar este archivo cuando cambien secciones, decisiones, recursos o limitaciones importantes.

## Propósito

IMPACT-FRAME XK75 es una landing promocional de un teclado ficticio. Demuestra un lanzamiento de hardware mediante frontend estático, interactivo y responsive. No es tienda, catálogo ni producto comercial real.

Alcance vigente: una sola página, contenidos locales, navegación por anclas, animación con GSAP y representación 2.5D con imágenes y CSS. Fuera de alcance: backend, APIs, pagos, 3D/WebGL y rotación libre del producto.

Idioma: **ES/EN**, con selector en el header y cambio sin recarga. Dirección visual: industrial tecnológica premium — negro grafito, metal y cian contenido (`#050708`, `#0D1215`, `#24D8F0`).

## Estado actual

La Fundación está hecha: Vite, React 19, TypeScript, CSS Modules, tokens, GSAP, Oxlint, Vitest y app ejecutable. La construcción avanza sección a sección. La revisión general de Hero y del resto corresponde a la etapa de iteración; no reabrirla salvo instrucción explícita.

### Implementado

| Pieza | Comportamiento real |
| --- | --- |
| Header | Sticky. Marca → `#hero`. Enlaces a Manifiesto, Architecture, Switches, Materials, Performance, Specs, Reserva y Cierre. Sin CTA Explore XK75. Selector ES/EN (solo texto, sin icono). En anchos estrechos la navegación pasa a un menú burger a la izquierda de la marca; el panel abierto cubre la mitad izquierda bajo el header y entra con un desplazamiento desde la izquierda. Las secciones quedan agrupadas en la zona superior media del panel, sin repartirse por toda su altura. Encima de esa lista va el título `XK75` en Orbitron. |
| Hero `#hero` | Identidad del producto, recorte `xk75-hero-assembled.png` (alpha), CTA `Reserve XK75` / `Reservar XK75` a `#reserve`. En escritorio, título, lema, CTA y las cuatro características forman un grupo a la izquierda del teclado, equilibrado con el botón como centro vertical. Las características (`75% FORM`, `CNC ALUMINUM`, `HOT-SWAP`, `2.4G / USB-C`) van en una columna bajo el botón. Hasta `959px` el orden es título, teclado y, debajo, las cuatro características (grilla 2×2; hasta `560px`, una columna). Título `XK75` en Orbitron (token `--font-product`). En el lema, `Engineering`/`Ingeniería`, `Minds`/`mentes` y `Build`/`construyen` van en cian. Sin etiqueta de sección, sin `IF-XK75 / REV.01` y sin marca sobre la imagen. Imagen ampliada (`88rem` / `88vh`); sin máscara en los bordes. |
| Manifesto `#manifesto` | Declaración editorial, vista cenital `xk75-manifesto-presence.png`, revelado de texto por líneas al entrar en pantalla. Imagen ampliada (`64rem` / `78vh`); sin máscara ni opacidad degradada. |
| Architecture `#architecture` | Ocho capas PNG con el mismo desplazamiento vertical (`--layer-step`). La activa queda a opacidad 1 (y por encima). Las que quedan debajo conservan ~0.28; las que quedan encima bajan a ~0.12. La capa activa solo cambia al pulsar el selector, en escritorio y en móvil. En el selector, los índices van siempre en cian. La descripción breve solo se muestra en la capa activa; el resto de la fila no cambia. Hasta `959px` la pila queda fija bajo el header y cada fila muestra índice y nombre. El despiece al scroll está **descartado**. Las capas no van en un marco oscuro translúcido (sin borde ni panel). |
| Switch System `#switches` | Pila de seis PNG de un switch, separadas en reposo. «Simple click» / «Simple clic» las reúne solo hacia abajo: la carcasa inferior no se mueve y el resto desciende sobre ella; el resorte se comprime. Luego vuelven a abrirse. Hay aire extra bajo la pila para que la carcasa inferior no tape el botón. El selector de piezas no cambia la imagen. Las imágenes no capturan el clic: el botón queda siempre operable. |
| Materials `#materials` | Composición editorial: seis macros fotográficas (chasis, keycaps, perilla, acabado, placa y espuma). Reflejo de puntero fino sobre las fotos. Cada foto lleva un marco cian de 1px con un neón ligero, sin panel oscuro. El texto de aluminio CNC queda junto a la foto de la carcasa: la columna no pasa de `22rem` y el hueco es corto. En anchos de hasta `959px`, las seis macros comparten proporción `3 / 2` con recorte, el texto queda debajo de cada foto, los títulos comparten el mismo borde izquierdo y el hueco entre foto y texto es de `1rem`. El escritorio no cambia. |
| Performance `#performance` | Tres modos (USB-C, 2.4 GHz, Bluetooth). En escritorio van en tres columnas anchas. Hasta `959px` siguen en tres columnas, con el texto más pequeño y cada modo apilado. USB-C: línea continua; 2.4 GHz: línea punteada y pulsos. En ambos, un círculo recorre la línea y desaparece al llegar al host. No hay recuadro al final de ninguna de las dos. Bluetooth: cinco arcos de circunferencia; el origen es el símbolo de Bluetooth. En escritorio el abanico y su marco de esquinas van en el centro del hueco, un poco hacia el teclado. Teclado hasta `min(42vh, 360px)` y host hasta `17rem`; en móvil siguen en `min(24vh, 180px)` y `11.5rem`. Sin cifras de polling, latencia ni autonomía. Sin marco oscuro translúcido. |
| Specifications `#specs` | Ficha HTML agrupada (producto, construcción, conectividad, controles) con los datos confirmados del concepto. Omite cifras no definidas. Vista lateral `xk75-specs-side.png` y, debajo, la vista cenital plana reutilizada de Philosophy (`xk75-manifesto-presence.png`). Sin marco oscuro translúcido (sin borde ni panel). |
| Reserve `#reserve` | Formulario conceptual (nombre y email). Validación local. Al enviar, sustituye el formulario por el aviso de producto ficticio y un enlace a `#architecture`. No envía ni guarda datos. |
| Final Statement `#final-statement` | Cierre centrado: firma `IMPACT—FRAME // XK75`, lema, imagen ensamblada `xk75-final-assembled.png`, CTA `Back to top` / `Volver arriba` → `#hero`. El CTA gris `Reserve XK75` / `Reservar XK75` se retiró. Entrada breve con GSAP y resplandor cian estabilizado. |
| Footer | Marca → `#hero`, lema, navegación a las secciones existentes y aviso de producto conceptual ES/EN. Al final: `IMPACT—FRAME`, `© 2026`, fórmula de derechos y `Donovan NUDRAK`. Sin línea de tecnologías ni enlace `Volver arriba`. |
| Idioma | Diccionarios tipados ES/EN. Persistencia en `localStorage` (`if-xk75-locale`). `document.documentElement.lang`. |
| Movimiento reducido | Las secciones implementadas respetan `prefers-reduced-motion`. |

### Representaciones temporales (no definitivas)

- **Fondo de página:** `background-2.png` (estudio metálico) fijo en `html`, sin retícula ni capas `.atmosphere`. Las secciones y el footer son transparentes. El header sigue semitransparente. `BlueprintGrid` queda en el repo, pero el Hero ya no lo usa.
- **Hero, Performance y Final Statement:** recortes PNG de `docs/images/` (`xk75-hero-assembled.png`, reutilizado en Performance; `xk75-final-assembled.png` en el cierre). El Hero usa un recuadro más grande y el recorte completo, sin máscara radial. Los PNG temporales anteriores se eliminaron de `src/assets/keyboard/`.
- **Manifesto:** vista cenital `xk75-manifesto-presence.png`, más grande y sin `mask-image` ni opacidad 0.72. Sigue habiendo una tecla con leyenda `RK75`.
- **Architecture:** modo `layers` (representación aceptada). Ocho PNG `xk75-layer-*.png` separados por el mismo `--layer-step` (escritorio `clamp(1.85rem, 4.2vw, 3.15rem)`; hasta `959px`, `clamp(0.85rem, 2.6vw, 1.35rem)`, pila fija y lista compacta). Siempre hay una capa activa (arranca en keycaps): esa a opacidad 1 y z-index superior. Las capas de índice mayor (más abajo en la pila) quedan a ~0.28; las de índice menor (más arriba) a ~0.12. Sin marco oscuro translúcido alrededor de la pila. El pin, la explosión al scroll y el reensamblaje quedan **descartados**; no se pedirá un set con cámara alineada. `keyboard-architecture.png` se eliminó.
- **Switch System:** pila de seis PNG (`xk75-switch-*.png`) separadas en reposo (`--rest-y`). Al pulsar se reúnen (`y: 0`, resorte `scaleY`, contacto más visible) y vuelven a abrirse. El selector de piezas no altera la imagen. Las piezas no reciben clics. Sin marco oscuro translúcido alrededor de la pila. Un solo mecanismo conceptual, **sin** selector LINEAR/TACTILE/SILENT (esos stems se eliminaron), **sin** fuerzas/recorridos/curvas y **sin** sonido.
- **Materials:** seis macros `xk75-macro-*.png` (1536×1024), incluida placa y espuma fotográficas. Marco cian de 1px con neón ligero; sin panel oscuro. En escritorio, placa y espuma siguen el tamaño de la imagen y el texto de aluminio CNC queda junto a la carcasa. Hasta `959px`, las seis fotos comparten `3 / 2` y el texto queda debajo, alineado a la izquierda, con `1rem` entre foto y título. `ConstructionDiagrams.tsx` queda en el repo, pero ya no se usa.
- **Performance:** reutiliza el ensamblado del Hero y el monitor `Host.png`. USB-C es trayectoria continua; 2.4 GHz, línea punteada y pulsos, sin receptor. En ambos el círculo desaparece al terminar el recorrido. Bluetooth son cinco arcos de circunferencia con el símbolo de Bluetooth en el origen. La señal no representa mediciones reales. El diagrama se muestra sin marco oscuro translúcido.
- **Control:** sección **retirada** de la landing (`Make it yours` / `Hazlo tuyo`). Los PNG `xk75-control-*` se eliminaron.
- **Specifications:** describe el producto ficticio, no las simplificaciones visuales de la web. Vista lateral `xk75-specs-side.png` y, debajo, `xk75-manifesto-presence.png` (la misma vista plana de Philosophy). Sin marco oscuro translúcido. El grupo «Controles» de la ficha (RGB, perilla) se mantiene.
- **Reserve:** sección propia entre Specs y Cierre. Formulario de interés conceptual; el envío no persiste. El modal del cierre se retiró.
- **Final Statement:** composición de cierre dedicada. El movimiento se limita a aparición y resplandor; no simula ensamblaje de piezas independientes. El CTA del cierre lleva a `#hero`.
- **Maestros:** los PNG originales viven en `docs/images/`. `src/assets/` solo tiene copias de los que esta etapa monta.

### Estado de las secciones

Las **nueve** secciones montadas son Hero, Manifesto, Architecture, Switch System, Materials, Performance, Specifications, Reserve y Final Statement. Control (`#control`, «Make it yours» / «Hazlo tuyo») quedó **fuera de la página**. El footer completo sustituye al aviso mínimo anterior. Las etiquetas numeradas de sección (`Section 01 — Hero`, `03 / ARCHITECTURE`, etc.) se retiraron de la UI.

**Siguiente etapa prevista:** iteración formal de toda la página. El 2.5D de Architecture al scroll está descartado. Control no se reabre sin instrucción explícita. Quedan sin cablear los stems LINEAR/TACTILE/SILENT.

### Ajustes del 23 de septiembre de 2026

Cuatro cambios sobre la página ya montada. No abren secciones nuevas.

| Zona | Cambio |
| --- | --- |
| Performance y Specifications | Se retiró el marco oscuro translúcido (borde y fondo `rgb(13 18 21 / 0.55)`) del diagrama teclado–señal–host y de la vista lateral. Las imágenes quedan sobre el fondo de página. El selector de modos y las filas de la ficha conservan sus líneas. |
| Entradas GSAP | Si una revelación (`id` que empieza por `reveal`) deja opacidad inline en 0 con la sección ya en pantalla, `releaseStuckReveals` en `src/lib/gsap.ts` la completa y limpia `opacity`, `visibility` y `transform`. Ocurre al cargar, al refrescar ScrollTrigger y al terminar el scroll. El cierre arranca con `start: "top bottom"` y limpia la opacidad al terminar. Prueba: `src/lib/gsap.test.ts`. |
| Hero | La limpieza del parallax en `usePointerParallax.ts` mata solo `rotationX` y `rotationY`, para no cortar la entrada `y`/`opacity` del mismo nodo. |
| Switch System | La pila se centra en la columna junto al botón (`diagramSlot`). El control pasó de «Press to explore» / «Pulsa para explorar» a «Simple click» / «Simple clic» (`copy.switchSystem.press`). El botón sigue en mayúsculas por CSS. |
| Materials | Las seis macros recuperan marco: borde cian de 1px (`--color-cyan`) y `box-shadow` de neón ligero, sin panel oscuro. En placa y espuma el marco se ajusta a la imagen, sin el hueco de `object-fit: contain`. El reflejo de puntero se mantiene. |

### Ajustes del 24 de septiembre de 2026

Solo el responsive de Materials, en `Materials.module.css`, por debajo de `959px`. El escritorio no cambia.

| Zona | Cambio |
| --- | --- |
| Fotos | Las seis macros (carcasa, keycaps, perilla, acabado, placa y espuma) comparten proporción `3 / 2`, ancho completo y recorte `object-fit: cover`. Placa y espuma dejan de usar alto automático y `max-height`. |
| Títulos | Cada texto queda debajo de su foto. El de aluminio CNC se alinea al mismo borde izquierdo que el resto (`align-items: stretch`; antes el bloque de la carcasa lo centraba). |
| Distancias | El hueco entre foto y texto es `1rem` (`--space-4`) en los seis bloques. La separación entre bloques de la sección es `2rem` (`--space-8`). |

### Ajustes del 24 de septiembre de 2026 — Architecture

Solo la pila de Architecture, en `Architecture.tsx` y `Architecture.module.css`.

| Zona | Cambio |
| --- | --- |
| Separación | `--layer-step` sube de `clamp(1.35rem, 3.2vw, 2.35rem)` a `clamp(1.85rem, 4.2vw, 3.15rem)`. En anchos de hasta `959px`, de `clamp(1.05rem, 3vw, 1.65rem)` a `clamp(1.4rem, 3.8vw, 2.15rem)`. |
| Opacidad | La capa activa sigue en 1. Las de índice mayor (debajo) quedan en 0.28. Las de índice menor (encima) quedan en 0.12. En la capa 03, 01–02 son más transparentes que 04–08. En la 05, 01–04 son más transparentes que 06–08. |
| Selector | Los índices `01`–`08` van siempre en cian. La única diferencia de la fila activa es la descripción breve. Hasta `959px`, cada fila muestra índice y nombre, la ficha bajo la imagen se oculta y la pila se fija bajo el header, con alto de imagen `min(22vh, 168px)` y `--layer-step` `clamp(0.85rem, 2.6vw, 1.35rem)`. |

### Ajustes del 24 de septiembre de 2026 — Hero

Solo la columna de copy del Hero, en `Hero.tsx` y `Hero.module.css`. El teclado no cambia.

| Zona | Cambio |
| --- | --- |
| Copy | Título, lema y CTA `Reserve XK75` / `Reservar XK75` siguen igual. En escritorio el grupo (título, lema, botón y las cuatro especificaciones) se equilibra con el botón como centro vertical. |
| Features | En escritorio quedan debajo del título, en una columna, con el teclado a la derecha. Hasta `959px` el teclado queda entre el título y las cuatro especificaciones. Entre `561px` y `959px` forman una grilla 2×2; hasta `560px`, una columna. |

## Archivos y organización

Gestor: npm. Punto de entrada: `index.html` → `src/main.tsx` → `src/App.tsx`.

### Entrada y página

| Ruta | Responsabilidad |
| --- | --- |
| `index.html` | HTML base, título y favicon. |
| `src/main.tsx` | Montaje de React, `lang` inicial, registro de GSAP, estilos globales. |
| `src/App.tsx` | Header, secciones construidas, footer y metadatos según idioma. |
| `src/App.module.css` | Contenedor de página (fondo transparente). |
| `public/favicon.svg` | Favicon. |

### Secciones

| Ruta | Responsabilidad |
| --- | --- |
| `src/sections/Hero/` | Presentación del producto. |
| `src/sections/Manifesto/` | Filosofía. |
| `src/sections/Architecture/` | Construcción por capas (modo `layers`). |
| `src/sections/SwitchSystem/` | Mecánica de pulsación (modo `photo`). |
| `src/sections/Materials/` | Materiales y acabado (modo `editorial`). |
| `src/sections/Performance/` | Respuesta y conectividad (modo `schematic`). |
| `src/sections/Specifications/` | Ficha técnica (modo `sheet`). |
| `src/sections/Reserve/` | Formulario de reserva conceptual (`#reserve`). |
| `src/sections/FinalStatement/` | Cierre del producto; CTA de reserva a `#reserve`. |

Cada sección usa CSS Modules propios.

### Componentes y hooks

| Ruta | Responsabilidad |
| --- | --- |
| `src/components/Header/` | Marca, navegación por anclas y menú burger en móvil. |
| `src/components/Footer/` | Marca, navegación, aviso conceptual y línea de derechos (`© 2026`, Donovan NUDRAK). |
| `src/components/LanguageToggle/` | Selector ES/EN. |
| `src/components/Button/` | CTA delineado; admite `href` o botón. |
| `src/components/BlueprintGrid/` | Retícula técnica; no está montada (el Hero dejó de usarla al unificar el fondo). |
| `src/hooks/useLocale.ts` | Idioma y diccionario activo (`useSyncExternalStore`). |
| `src/hooks/useReducedMotion.ts` | `prefers-reduced-motion`. |
| `src/hooks/usePointerParallax.ts` | Inclinación 2.5D del Hero (puntero fino). |
| `src/hooks/usePointerSheen.ts` | Reflejo de puntero sobre fotos de Materials. |
| `src/i18n/localeStore.ts` | Estado de idioma, `localStorage` y `lang`. |
| `src/lib/gsap.ts` | Registro de `useGSAP`, ScrollTrigger y SplitText. |

### Datos y textos

| Ruta | Cuándo usarla |
| --- | --- |
| `src/data/copy/en.ts` y `es.ts` | Textos de interfaz. |
| `src/data/copy/types.ts` | Tipado de los diccionarios. |
| `src/data/navigation.ts` | Enlaces de header y footer a las secciones de la página. |
| `src/data/architecture.ts` | IDs de capas, orden de apilado y rutas de `xk75-layer-*.png`. |
| `src/data/switches.ts` | IDs de piezas del mecanismo. |
| `src/data/materials.ts` | IDs, códigos y modo visual de cada material. |
| `src/data/performance.ts` | IDs y tipo de señal de los modos de conexión. |
| `src/data/specifications.ts` | Grupos e IDs de la ficha técnica. |
| `src/data/resources.ts` | Inventario de recursos; no importar archivos inexistentes. |

### Estilos

| Ruta | Cuándo usarla |
| --- | --- |
| `src/styles/tokens.css` | Paleta, tipografía, espacios, header. |
| `src/styles/fonts.css` | WOFF2 locales vía Fontsource (latin). |
| `src/styles/reset.css`, `typography.css`, `animations.css`, `globals.css` | Base global. |

### Recursos

| Ruta | Contenido actual |
| --- | --- |
| `src/assets/backgrounds/` | `background-2.png` (fondo general de página). |
| `src/assets/keyboard/` | Montados: `xk75-hero-assembled.png`, `xk75-manifesto-presence.png`, `xk75-specs-side.png`, `xk75-final-assembled.png` y ocho `xk75-layer-*.png`. |
| `src/assets/switches/` | Montados: seis `xk75-switch-*.png` (stem del despiece = `xk75-switch-stem.png`). |
| `src/assets/materials/` | Montados: seis `xk75-macro-*.png`. |
| `docs/images/` | Maestros PNG de las imágenes montadas, más `Host.png`. |
| `src/assets/diagrams/` | Vacía (solo `.gitkeep`). |
| `docs/` | Documento general, este contexto y PNG de referencia. |

### Configuración

`package.json`, `package-lock.json`, `vite.config.ts`, `tsconfig*.json`, `.oxlintrc.json`, `.gitignore`.

### Dónde cambiar qué

| Cambio | Dónde |
| --- | --- |
| Textos ES/EN | `src/data/copy/en.ts` y `es.ts` (y `types.ts` si cambia la forma). Acentos cian del lema del Hero: `brand.taglineAccents`. Reserva: `copy.reserve`. |
| Colores y escala | `src/styles/tokens.css`. |
| Fuentes | `src/styles/fonts.css` y tokens `--font-*`. Orbitron (`--font-product`) solo en el título `XK75` del Hero. |
| Navegación | `src/data/navigation.ts` + `Header.tsx` / `Footer.tsx` + `copy.nav`. |
| Datos de capas / switch / materiales / conexión / ficha | `architecture.ts`, `switches.ts`, `materials.ts`, `performance.ts`, `specifications.ts` y las claves correspondientes de los diccionarios. |
| Animaciones | La sección afectada y `src/lib/gsap.ts` si hay plugins nuevos. |
| Destino del CTA del Hero | `RESERVE_HREF` en `Hero.tsx` (`#reserve`). |
| Imagen del Hero | `Hero.tsx` (`xk75-hero-assembled.png`). |
| Fondo general de página | `src/styles/globals.css` (`html`) y `src/assets/backgrounds/background-2.png`. |

No hay Next.js, React Router, Redux, Zustand, Context global, Tailwind, Three.js ni Framer Motion.

## Decisiones importantes

### Stack instalado

Comprobado con `npm ls --depth=0`. Node local: **v26.9.0**. npm: **12.0.2**. `engines.node`: `>=22.12.0`. TypeScript 6 (no 7) por compatibilidad con la plantilla de Vite 8.

| Paquete | Versión |
| --- | --- |
| react / react-dom | 19.3.0 |
| typescript | 6.0.3 |
| vite | 8.3.0 |
| @vitejs/plugin-react | 6.1.1 |
| gsap | 3.15.0 |
| @gsap/react | 2.1.2 |
| lucide-react | 1.47.0 |
| oxlint | 1.83.0 |
| vitest | 5.0.1 |
| jsdom | 30.1.0 |
| @fontsource/barlow-condensed, orbitron, inter, ibm-plex-mono | 5.3.0 |

### Idioma

Almacén en módulo + `useSyncExternalStore`. Prioridad: `localStorage` → `navigator.language` (si empieza por `es`) → `en`. `setLocale` actualiza memoria, `lang` y almacenamiento. Si `localStorage` falla, el idioma sigue en memoria.

### Animación

Plugins registrados en `src/lib/gsap.ts`. Las entradas de sección usan `revealFrom` / `revealScrollTrigger` (sin `immediateRender`, sin invalidar al refrescar) para que un salto por ancla no deje la sección a media opacidad. Un `hashchange` completa las revelaciones ya iniciadas o del destino. Si una revelación deja opacidad inline en 0 con la sección ya en pantalla, al refrescar, al terminar el scroll o al cargar, se completa y se limpian `opacity`, `visibility` y `transform`. Las entradas de sección usan `useGSAP` (limpieza al desmontar). Manifesto usa SplitText por líneas. Architecture cambia la capa activa solo con el selector, en escritorio y en móvil. Switch System parte con las piezas separadas; al pulsar las reúne y las vuelve a abrir, y cada clic reinicia esa secuencia. Hero usa parallax solo con puntero fino y hover. Materials anima bloques al entrar en pantalla y aplica un reflejo de puntero fino sobre las fotografías, sin fijar la sección. Performance anima la señal una sola vez al entrar o al cambiar de modo y mata el tween previo. En USB-C y 2.4 GHz el círculo llega al host y queda en opacidad 0. En Bluetooth aparecen los cinco arcos desde el símbolo. No fija la sección. Specifications usa una entrada breve; no fija la sección. Reserve usa una entrada breve; el envío del formulario solo cambia estado local. Final Statement usa una línea de tiempo breve al entrar (imagen, resplandor y textos) que estabiliza la luz cian; arranca cuando la sección entra en pantalla (`top bottom`) y al terminar limpia la opacidad inline. No fija la sección ni anima piezas independientes.

El parallax del Hero usa `gsap.quickTo` con las propiedades canónicas `rotationX` / `rotationY`. El aviso `rotateX` / `rotateY` not eligible for reset se debía a que `quickTo` no convierte alias CSS: CSSPlugin guarda el PropTween como `rotationX`/`rotationY` y `resetTo` buscaba `rotateX`/`rotateY`. Corregido en `usePointerParallax.ts` (también en los `gsap.set` del mismo hook). Parallax y avisos de consola siguen activos.

La limpieza del parallax mata solo `rotationX` y `rotationY`, para no cortar la entrada `y`/`opacity` del mismo nodo del Hero.

### Representación visual

2.5D con imágenes, CSS y SVG. No hay Three.js ni visor 360°. Architecture usa `"layers"` (decisión cerrada): resalte y offset; el despiece al scroll está descartado. Switch System usa `"photo"` (pila de recortes PNG). Materials usa `"editorial"`: las seis piezas, incluida placa y espuma, están en modo `"photo"`. Performance usa `"schematic"` para el host y las trayectorias. Hero y Manifesto muestran el recorte completo, sin máscara degradada. Las imágenes de Architecture, Switch System, Performance y Specifications se muestran sin marco oscuro translúcido (se retiraron borde y fondo de panel). Materials vuelve a enmarcar las macros con un borde cian y un neón ligero, sin el panel oscuro. La sección Control quedó fuera de la página.

### Estado y datos

Estado pequeño y local. Sin backend. Aviso de producto conceptual visible en el footer. El idioma sí se persiste en `localStorage`; no hay guardado de configuración del producto.

## Recursos temporales y limitaciones

### Imágenes

| Uso | Copia en el proyecto | Origen | Notas |
| --- | --- | --- | --- |
| Fondo de página | `src/assets/backgrounds/background-2.png` | `docs/background-2.png` | PNG ~1,6 MB. Estudio metálico fijo. |
| Hero | `src/assets/keyboard/xk75-hero-assembled.png` | `docs/images/xk75-hero-assembled.png` | PNG RGBA 1586×992. Recorte ensamblado. Presentación ampliada (`88rem` / `88vh`); sin máscara. |
| Manifesto | `src/assets/keyboard/xk75-manifesto-presence.png` | `docs/images/xk75-manifesto-presence.png` | PNG 1585×992. Vista cenital; tecla `RK75`. Presentación ampliada (`64rem` / `78vh`); sin máscara ni fade. |
| Architecture | ocho `src/assets/keyboard/xk75-layer-*.png` | `docs/images/` | ~1585×992. Offset igual (`--layer-step`) y resalte por opacidad. Cámaras no registradas; batería ortográfica. |
| Switch | seis `src/assets/switches/xk75-switch-*.png` | `docs/images/` | Pila 1254×1254 con alpha. |
| Materials | seis `src/assets/materials/xk75-macro-*.png` | `docs/images/` | Macros 1536×1024, placa y espuma incluidas. |
| Performance teclado | `src/assets/keyboard/xk75-hero-assembled.png` | `docs/images/xk75-hero-assembled.png` | Reutilizado como origen del diagrama. |
| Performance host | `src/assets/diagrams/Host.png` | `docs/images/Host.png` | Monitor 1536×1024. Sustituye al SVG esquemático. |
| Control (retirada) | — | — | La sección no está en la página. Los PNG `xk75-control-*` se eliminaron. |
| Specifications | `src/assets/keyboard/xk75-specs-side.png` | `docs/images/xk75-specs-side.png` | Vista lateral 1942×809. |
| Final Statement | `src/assets/keyboard/xk75-final-assembled.png` | `docs/images/xk75-final-assembled.png` | Composición de cierre 1586×992. |

Maestros en `docs/images/` de las imágenes montadas. Los PNG y SVG que no se usaban se eliminaron, tanto en `src/assets/` como los bocetos sueltos de `docs/`. La explosión 2.5D de Architecture no se hará. Control no se recablea.

### Fuentes

Barlow Condensed 600/700, Orbitron 700 (solo el título `XK75` del Hero, token `--font-product`), Inter 400/500 e IBM Plex Mono 400/500, subconjunto latin, vía Fontsource. Fallbacks de sistema en tokens.

### Limitaciones conocidas (no son fallos de build)

- Branding `RK75` aún visible en la vista cenital del Manifesto.
- Architecture: modo resalte aceptado; despiece al scroll descartado.
- Switch System fotográfico, sin variantes LINEAR/TACTILE/SILENT ni audio.
- Materials: macros PNG; sin recodificar a AVIF.
- Performance: sin polling rate, latencia, autonomía ni compatibilidad de sistemas; la señal es conceptual.
- Control: sección retirada de la landing. Los PNG `xk75-control-*` se eliminaron.
- Specifications: sin dimensiones, peso, montaje, batería, autonomía, latencia, compatibilidad de sistemas ni contenido de la caja. Las cotas decorativas de las imágenes no forman parte de la ficha.
- Reserve: formulario conceptual; no hay envío, persistencia, pagos ni reservas reales.
- Final Statement: composición dedicada. El cierre ya no tiene el CTA de reserva. La entrada ya no debe dejar la sección en opacidad 0 si el disparo de scroll no termina.
- Footer: sin autoría ni enlace al repositorio (esos datos no existen en el proyecto); se omiten en lugar de inventarlos.
- PNG sin optimizar a AVIF/WebP.
- Sin git, README público ni despliegue.
- `dist/` es salida de compilación, no fuente.

No hay errores de typecheck, lint o build pendientes de esta etapa. Las decisiones abiertas de `DOC-KX-75.md` (ficha física, switches, CTA restantes, dominio, etc.) **no bloquean** la construcción.

## Ejecución y validación

```bash
npm install
npm run dev          # desarrollo (Vite; puerto habitual 5173)
npm run dev -- --host 0.0.0.0 --port 5173   # LAN; p. ej. http://192.168.1.105:5173/
npm run typecheck
npm run lint
npm test             # Vitest; --passWithNoTests
npm run build
npm run preview
```

Verificaciones ejecutadas durante la construcción (typecheck, lint y build: OK). Recambio de imágenes seguras y Architecture en modo `layers`: `npm run typecheck` y `npm run lint` OK. Los ajustes de tamaño de Hero/Manifesto y el offset de Architecture son solo CSS. Vitest tiene una prueba, `src/lib/gsap.test.ts`, para una revelación dejada en opacidad 0; el script sigue con `--passWithNoTests`. No asumir que un servidor de desarrollo sigue activo: el último Vite en `127.0.0.1:5173` se cerró.

Corrección del aviso GSAP del Hero (20 de septiembre de 2026): reproducción aislada con GSAP 3.15.0 (jsdom) — `quickTo("rotationX"|"rotationY")` ya no emite el aviso al invocar tilt; typecheck, lint y build OK. Sin comprobación en navegador de inclinación, retorno al salir, ES/EN ni movimiento reducido.

## Continuidad

El usuario da instrucciones en español, en texto plano y listas. Cursor implementa, entrega un reporte y espera la siguiente indicación. No adelantar secciones ni abrir la etapa de iteración sin que se pida.

Al retomar: leer instrucciones del repo, `DOC-KX-75.md` y este contexto; inspeccionar los archivos de la sección a construir; no inventar cifras, capas o variantes; no referenciar archivos de imagen inexistentes.

Hay **nueve** secciones en la página (incluye Reserve). Control quedó fuera. El set de PNG de `docs/images/` corresponde a las imágenes montadas. `xk75-control-*` y los stems de variante se eliminaron. Architecture no tendrá explosión al scroll. Los ajustes del 23 de septiembre de 2026 están en la sección homónima: marcos de Performance y Specifications, revelaciones que ya no quedan en opacidad 0, centrado y texto del switch, y marco cian de Materials. Los del 24 de septiembre unifican, solo en móvil, tamaño, alineación de títulos y huecos de Materials; en Architecture separan las capas (encima 0.12, debajo 0.28), dejan el selector manual y, hasta `959px`, fijan la pila con la lista compacta. Switch System usa ese selector sin tocar la imagen. Performance pasa Bluetooth a cinco arcos con el símbolo en el origen; quita los recuadros de USB-C y 2.4 GHz; el círculo de esas dos líneas desaparece al terminar; en escritorio agranda teclado y host. La iteración general de la página espera instrucción. Cuando la iteración, un recurso definitivo o una decisión importante cambien el estado, actualizar `docs/CONTEXT.md`.
