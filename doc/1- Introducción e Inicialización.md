## UNEXCA-Website-React –Introducción e Inicialización.

Cuando se realiza un proyecto pequeño, ya sea con fines de práctica o aprendizaje, es común que no se tengan en cuenta las buenas prácticas debido a la naturaleza informal del trabajo. Sin embargo, cuando un proyecto aspira a ser robusto, escalable, mantenible, evolutivo y eficiente, el panorama cambia. En estos casos, aplicar buenas prácticas desde el principio no es una opción, sino una necesidad: es lo que garantiza una base sólida y confiable sobre la cual más personas pueden trabajar, aportar y construir.

Esta guía ha sido redactada con la intención de ser accesible para cualquier estudiante que en el futuro desee contribuir con nuevas funcionalidades o mejoras. Por ello, muchas secciones se explicarán de forma no tan técnica, para facilitar la comprensión general. No obstante, también se profundizará técnicamente en los apartados que lo ameriten, especialmente aquellos relacionados con herramientas de configuración y calidad de código.

Ahora bien, en esta sección se habla de la finalidad del proyecto, a quién va dirigida esta documentación y por qué se documenta. Si lo deseas, puedes omitirla.

**Finalidad del proyecto:**

En un principio, este proyecto nació con un objetivo académico puntual: cumplir con una nota dentro de una asignatura. Sin embargo, las motivaciones evolucionan. A medida que los requerimientos aumentaron, también lo hizo el compromiso con la calidad del proyecto.

La Universidad Nacional Experimental de Caracas (UNEXCA) es una institución pública joven, con apenas algunos años de trayectoria. Esto significa que, a diferencia de otras universidades del país con portales web consolidados, la UNEXCA aún no cuenta con una plataforma digital representativa que comunique su vida académica, estudiantil y administrativa.

De esta carencia surge la oportunidad de contribuir con algo significativo: el portal web de la UNEXCA, una base que permita compartir información relevante, mostrar el dinamismo de sus estudiantes y cumplir con los estándares que una universidad moderna requiere. Este proyecto busca convertirse en una base para que otros estudiantes motivados puedan hacer crecer, integrar y evolucionar con nuevas ideas, páginas y funcionalidades.

**A quien va dirigida esta documentación y porque se documenta:**

Sin caer en redundancias: a ti, estudiante, técnico, ingeniero, profesor o cualquier persona con el genuino interés de aportar algo significativo al portal web de la UNEXCA. Este documento funciona como una justificación y una guía: explica lo que se hizo, cómo se hizo y por qué se tomó cada decisión. No pretende ser un dogma ni un manual definitivo, sino un registro del contexto técnico y humano en el que se desarrolló esta fase del proyecto. Su propósito es que, al comprender el camino recorrido, cualquier persona pueda continuar construyendo sobre él con confianza y criterio.

**Herramientas utilizadas para la inicialización del proyecto**
A continuación se describen las herramientas principales empleadas para dar inicio al entorno de desarrollo. Se incluyen las versiones específicas utilizadas, ya que futuras versiones podrían introducir cambios que alteren el comportamiento del entorno.

 1. **Node.js v22.16.0** – [https://nodejs.org/es](https://nodejs.org/es)   
Node.js es un entorno de ejecución para JavaScript fuera del navegador. Aunque React se ejecuta en el navegador, Node.js es necesario para instalar herramientas, gestionar dependencias (como Vite, Prettier o ESLint) y ejecutar scripts de desarrollo. Su rol es fundamental en el proceso de construcción del proyecto, no en su ejecución final.

 2. **npm v11.3.0** – [https://docs.npmjs.com/](https://docs.npmjs.com/)   
npm (Node Package Manager) es el gestor de paquetes que viene con   Node.js. Permite instalar y gestionar las bibliotecas necesarias para el proyecto. En este caso, se usó npm para instalar todo lo relacionado con React, Tailwind, ESLint, etc. Es posible usar otras alternativas como `pnpm` o `yarn`, pero para mantener el proyecto más accesible a estudiantes, se optó por la herramienta más común.

 3. **Git v2.49.0** – [https://git-scm.com/](https://git-scm.com/)
Git es el sistema de control de versiones utilizado para rastrear cambios en el código, colaborar en equipo, y mantener un historial claro del proyecto. También se usó para organizar el trabajo en ramas y gestionar las versiones desde GitHub.

 4. **Visual Studio Code 1.100** – [https://code.visualstudio.com/](https://code.visualstudio.com/)
VSCode es el editor de código utilizado durante el desarrollo. Se seleccionó gran ecosistema de extensiones y buena integración con herramientas como ESLint, Prettier y Git. Aunque no es obligatorio, facilita considerablemente la experiencia de desarrollo.

***Nota:** Las versiones mencionadas corresponden al momento en el que se realizó el trabajo. Algunas versiones anteriores podrían funcionar sin problemas, pero no todas. Es recomendable mantenerse lo más cercano posible a estas versiones si se busca replicar el entorno tal como fue diseñado.*

**Creando un nuevo proyecto con Vite**
Para iniciar este proyecto se optó por usar Vite, un bundler moderno que se ha vuelto estándar en muchos entornos de desarrollo modernos con React. Su principal ventaja es la velocidad: carga instantánea en desarrollo, configuración mínima y compatibilidad con TypeScript sin requerir ajustes profundos.

**Pasos para crear el proyecto:**

 1. Crear el proyecto con Vite: `npm create vite@latest` 
Luego de ejecutar este comando, Vite pedirá el nombre del proyecto y el framework. Se seleccionó:
     - **Nombre**: `unexca-website-react`
     - **Framework**: `React`
     - **Variante**: `TypeScript`

 2. Entrar a la carpeta del proyecto: `cd unexca-website-react`
 3. Instalar las dependencias iniciales: `npm install`
 4. Verificar que el entorno funcione:
Ejecutar el servidor de desarrollo: `npm run dev`
Esto abrirá la app en el navegador. Si todo está bien, se verá la plantilla de Vite + React + TypeScript.

**Estructura inicial generada:**
La estructura inicial del proyecto generado por Vite es sencilla y limpia:

    unexca-website-react/
    ├── public/
    │ └── index.html
    ├── src/
    │  ├── App.tsx
    │  ├── main.tsx
    │  └── index.css
    ├── vite.config.ts
    ├── package.json
    └── .gitignore

A partir de esta estructura, el proyecto fue reorganizado cuidadosamente siguiendo principios de **Clean Architecture** (una decisión que se explica más adelante), con el objetivo de que futuras extensiones al sistema (como módulos académicos, repositorio de tesis, sección de noticias u otros) puedan ser integradas de forma limpia, sin comprometer la mantenibilidad del código.

Realizados estos pasos, ya se dispone de una base sólida sobre la cual trabajar. Sin embargo, antes de comenzar a construir funcionalidades, es necesario configurar e instalar un conjunto de herramientas fundamentales para garantizar la calidad, consistencia y escalabilidad del desarrollo.
