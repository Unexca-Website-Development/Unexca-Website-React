## Configuración de Herramientas

Gran parte de esta configuración está basada en el [artículo de Josué Oroya](https://dev.to/joshuacba08/configurando-un-proyecto-de-react-para-produccion-7hb), el cual sirvió como referencia principal para establecer un entorno de desarrollo sólido. No obstante, en este caso se utilizó el gestor de paquetes **npm** en lugar de **pnpm**, por ser más común entre estudiantes y equipos pequeños. Además, se realizaron algunas modificaciones específicas que se detallarán en sus respectivas secciones.

Ahora bien, con la base del proyecto ya instalada, el siguiente paso es configurar adecuadamente las herramientas incluidas y añadir otras que complementan el entorno de desarrollo. Es importante destacar que al crear un proyecto con **Vite**, algunas herramientas como **ESLint** ya vienen preconfiguradas de forma básica. Sin embargo, otras (como **Prettier**) deben ser instaladas y configuradas manualmente. Además, incluso las herramientas preinstaladas requieren ajustes personalizados para adaptarse a los estándares y necesidades específicas.

Antes de configurar las herramientas, es necesario instalar algunas dependencias clave. Para ello, se ejecuta el siguiente comando utilizando `npm`:

    npm install --save-dev prettier eslint eslint-plugin-react eslint-config-prettier eslint-plugin-jsx-a11y @typescript-eslint/parser @typescript-eslint/eslint-plugin

Este comando instala las siguientes herramientas:

- **Prettier**: Herramienta de formateo automático de código, basada en reglas definidas en su configuración. Garantiza un estilo consistente sin necesidad de discusiones sobre formato.

- **ESLint**: Analizador de código que ayuda a identificar errores, malas prácticas o posibles mejoras durante el desarrollo.

- **eslint-plugin-react**: Complemento para ESLint que agrega reglas específicas para proyectos desarrollados con React.

-   **eslint-config-prettier**: Desactiva aquellas reglas de ESLint que podrían entrar en conflicto con Prettier, permitiendo que ambas herramientas trabajen juntas sin interferencias.

- **eslint-plugin-jsx-a11y**: Proporciona reglas enfocadas en mejorar la accesibilidad en componentes JSX, ayudando a desarrollar aplicaciones más inclusivas.

- **@typescript-eslint/parser**: Analizador sintáctico que permite a ESLint comprender código escrito en TypeScript.

- **@typescript-eslint/eslint-plugin**: Conjunto de reglas específicas para TypeScript que complementan el funcionamiento de ESLint.

**Nota**: el comando `--save-dev` es clave, le dice a **npm** que estas herramientas solo se usan durante el desarrollo. No son necesarias cuando el proyecto ya está terminado y funcionando (eso se llama producción o **_build_**) ya que ocuparían un espacio innecesario.

Se puede ver la lista de los instalado directamente en el  `package.json` de nuestra carpeta raíz, listadas de la siguiente manera en `"devDependencies"`:

     "devDependencies": {
      "@eslint/js": "^9.25.0",
      "@types/react": "^19.1.2",
      ...
    }
    
### Configuración de Prettier
**Prettier** es una herramienta que automatiza el formateo del código, lo que significa que no hay que preocuparte por detalles como la indentación, el uso de comillas o el lugar donde van los puntos y comas. Su propósito principal es que todos los miembros del equipo escriban código con un mismo estilo, sin tener que debatir por reglas de formato. Esto no solo ahorra tiempo, sino que también mejora la legibilidad y consistencia del proyecto.
Para configurar Prettier, crearemos un archivo llamado `.prettierrc.json` en la raíz del proyecto con el siguiente contenido:

    {
      "trailingComma": "all",
      "tabWidth": 4,
      "printWidth": 80,
      "semi": false,
      "singleQuote": true,
      "jsxSingleQuote": true
    }
 
¿Qué realiza cada parámetro?
-   **`trailingComma: "all"`**  Agrega comas al final en objetos, arrays, imports, etc.
-   **`tabWidth: 4`** Usa 4 espacios por nivel de indentación.
-   **`printWidth: 80`** Rompe las líneas largas a los 80 caracteres.
-   **`semi: false`** No usa punto y coma al final de las líneas.
-   **`singleQuote: true`** Usa comillas simples en lugar de dobles.
-   **`jsxSingleQuote: true`** Usa comillas simples también en JSX.

Muchas de estos parámetros los puedes leer en [la documentación oficial de Prettier](https://prettier.io/docs/options)

**Configurando la extensión de Prettier en Visual Studio Code**
Para que Prettier funcione bien dentro de VS Code, primero hay que instalar su extensión desde el Marketplace. Esto permite que el editor entienda cómo aplicar las reglas de formato automáticamente.

Una vez instalada, hay que realizar un par de ajustes:

1.  Abre la configuración de VS Code (`Ctrl + ,` en Windows o `Cmd + ,` en mac).

2.  Selecciona la pestaña **Workspace** (Área de trabajo) para que la configuración aplique solo al proyecto.

3.  Activa la opción **Format On Save**. Con esto, cada vez que guardes un archivo, se formateara automáticamente según las configuraciones establecidas.

4.  En **Default Formatter**, selecciona `Prettier - Code formatter`. Esto asegura que VS Code use Prettier y no otro formateador.

Con eso, VS Code va a crear una carpeta `.vscode` en el proyecto, con un archivo `settings.json` que guarda estas preferencias. Así, todos los que trabajen en el proyecto van a tener el mismo estilo de código automáticamente.

**.vscode/settings.json**

    {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

**Implementando el archivo  `.prettierignore`**
`.prettierignore` es un archivo donde se definen las rutas que Prettier debe ignorar al momento de aplicar formato. Sirve para evitar que Prettier procese cosas como carpetas de distribución, archivos de configuración u otros que no se deben tocar.

Para usarlo, se crea el archivo `.prettierignore` en la raíz del proyecto y se colocan rutas como estas:

    # Ignorar la carpeta dist
    dist/
    
    # Ignorar build
    build/
Por cierto, la carpeta `node_modules/` está ignorada por defecto en Prettier, por lo que no es necesario añadirla al archivo `.prettierignore`.

### Configurando ESLint
Aunque Prettier se encarga del formateo, ESLint cumple otra función: analiza el código en tiempo real para detectar errores, inconsistencias o malas prácticas que puedan generar problemas más adelante. Es altamente configurable, pero en lugar de definir reglas desde cero, lo más recomendable es apoyarse en configuraciones ya establecidas, como `eslint-config-airbnb` o `eslint-config-standard`, ya que siguen convenciones adoptadas por gran parte de la comunidad.

Ahora bien, cuando se crea un nuevo proyecto con Vite, este genera un archivo `eslint.config.js` con una configuración básica. A continuación, se va a modificar ese archivo para adaptarlo a las necesidades del proyecto:

    import js from '@eslint/js'
    import tsEslint from '@typescript-eslint/eslint-plugin'
    import tsParser from '@typescript-eslint/parser'
    import prettierConfig from 'eslint-config-prettier'
    import jsxA11y from 'eslint-plugin-jsx-a11y'
    import reactHooks from 'eslint-plugin-react-hooks'
    import reactRefresh from 'eslint-plugin-react-refresh'
    import globals from 'globals'
    
    export default [
      {
        ignores: ['dist', 'node_modules'], // Archivos y carpetas ignorados
        files: ['**/*.{ts,tsx,js,jsx}'], // Archivos a lint
        languageOptions: {
          ecmaVersion: 'latest', // Versión de ECMAScript más reciente
          sourceType: 'module', // Módulos ES
          globals: globals.browser, // Soporte para los globales del navegador
          parser: tsParser, // Parser para TypeScript
        },
        linterOptions: {
          reportUnusedDisableDirectives: true, // Detecta directivas deshabilitadas no usadas
        },
        plugins: {
          'react-hooks': reactHooks, // Plugin para React Hooks
          'react-refresh': reactRefresh, // Plugin para React Refresh
          '@typescript-eslint': tsEslint, // Plugin para TypeScript
          'jsx-a11y': jsxA11y, // Plugin para accesibilidad en JSX
        },
        rules: {
          ...js.configs.recommended.rules, // Reglas recomendadas de JavaScript
          ...tsEslint.configs.recommended.rules, // Reglas recomendadas de TypeScript
          ...reactHooks.configs.recommended.rules, // Reglas recomendadas de React Hooks
          'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
          ],
          '@typescript-eslint/no-unused-vars': 'warn', // Advertencia para variables no usadas en TypeScript
          'jsx-a11y/no-static-element-interactions': 'warn', // Accesibilidad para interacciones de elementos estáticos
        },
      },
      prettierConfig, // Configuración de Prettier añadida directamente
    ]
La configuración aplicada en este proyecto es bastante robusta y se alinea con las prácticas modernas para trabajar con React y TypeScript usando ESLint. A continuación se explican algunas de las decisiones tomadas:

1.  **Plugins utilizados**

    -   **React Hooks y React Refresh**: Se incluyen los plugins necesarios para asegurar que React Hooks se usen correctamente y que el entorno de desarrollo aproveche el recargado rápido. Esto mejora notablemente la experiencia al programar.
        
    -   **TypeScript**: La combinación de `@typescript-eslint/eslint-plugin` y `@typescript-eslint/parser` es la forma adecuada de integrar TypeScript en el análisis de ESLint.
        
    -   **Accesibilidad (jsx-a11y)**: Incluir `eslint-plugin-jsx-a11y` es una buena práctica que ayuda a que los componentes JSX sigan principios básicos de accesibilidad, lo cual es clave en aplicaciones públicas.
        
2.  **Compatibilidad con Prettier**

    -   Al final de la configuración, se agrega `eslint-config-prettier`. Esto evita conflictos entre las reglas de ESLint y el formato automático de Prettier, separando responsabilidades: ESLint se encarga de la calidad del código, Prettier del estilo.
        
4.  **Archivos ignorados**
    
    -   Se está usando la propiedad `ignores: ['dist', 'node_modules']` directamente en la configuración, lo cual es una forma más actual de hacer lo que antes se manejaba con `.eslintignore`.
        
5.  **Reglas definidas**
    
    -   **Recomendadas**: Se activan reglas recomendadas tanto de JavaScript, como de TypeScript y React Hooks.
        
    -   **Personalizadas**: Algunas reglas se ajustan manualmente, como `@typescript-eslint/no-unused-vars: 'warn'`, que evita errores de compilación por variables sin uso, pero deja una advertencia visible. También se agregan advertencias relacionadas con accesibilidad como `'jsx-a11y/no-static-element-interactions': 'warn'` para mantener un estándar mínimo en componentes interactivos.

### Añadiendo scripts de ESLint y Prettier al  `package.json`
Para facilitar el uso de ESLint y Prettier, añadiremos scripts al archivo `package.json` que nos permitirán ejecutar ESLint y Prettier con un solo comando.

    {
      "scripts": {
        "lint": "pnpm eslint './src/**/*.{ts,tsx,js,jsx}' --fix",
        "format": "pnpm prettier --write ."
      }
    }

Ahora bien, es importante que estas herramientas se ejecuten **antes de hacer un commit**, para evitar que código mal formateado o con errores llegue al repositorio. Para automatizar eso, se usa **Husky**, una herramienta que permite correr scripts justo antes del commit. En el siguiente paso se instala y configura.

Aun falta mas por escribiiiir
