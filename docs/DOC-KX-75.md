# Documento general del proyecto — IMPACT-FRAME XK75

Guía interna para orientar el diseño, la preparación de recursos y el desarrollo de la landing. Este documento reúne las decisiones del boceto; no es el README público ni una documentación de funcionalidades ya implementadas.

| Dato | Definición |
| --- | --- |
| Archivo | `DOC-KX-75.md` |
| Producto ficticio | IMPACT-FRAME XK75 |
| Identificador visual | `IF-XK75 / REV.01` |
| Lema | Engineering for Minds That Build. |
| Equivalente en español | Ingeniería para mentes que construyen. |
| Tipo de proyecto | Landing promocional experiencial de lanzamiento de un solo producto |
| Alcance técnico | Frontend estático, interactivo y responsive |
| Finalidad del documento | Referencia de trabajo durante el desarrollo |
| Documento de origen | `KX75-boceto.md` |

El archivo conserva el nombre solicitado, `DOC-KX-75.md`; el nombre del producto se mantiene como **XK75**, de acuerdo con el boceto.

## Índice

1. [Visión, objetivos y alcance](#1-visión-objetivos-y-alcance)
2. [Stack y organización técnica](#2-stack-y-organización-técnica)
3. [Dirección visual](#3-dirección-visual)
4. [Estructura de la landing y experiencia de usuario](#4-estructura-de-la-landing-y-experiencia-de-usuario)
5. [Recursos visuales y representación 2.5D](#5-recursos-visuales-y-representación-25d)
6. [Identidad del producto y base narrativa](#6-identidad-del-producto-y-base-narrativa)
7. [Calidad, accesibilidad y rendimiento](#7-calidad-accesibilidad-y-rendimiento)
8. [Orden de desarrollo sugerido](#8-orden-de-desarrollo-sugerido)
9. [Decisiones pendientes](#9-decisiones-pendientes)

## 1. Visión, objetivos y alcance

### 1.1. Definición del proyecto

IMPACT-FRAME XK75 será una landing promocional interactiva de un teclado ficticio. La experiencia presentará progresivamente su identidad, propósito, estructura, mecanismo, materiales y capacidades.

El formato será una *single-product launch landing* con narrativa guiada por desplazamiento (*scrollytelling*). El visitante descubrirá el producto a medida que recorre la página, alternando lectura, exploración visual e interacciones sencillas.

No funcionará como tienda ni como catálogo. La finalidad es demostrar una experiencia de lanzamiento de hardware mediante diseño y desarrollo frontend.

### 1.2. Objetivos

- Presentar un producto tecnológico con una identidad comercial coherente.
- Demostrar diseño visual avanzado y dirección de arte.
- Construir animaciones frontend con lenguaje mecánico y preciso.
- Comunicar conceptos de ingeniería de forma breve y comprensible.
- Integrar recursos visuales, narrativa y comportamiento responsive en una experiencia de lanzamiento.

### 1.3. Alcance base

El proyecto comprende una página con nueve secciones, navegación interna, animaciones vinculadas al scroll y representación 2.5D. Los contenidos y las especificaciones se almacenarán localmente. La personalización interactiva (sección Control) queda **fuera de la landing**. La reserva es conceptual: no hay backend, pagos ni lista de espera real.

La exploración se basará en imágenes y transformaciones CSS. No requiere modelos 3D ni permite una rotación libre del producto.

Quedan fuera del alcance:

- Backend, base de datos, autenticación y APIs externas.
- Comercio electrónico, pagos, reservas reales y gestión de pedidos.
- Guardado de configuraciones o sincronización entre dispositivos.
- Conexión con hardware, remapeo real de teclas y configuración de firmware.
- Motor 3D, renderizado WebGL y visor de producto de 360°.

Las prestaciones del teclado pertenecen a un concepto ficticio. No deben presentarse como resultados de pruebas físicas ni como capacidades verificadas de un producto comercial existente.

### 1.4. Cómo interpretar esta guía

Las decisiones base del boceto se agrupan por área. Los elementos planteados como opcionales conservan ese carácter: variantes de switches, sonido y reserva conceptual, entre otros. Las cifras, recursos o elecciones todavía ausentes aparecen al final como pendientes.

Los criterios de implementación y el orden de trabajo añadidos para hacer útil esta guía no implican ampliar el alcance ni que el desarrollo haya comenzado.

## 2. Stack y organización técnica

### 2.1. Stack base del boceto

| Área | Tecnología | Responsabilidad |
| --- | --- | --- |
| Interfaz | React 19 | Componentes, secciones y estado de interacción |
| Lenguaje | TypeScript | Tipado del contenido y de los controles |
| Desarrollo y compilación | Vite | Entorno local y generación del sitio estático |
| Estilos | CSS Modules + CSS global | Estilos por componente y tokens compartidos |
| Animación | GSAP + ScrollTrigger | Secuencias, despieces y sincronización con scroll |
| Integración de animaciones | `@gsap/react` | Integración con el ciclo de vida de React |
| Iconografía y gráficos | Lucide React + SVG propios | Iconos, líneas, retículas y diagramas técnicos |
| Calidad de código | TypeScript + Oxlint | Comprobación de tipos y análisis estático |
| Pruebas | Vitest | Lógica interactiva básica |
| Repositorio | GitHub | Control de versiones |
| Despliegue | GitHub Pages + GitHub Actions | Publicación estática automatizada |
| Dominio | Subdominio de `nudrak.dev` | Dirección final, pendiente de elegir |

Versiones registradas al inicializar la base del proyecto:

| Paquete | Versión de trabajo |
| --- | --- |
| React / React DOM | 19.3.x |
| TypeScript | 6.0.x |
| Vite | 8.3.x |
| GSAP | 3.15.x |
| `@gsap/react` | 2.1.x |
| Lucide React | 1.47.x |
| Oxlint | 1.83.x |
| Vitest | 5.0.x |
| Node | 22.12 o superior (entorno local comprobado: 26.9.0) |

### 2.2. Responsabilidades de React y TypeScript

React gestionará las secciones, la navegación y el contenido técnico reutilizable. El estado será pequeño y local; no se incorporarán Redux, Zustand ni un Context global.

TypeScript organizará los datos de forma consistente. Por ejemplo, una variante de switch incluirá identificador, nombre, tipo, fuerza de actuación, recorrido y color. Los valores y sus unidades se definirán antes de mostrarlos en la interfaz.

Vite cubrirá el desarrollo y la compilación. El resultado será un sitio estático sin API ni necesidad de renderizado en servidor.

### 2.3. Organización inicial

Las rutas siguientes describen una estructura prevista, no archivos ya creados.

| Ruta | Contenido |
| --- | --- |
| `src/assets/keyboard/` | Vistas del teclado y capas transparentes |
| `src/assets/switches/` | Componentes y variantes del switch |
| `src/assets/materials/` | Macros y texturas de materiales |
| `src/assets/diagrams/` | Recursos gráficos técnicos |
| `src/components/` | `Header`, `Button`, `TechnicalLabel` y `BlueprintGrid` |
| `src/sections/` | Componentes de las nueve secciones de la landing |
| `src/data/switches.ts` | Datos locales de las variantes, si se incorporan |
| `src/data/specifications.ts` | Ficha técnica conceptual centralizada |
| `src/hooks/useReducedMotion.ts` | Preferencia de movimiento reducido |
| `src/hooks/usePointerParallax.ts` | Inclinación limitada por puntero |
| `src/styles/` | Estilos globales y tokens |
| `src/App.tsx` | Composición general de la página |
| `src/main.tsx` | Punto de entrada |

Las secciones de la landing son `Hero`, `Manifesto`, `Architecture`, `SwitchSystem`, `Materials`, `Performance`, `Specifications`, `Reserve` y `FinalStatement`. `Control` quedó descartada.

### 2.4. Organización de estilos

Los estilos globales se repartirán entre:

- `reset.css`: normalización inicial.
- `tokens.css`: colores, familias tipográficas y variables compartidas.
- `typography.css`: jerarquía y estilos de texto.
- `animations.css`: animaciones CSS reutilizables.
- `globals.css`: reglas generales de la página.

Cada componente o sección tendrá su CSS Module cuando lo necesite, como `Hero.module.css`, `Architecture.module.css` o `Specifications.module.css`.

La paleta de la sección 3 será la referencia única para los tokens. Sustituye los valores preliminares ligeramente distintos que aparecían en el ejemplo de CSS del boceto.

### 2.5. Organización de animaciones

GSAP gestionará entradas del hero, secuencias temporizadas, movimiento de componentes, iluminación, parallax limitado y ensamblajes. ScrollTrigger sincronizará el progreso con el desplazamiento, fijará las secciones necesarias y activará textos y capas.

La duración del recorrido, las distancias y los puntos de activación se ajustarán durante la implementación. Los valores de un ejemplo de código no se consideran requisitos definitivos.

Como criterio de implementación, las animaciones y sus eventos deberán limpiarse al desmontar los componentes o cambiar de variante responsive, evitando secuencias duplicadas.

### 2.6. Tecnologías excluidas

No se utilizarán Next.js, React Router, Redux, Zustand, Tailwind, Three.js, Framer Motion ni bibliotecas de componentes visuales. La página usará navegación por anclas, estilos propios y un único sistema principal de animación: GSAP.

## 3. Dirección visual

### 3.1. Concepto artístico

La estética será **industrial tecnológica premium**: negro grafito, superficies metálicas y luz cian contenida. Combinará fotografía comercial de hardware con el lenguaje de un plano de ingeniería.

Las referencias conceptuales son la ingeniería de precisión, el hardware mecanizado, la documentación técnica, el brutalismo controlado y la oscuridad sobria. El teclado será siempre el protagonista.

Se evitarán el cyberpunk, la estética militar, el RGB arcoíris, el neón excesivo, los fondos urbanos, el vidrio y blur generalizados, las tarjetas flotantes y los efectos decorativos sin función.

### 3.2. Paleta principal

| Color | Código | Uso |
| --- | --- | --- |
| Negro estructural | `#050708` | Fondo principal |
| Grafito | `#0D1215` | Secciones y superficies |
| Gunmetal | `#1B2429` | Paneles y componentes |
| Acero | `#354047` | Bordes y detalles metálicos |
| Blanco frío | `#EDF3F5` | Títulos y texto principal |
| Gris técnico | `#B6C2C6` | Texto secundario |
| Cian eléctrico | `#24D8F0` | Acento principal e iluminación |
| Azul técnico | `#168BFF` | Profundidad del RGB y estados activos |

Distribución visual aproximada: 70 % negro y grafito, 20 % blanco, gris y metal, y 10 % cian y azul.

El gradiente `linear-gradient(135deg, #24d8f0, #168bff)` se reservará para iluminación, reflejos y estados interactivos. El cian actuará como señal técnica y foco de atención, no como decoración constante.

### 3.3. Tipografía

| Función | Familia propuesta | Tratamiento |
| --- | --- | --- |
| Títulos | Barlow Condensed | Condensada, industrial y en mayúsculas |
| Título de producto `XK75` | Orbitron | Solo el `h1` del Hero; token `--font-product` |
| Contenido | Inter | Neutral y legible |
| Datos y etiquetas | IBM Plex Mono | Monoespaciada y técnica |

Se utilizan archivos locales WOFF2 vía Fontsource (subconjunto latin). Orbitron 700 queda reservada al título `XK75` del Hero.

### 3.4. Geometría y composición

- Formas rectangulares, esquinas rectas o radios máximos de `4px`.
- Bordes de `1px` y separadores finos.
- Grandes áreas de espacio negativo y composiciones asimétricas.
- Alineación mediante retícula; la cuadrícula podrá ser visible cuando aporte contexto.
- Composiciones editoriales para materiales y producto, evitando una sucesión de tarjetas genéricas.

Las superficies combinarán metal cepillado, aluminio grafito, grano fino, reflejos fríos, bordes precisos y sombras duras pero discretas.

### 3.5. Lenguaje gráfico

Elementos recurrentes: cuadrículas técnicas, líneas de medición, coordenadas, cruces de alineación, números de revisión, identificadores de piezas, diagramas estructurales y etiquetas monoespaciadas. Las etiquetas numeradas de sección (`Section 01 — Hero`, `03 / ARCHITECTURE`, etc.) se retiraron de la UI.

Ejemplos de etiquetas:

- `IF-XK75 / REV.01`
- `SECTION 03 — ARCHITECTURE`
- `COMPONENT 04 / ACOUSTIC LAYER`
- `75% FORM`
- `CNC ALUMINUM`

Las mediciones que representen datos del producto deberán coincidir con la ficha técnica conceptual. No se tomarán como especificaciones válidas los números decorativos de una imagen de referencia.

### 3.6. Botones e imágenes

Los botones serán principalmente delineados, con un radio de `4px`. Al interactuar, el borde permanece en cian y aparece una iluminación interior mínima. No tienen flecha, rebotes ni movimientos elásticos.

Las imágenes usarán fondos oscuros, encuadres amplios, vistas en tres cuartos o neutrales, macros de materiales, despieces técnicos, iluminación lateral cian y reflejos metálicos controlados.

### 3.7. Lenguaje de movimiento

El movimiento imitará una máquina: preciso, secuencial y sin rebotes. Predominarán recorridos lineales, aceleraciones cortas, piezas que se alinean, líneas que se dibujan y luces que se activan por segmentos.

La animación reforzará la lectura del producto; no deberá ocultar contenido ni convertir el recorrido en una experiencia gamer caótica.

## 4. Estructura de la landing y experiencia de usuario

### 4.1. Recorrido general

| Orden | Sección | Papel en la narrativa |
| --- | --- | --- |
| 1 | Hero | Presentar el producto y su identidad |
| 2 | Manifesto | Explicar su propósito y a quién representa |
| 3 | Architecture | Mostrar cómo está construido |
| 4 | Switch System | Explicar el mecanismo de pulsación |
| 5 | Materials | Comunicar materiales y acabado |
| 6 | Performance | Presentar respuesta y conectividad |
| 7 | Specifications | Reunir la ficha técnica |
| 8 | Reserve | Recoger interés conceptual, sin reserva real |
| 9 | FinalStatement | Cerrar la experiencia y volver a la exploración |

El scroll será el conductor principal. Algunas secciones avanzarán normalmente y otras permanecerán fijas mientras se desarrolla una secuencia. Architecture será el momento visual central.

### 4.2. Navegación

Header fijo y discreto con la marca `IMPACT—FRAME` (enlace a `#hero`) y enlaces a Manifiesto, Architecture, Switches, Materials, Performance, Specs, Reserva y Cierre. Sin CTA `Explore XK75`. Selector ES/EN solo con texto, sin icono.

Los enlaces llevan a las secciones mediante desplazamiento suave. En anchos estrechos la navegación pasa a un menú burger a la izquierda de la marca: el panel cubre la mitad izquierda bajo el header y entra desde la izquierda. Las secciones se agrupan en la zona superior media del panel. La navegación debe seguir funcionando sin depender de las animaciones.

### 4.3. Hero — Presentación del producto

**Contenido:** IMPACT-FRAME (en el `h1` solo para lectores de pantalla), XK75, lema y CTA `Reserve XK75` / `Reservar XK75` hacia `#reserve`. Sin etiqueta de sección, sin identificador `IF-XK75 / REV.01` y sin marca sobre la imagen. El identificador permanece en Specifications.

En el lema, `Engineering`/`Ingeniería`, `Minds`/`mentes` y `Build`/`construyen` van en cian.

Las cuatro especificaciones resumidas (`75% FORM`, `CNC ALUMINUM`, `HOT-SWAP` y `2.4G / USB-C`) quedan, en escritorio, debajo del título, el lema y el CTA, en lista vertical, con el teclado a la derecha. Hasta `959px` el teclado queda entre ese bloque y las especificaciones. Entre `561px` y `959px` forman una grilla de 2×2; hasta `560px`, una columna.

**Comportamiento:** el teclado aparecerá lentamente desde la oscuridad. El cursor provocará una inclinación 2.5D mínima, sin rotación completa. El título `XK75` usa Orbitron.

### 4.4. Manifesto — Filosofía del producto

**Contenido base:**

> Tools should disappear into the work.
>
> XK75 is engineered for those who design systems, solve problems and build what others depend on.

La sección introducirá la personalidad de IMPACT-FRAME y el usuario al que representa.

**Comportamiento:** texto grande revelado por líneas; el fondo pasará de negro a una textura de metal grafito. El teclado permanecerá parcialmente visible como silueta o imagen secundaria.

### 4.5. Architecture — Construcción por capas

**Contenido:** keycaps, switches, marco superior, placa, espuma acústica, PCB, batería y módulo de control, y carcasa inferior.

**Comportamiento (decisión cerrada):** el despiece al scroll (pin, explosión vertical y reensamblaje) queda **descartado**. Architecture usa el modo de resalte: ocho fotografías de capa con un desplazamiento vertical uniforme; la capa activa se muestra a opacidad plena. Las capas que quedan debajo se atenúan a ~0.28; las que quedan encima, más, a ~0.12. Escritorio y móvil: la capa activa cambia solo al pulsar el selector. Los índices van siempre en cian; la descripción breve solo aparece en la fila activa. La pila sigue fija en escritorio y, hasta `959px`, bajo el header, con la lista compacta (índice y nombre; la ficha bajo la imagen se oculta). No se exige que las capas compartan cámara para un ensamblaje 2.5D. Las capas se muestran sin marco oscuro translúcido.

La representación sigue siendo 2.5D en el resto de la página (imágenes, CSS, SVG). Las keycaps pueden agruparse en una sola capa.

### 4.6. Switch System — Mecánica de pulsación

**Contenido:** despiece individual con keycap PBT, carcasa superior, stem, resorte, contacto y carcasa inferior.

**Comportamiento base:** al activar la tecla, el conjunto se comprimirá y regresará a su posición. La interacción deberá poder ejecutarse con puntero y teclado. La pila fotográfica se muestra sin marco oscuro translúcido y centrada con el botón. El control dice `Simple click` / `Simple clic`. La lista de piezas es un selector compacto: índices siempre en cian y descripción solo en la pieza activa. Elegir una pieza no cambia la imagen.

**Ampliación propuesta en el boceto:** variantes `LINEAR`, `TACTILE` y `SILENT`. Al seleccionar una, cambiarían el color del stem, la fuerza de actuación, el recorrido, la descripción y la curva de respuesta. Su inclusión y sus datos quedan por confirmar.

El sonido será opcional y estará desactivado inicialmente. No se iniciará audio sin una acción explícita del visitante.

### 4.7. Materials — Materiales y acabado

**Contenido:** aluminio CNC, keycaps PBT, placa metálica, espuma acústica, perilla mecanizada y textura de la carcasa.

**Comportamiento:** imágenes macro ocuparán grandes áreas, con un marco cian de 1px y un neón ligero, sin panel oscuro. En dispositivos con puntero, una variación de luz recorrerá lentamente las superficies para destacar su textura. En escritorio la composición sigue siendo editorial: el texto de aluminio CNC queda junto a la carcasa. Hasta `959px`, las seis fotos comparten proporción `3 / 2` con recorte, el título de cada una queda debajo y alineado al mismo borde, y el hueco entre foto y texto es de `1rem`.

La composición será editorial, con detalles técnicos y mediciones coherentes con la ficha conceptual, no una cuadrícula de tarjetas comunes.

### 4.8. Performance — Respuesta y conectividad

**Contenido previsto:** polling rate, latencia, USB-C, conexión de 2.4 GHz, Bluetooth, autonomía y compatibilidad.

**Comportamiento:** datos breves acompañados de líneas y diagramas. USB-C dibuja una línea continua y 2.4 GHz una punteada con pulsos; un círculo recorre cada línea y desaparece al llegar al host. Ninguno de los dos modos muestra un recuadro al final. Bluetooth usa cinco arcos de circunferencia con el símbolo de Bluetooth en el origen y el arco mayor hacia el host. En escritorio ese abanico, con su marco de esquinas, queda centrado en el hueco y un poco hacia el teclado; el teclado llega a `min(42vh, 360px)` y el host a `17rem`. En móvil el abanico es vertical y las imágenes siguen en `min(24vh, 180px)` y `11.5rem`. El diagrama se muestra sin marco oscuro translúcido.

La prioridad será la legibilidad. La sección no funcionará como dashboard ni como medición en tiempo real. Las cifras y los detalles de cada modo de conexión están pendientes.

### 4.9. Control — Personalización

**Decisión cerrada:** esta sección queda **fuera de la landing**. No se implementa el bloque «Make it yours» / «Hazlo tuyo». La iluminación y la perilla pueden seguir apareciendo como datos en Specifications; no hay personalización interactiva en la página.

El remapeo y los perfiles no forman parte del alcance.

### 4.10. Specifications — Ficha técnica

**Contenido:** formato, dimensiones, peso, materiales, montaje, switches, keycaps, conectividad, batería, compatibilidad y contenido conceptual de la caja.

**Comportamiento:** sección calmada, con animación reducida y prioridad de lectura. Podrá combinar una vista lateral del teclado con una tabla técnica; en móvil se presentará en bloques legibles. La vista lateral se muestra sin marco oscuro translúcido.

Los datos procederán de una fuente local centralizada para evitar diferencias entre esta ficha y las secciones anteriores.

### 4.11. Reserve — Reserva conceptual

**Decisión cerrada:** sección propia entre Specifications y Final Statement. Formulario de nombre y email. Al enviar, solo muestra el aviso de producto ficticio. No envía datos, no los guarda y no crea una reserva.

### 4.12. FinalStatement — Cierre

**Contenido:** imagen limpia del producto ensamblado, firma `IMPACT—FRAME // XK75` y lema `ENGINEERING FOR MINDS THAT BUILD.`.

El CTA es `BACK TO TOP` / `VOLVER ARRIBA`, dirigido a `#hero`. El CTA `RESERVE XK75` se retiró del cierre.

**Comportamiento:** último ensamblaje, estabilización de la luz cian y desaparición gradual de los elementos visuales secundarios.

### 4.13. Footer

Contenido: IMPACT-FRAME, lema, navegación a las secciones de la página y aviso de producto conceptual. Al final, la marca, `© 2026`, la fórmula de derechos y el autor `Donovan NUDRAK`. Sin línea de tecnologías ni enlace de vuelta a `#hero` en el footer: ese retorno queda en el cierre. Sin enlace al repositorio.

El aviso de ficción permanece visible en la sección Reserve y en el footer.

### 4.14. Responsive y movimiento reducido

En escritorio se utilizarán secciones fijas, parallax moderado y secuencias ligadas al scroll.

En móvil:

- El despiece será vertical y más corto.
- Se eliminará el parallax por cursor.
- Se reducirán las distancias de las animaciones.
- Las tablas pasarán a bloques de datos.
- Se evitarán efectos costosos.
- El teclado completo permanecerá dentro del encuadre en las vistas generales; los macros conservarán su función de detalle.

Con `prefers-reduced-motion`, las secuencias complejas se sustituirán por estados estáticos o transiciones simples. El contenido deberá poder consultarse sin completar una animación prolongada.

## 5. Recursos visuales y representación 2.5D

### 5.1. Principio de representación

La profundidad será una ilusión visual construida con capas rasterizadas, perspectiva CSS y animación. No habrá un modelo 3D manipulable.

Una imagen del teclado desensamblado puede servir como referencia o composición estática, pero no sustituye los archivos independientes necesarios para mover cada capa.

### 5.2. Capas previstas del teclado

| Archivo previsto | Contenido |
| --- | --- |
| `keyboard-keycaps.webp` | Conjunto de keycaps en una sola capa |
| `keyboard-switches.webp` | Conjunto de switches |
| `keyboard-frame.webp` | Marco superior |
| `keyboard-plate.webp` | Placa |
| `keyboard-foam.webp` | Espuma acústica |
| `keyboard-pcb.webp` | PCB |
| `keyboard-battery.webp` | Batería y módulo de control, agrupados según la composición |
| `keyboard-bottom.webp` | Carcasa inferior |

Estos nombres son una convención prevista, no un inventario de archivos ya disponibles.

Para un despiece 2.5D alineado, las capas deberían compartir cámara, escala, lienzo e iluminación. Esa vía quedó **descartada** para Architecture: el modo de resalte no requiere registro de cámara. Las imágenes se superponen con CSS; GSAP anima opacidad (y el offset fijo es CSS). El relieve aparente no permitirá mostrar ángulos que no estén en los recursos.

### 5.3. Recursos adicionales

- Vista principal del producto ensamblado para el hero.
- Recurso de filosofía con espacio suficiente para el texto.
- Piezas independientes de la tecla y del switch.
- Macros de materiales y acabado.
- Vista lateral para la ficha técnica.
- Vista limpia o composición de cierre.
- Variantes o capas que permitan simular acabados e iluminación.
- SVG y elementos CSS para retículas, mediciones, curvas y diagramas.

Las imágenes conceptuales sirven como dirección artística. Antes de integrarlas se revisarán continuidad del modelo, distribución de teclas, proporciones, perilla, iluminación y legibilidad de cualquier texto.

### 5.4. Formatos y carga

| Recurso | Formato previsto |
| --- | --- |
| Imágenes grandes y macros | AVIF |
| Componentes con transparencia | WebP |
| Iconos, retículas, mediciones y diagramas | SVG y CSS |
| Tipografías locales | WOFF2 |

Se precargará la imagen principal del hero. Las imágenes posteriores usarán carga diferida, procurando que los recursos de una secuencia estén disponibles antes de iniciar su animación.

## 6. Identidad del producto y base narrativa

Esta sección establece el lore mínimo para dar coherencia al contenido. No es una historia extensa ni obliga a mostrar todos sus párrafos en la landing.

### 6.1. Origen y problema

Dentro del concepto ficticio, el XK75 nace como respuesta a teclados gaming que priorizan apariencia e iluminación sobre estructura, estabilidad y mantenimiento. El objetivo es crear un periférico compacto con la solidez de una herramienta industrial.

### 6.2. Filosofía del fabricante

Cada componente debe cumplir una función. IMPACT-FRAME defiende durabilidad, reparación y honestidad técnica: la ingeniería no se oculta, forma parte de la identidad del producto.

### 6.3. Significado del nombre

| Elemento | Significado narrativo |
| --- | --- |
| IMPACT | Fuerza de cada pulsación y capacidad de la estructura para controlarla |
| FRAME | Chasis como elemento central del diseño |
| XK | Denominación derivada de *Experimental Keyboard*: plataforma de exploración de configuraciones |
| 75 | Distribución compacta del 75 %, conservando las teclas esenciales |

### 6.4. Proceso e inspiración de ingeniería

La narrativa se apoya en distribución de fuerzas, reducción de vibraciones y ensamblaje por capas. El chasis mecanizado, los componentes reemplazables y el aislamiento acústico representan la búsqueda de una pulsación firme y consistente.

Estas ideas orientan el diseño y el relato; no acreditan ensayos, fabricación ni rendimiento reales.

### 6.5. Usuario objetivo

Desarrolladores, ingenieros, diseñadores, jugadores y creadores que utilizan el teclado como herramienta principal. Personas que valoran el rendimiento y también la lógica de construcción del objeto.

### 6.6. Principios

| Principio | Promesa conceptual | Expresión en la landing |
| --- | --- | --- |
| Precisión | Respuesta consistente en cada tecla | Mecánica de pulsación y movimientos controlados |
| Resistencia | Estructura orientada al uso intensivo | Chasis, materiales y detalles de acabado |
| Modularidad | Componentes accesibles y reemplazables | Despiece y explicación de capas |
| Control | Comportamiento táctil y acústico configurable | Mecánica de pulsación y ficha de controles |

### 6.7. Relato comercial

El XK75 se presenta como una plataforma de entrada concebida con rigor industrial. Una herramienta para quienes escriben código, construyen sistemas y convierten ideas en estructuras funcionales.

El concepto central es **Engineering for Minds That Build.**

El tono será técnico, sobrio y comprensible. Se priorizarán frases breves vinculadas a componentes y funciones, evitando ciencia ficción exagerada, superlativos sin sustento y afirmaciones de rendimiento no definidas.

El boceto utiliza nombres de secciones y textos comerciales en inglés. La interfaz está en **ES/EN**, con selector en el header y cambio sin recarga. Los nombres propios del producto pueden conservar su forma original.

## 7. Calidad, accesibilidad y rendimiento

Los siguientes criterios traducen la intención del boceto en verificaciones prácticas para el desarrollo.

### 7.1. Validación técnica

- Comprobación de tipos con TypeScript.
- Análisis estático con Oxlint.
- Pruebas con Vitest para cambios de selección, valores de controles y lógica interactiva implementada.
- Compilación de producción sin errores.
- Revisión con Lighthouse, sin fijar una puntuación antes de disponer del sitio.
- Revisión manual responsive y de `prefers-reduced-motion`.

### 7.2. Interacción y accesibilidad

- Navegación por anclas y CTA con destinos claros.
- Botones y selectores utilizables con teclado y foco visible.
- Controles con etiquetas comprensibles; el color no será la única señal de selección.
- Texto legible sobre fondos, retículas y texturas.
- Descripciones alternativas útiles para imágenes informativas; decoración separada del contenido.
- Ninguna funcionalidad esencial dependiente del hover, del sonido o de una secuencia animada.
- Aviso visible de producto conceptual y ausencia de pagos o reservas reales.

### 7.3. Rendimiento visual

Las imágenes se dimensionarán y optimizarán según su uso. Se controlará el coste de transparencias, brillos, texturas y capas simultáneas, especialmente en móvil.

Se priorizarán transformaciones y opacidad para el movimiento. El parallax será limitado y los efectos complejos se simplificarán cuando interfieran con la fluidez o la lectura.

### 7.4. Criterio de finalización

La versión base estará lista cuando las nueve secciones tengan contenido coherente, los enlaces y controles implementados funcionen, los recursos mantengan continuidad visual, la experiencia sea utilizable en móvil y con movimiento reducido, y el sitio supere sus verificaciones técnicas y pueda publicarse como contenido estático.

Las funciones opcionales no bloquearán la entrega si se decide excluirlas y se actualiza esta guía.

## 8. Orden de desarrollo sugerido

Esta secuencia organiza el trabajo; no fija fechas ni presupone tareas terminadas.

| Etapa | Trabajo principal | Resultado esperado |
| --- | --- | --- |
| 1. Cierre de contenido y recursos | Resolver datos imprescindibles, confirmar textos e inventariar imágenes | Base narrativa y técnica consistente; necesidades de recursos identificadas |
| 2. Base del proyecto | Inicializar stack, estructura, tokens, tipografía y componentes compartidos | Página estructural navegable |
| 3. Maquetación estática | Construir las nueve secciones, header, footer y variantes responsive | Recorrido completo legible sin animaciones complejas |
| 4. Prueba 2.5D | Descartada para Architecture: no se alinea un set para explosión al scroll. El resalte con las capas actuales es la representación aceptada. | Architecture en modo resalte |
| 5. Movimiento e interacción | Integrar GSAP, scroll, controles y variantes opcionales aprobadas | Experiencia interactiva completa |
| 6. Validación y publicación | Revisar accesibilidad, rendimiento, pruebas, compilación y despliegue | Landing estática publicada y documento actualizado |

El despiece al scroll de Architecture no se validará ni se implementará. La interacción central de esa sección es el resalte de capa.

## 9. Decisiones pendientes

Estos puntos no están resueltos por el boceto. Se completarán sin sustituirlos por cifras, recursos o funcionalidades asumidas.

| Área | Pendiente |
| --- | --- |
| Idioma | Resuelto: interfaz completa en español e inglés (ES/EN), con selector en la navegación y cambio en el frontend sin recarga |
| Tipografía | Resuelto en lo esencial: Barlow Condensed, Inter, IBM Plex Mono y Orbitron (solo el título `XK75` del Hero). La escala de tamaños sigue abierta a iteración visual. |
| Ficha física | Definir dimensiones, peso, tipo de montaje y detalles de materiales |
| Switches | Confirmar variantes, fuerzas, recorridos, curvas y unidades |
| Conectividad y rendimiento | Definir prestaciones por modo, polling rate, latencia, autonomía y compatibilidad |
| Batería y caja | Definir capacidad de batería y contenido conceptual de la caja |
| Recursos | Revisar qué imágenes son utilizables y cuáles requieren generación, separación o corrección |
| Despiece | Resuelto: se descarta la explosión al scroll. Architecture queda en modo resalte con las ocho capas actuales. |
| Personalización | Resuelto: la sección Control se retira de la landing. No se precisa un set interactivo de color, modo o acabado. |
| Sonido | Decidir si se incluye y, en su caso, preparar los recursos |
| CTA | Resuelto: `Reserve XK75` / `Reservar XK75` (Hero) lleva a `#reserve`. `View the System` / `Explorar el sistema` se retiró. El cierre conserva `Back to top` / `Volver arriba` hacia `#hero`. `Explore the Architecture` / `Explorar la arquitectura` se retiró. `RESERVE XK75` se retiró del cierre. `Explore XK75` se retiró del header. |
| Repositorio y dominio | Elegir nombre del repositorio, subdominio y configuración de publicación |
| Dependencias | Registradas en `package.json` al inicializar la base del proyecto |

Al cerrar una decisión, se actualizará su sección correspondiente y se retirará de esta tabla. Este documento seguirá siendo la guía interna; el README se redactará después a partir de la implementación real.


## Aclaración sobre las decisiones pendientes

De los puntos registrados anteriormente como decisiones pendientes, únicamente debe considerarse la definición del idioma.

La landing tendrá soporte completo para **español e inglés (ES/EN)**. Todos los títulos, descripciones, CTA, especificaciones y avisos estarán disponibles en ambos idiomas mediante un selector integrado en la navegación. El cambio se realizará directamente en el frontend, sin recargar la página ni depender de servicios externos.

Los nombres propios, identificadores técnicos y denominaciones del producto podrán conservar su forma original cuando corresponda, incluyendo `IMPACT-FRAME XK75`, `IF-XK75 / REV.01` y `Engineering for Minds That Build.`

Los demás puntos incluidos en la tabla de decisiones pendientes no requieren una definición previa y no deben considerarse bloqueantes para el desarrollo.

