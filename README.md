# Sun Tzu Strategy Lab Campaign v4

**Sun Tzu Strategy Lab Campaign v4** es una app web interactiva para analizar decisiones, practicar escenarios, guardar planes y entrenar criterio estratégico. Está inspirada en pensamiento estratégico clásico, pero no copia traducciones modernas de *El arte de la guerra*.

## Qué incluye esta versión v4

- **Modo campaña**: 13 misiones encadenadas con decisiones, consecuencias, mapa de progreso, estado de mando, rango final y crónica guardable.
- **Modo General**: genera un plan estratégico completo en 5 pasos.
- **Analizador estratégico**: diagnóstico, postura recomendada, principios aplicables, plan, riesgos y alternativa.
- **Simulador avanzado**: 50 escenarios con opciones, puntuación y feedback.
- **Cartas de estrategia**: 100 principios originales con aplicación moderna y preguntas de reflexión.
- **Entrenamiento**: 100 preguntas tipo test.
- **Diario táctico**: entradas con etiquetas, buscador y eliminación.
- **Dashboard**: métricas, nivel, radar táctico, reto diario, últimas entradas y debilidades detectadas.
- **Biblioteca buscable**: búsqueda global y filtro por categoría.
- **Favoritos**: guarda principios importantes.
- **Exportación/importación**: JSON, Markdown y CSV.
- **PWA**: manifest y service worker v4 para caché offline.
- **Skins**: Obsidiana, Pergamino, Jade oscuro, Rojo estratégico y Medianoche.
- **Privacidad**: sin backend, sin cuentas, sin tracking y sin dependencias externas.
- **Auditoría v4**: importación JSON validada, puntuación anti-doble clic, menú móvil mejorado, CSV protegido y validación local.

## Estructura

```text
sun-tzu-strategy-lab-campaign/
├── index.html
├── sw.js
├── manifest.webmanifest
├── assets/
│   ├── icon.svg
│   ├── css/styles.css
│   └── js/app.js
├── tools/validate.mjs
├── AUDIT.md
├── README.md
├── LICENSE
└── .gitignore
```

## Uso local

Puedes abrir `index.html` directamente. Para probar la PWA/offline cache, usa un servidor local:

```bash
python -m http.server 8000
```

Luego abre:

```text
http://localhost:8000
```


## Validar antes de subir

Desde la raíz del proyecto:

```bash
node --check assets/js/app.js
node --check sw.js
node tools/validate.mjs
```

El validador comprueba rutas principales, IDs duplicados, CSP, breakpoints responsive y conteos de contenido.

## Publicar en GitHub Pages

1. Crea un repositorio, por ejemplo `sun-tzu-strategy-lab-campaign`.
2. Sube todo el contenido de esta carpeta.
3. Ve a **Settings → Pages**.
4. Selecciona **Deploy from a branch**.
5. Branch: `main`.
6. Folder: `/root`.
7. Guarda.

## Nota legal

El proyecto usa contenido original: principios, explicaciones, escenarios y preguntas creadas para la app. No incluye una traducción moderna copiada del libro.

## Seguridad y privacidad

- Datos guardados en `localStorage`.
- Sin llamadas externas.
- CSP restrictiva en `index.html`.
- Sin `eval`, sin CDN, sin frameworks.
- No recoge datos personales.

## Licencia

MIT.
