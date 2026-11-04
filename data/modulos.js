/**
 * data/modulos.js
 * ---------------------------------------------------------------------------
 * Fuente única de verdad del portal "Memoria 3DSA".
 *
 * Cada objeto de este arreglo se transforma automáticamente en una tarjeta
 * del grid y en una ficha dentro del modal. Para publicar un módulo nuevo
 * basta con agregar un objeto aquí: no hay que tocar el HTML.
 *
 * Esquema:
 * {
 *   id:          string   → slug único (sin espacios, en minúsculas)
 *   nombre:      string   → nombre visible del módulo
 *   docente:     string   → "Javier Mineros" | "Arcides Canales"
 *   icono:       string   → emoji representativo
 *   color:       string   → acento propio del módulo (hex)
 *   resumen:     string   → 2 o 3 líneas con palabras propias
 *   aprendiste:  string[] → ideas clave del módulo
 *   instrumentos:string[] → instrumentos de evaluación (mín. 2)
 *   programas:   string[] → software utilizado (mín. 2)
 *   herramientas:string[] → tecnologías / herramientas (mín. 2)
 *   recursos:    {nombre, url}[] → mínimo 3 enlaces reales
 *   evidencias:  string[] → productos entregados (mín. 1)
 *   quiz:        {pregunta, opciones, correcta, explicacion}[] → 3 preguntas
 * }
 * ---------------------------------------------------------------------------
 */

export const MODULOS = [
  {
    id: "introduccion-desarrollo-logica",
    nombre: "Introducción al Desarrollo y Lógica",
    docente: "Javier Mineros",
    icono: "🧠",
    color: "#e8b14a",
    resumen:
      "Antes de escribir una sola línea de código aprendimos a pensar: descomponer problemas, ordenar pasos y representar la lógica con diagramas y pseudocódigo.",
    aprendiste: [
      "Pensamiento lógico y descomposición de problemas",
      "Diagramas de flujo y pseudocódigo",
      "Resolución ordenada de problemas",
    ],
    instrumentos: ["Guías de ejercicios", "Pruebas prácticas de código"],
    programas: ["VS Code", "Editores de texto plano"],
    herramientas: ["Consola de comandos", "Diagramas de flujo", "Pseudocódigo"],
    recursos: [
      { nombre: "MDN Learn JavaScript", url: "https://developer.mozilla.org/es/docs/Learn/JavaScript" },
      { nombre: "roadmap.sh", url: "https://roadmap.sh/" },
      { nombre: "freeCodeCamp en español", url: "https://www.freecodecamp.org/espanol/" },
    ],
    evidencias: ["Ejercicios de lógica resueltos", "Capturas de diagramas de flujo"],
    quiz: [
      {
        pregunta: "¿Qué es un algoritmo?",
        opciones: [
          "Una secuencia ordenada de pasos para resolver un problema",
          "Un lenguaje de programación",
          "Un tipo de base de datos",
        ],
        correcta: 0,
        explicacion:
          "Es la definición formal: un conjunto finito y ordenado de pasos que permite resolver un problema.",
      },
      {
        pregunta: "¿Qué estructura repite un bloque de código?",
        opciones: ["Condicional", "Bucle (for, while)", "Función"],
        correcta: 1,
        explicacion:
          "Los bucles (for, while) repiten instrucciones mientras se cumpla una condición.",
      },
      {
        pregunta: "¿Qué símbolo representa una decisión en un diagrama de flujo?",
        opciones: ["Rectángulo", "Rombo", "Círculo"],
        correcta: 1,
        explicacion:
          "El rombo es el símbolo normalizado para decisiones; el rectángulo representa procesos.",
      },
    ],
  },

  {
    id: "bases-de-datos-relacionales",
    nombre: "Bases de Datos Relacionales (T-SQL y Normalización)",
    docente: "Javier Mineros",
    icono: "🗄️",
    color: "#7aa2f7",
    resumen:
      "Diseñamos bases de datos desde el modelo entidad-relación hasta el script final, aplicando 1FN, 2FN, 3FN y BCNF, y consultando la información con T-SQL.",
    aprendiste: [
      "Modelo entidad-relación",
      "Normalización hasta BCNF",
      "Consultas y scripts en SQL",
    ],
    instrumentos: ["Diagramas Entidad-Relación", "Scripts SQL", "Rúbricas de proyecto"],
    programas: ["SQL Server Management Studio", "phpMyAdmin", "XAMPP (MySQL)"],
    herramientas: ["Transact-SQL", "MySQL", "Gestores de bases de datos"],
    recursos: [
      { nombre: "Microsoft Learn · SQL", url: "https://learn.microsoft.com/es-es/sql/" },
      { nombre: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
      { nombre: "SQLBolt", url: "https://sqlbolt.com/" },
    ],
    evidencias: ["Scripts SQL del Vivero", "Diagrama ER del proyecto"],
    quiz: [
      {
        pregunta: "¿Qué significa BCNF?",
        opciones: [
          "Boyce-Codd Normal Form",
          "Basic Column Normal Form",
          "Binary Code Normal Form",
        ],
        correcta: 0,
        explicacion:
          "Es la forma normal de Boyce-Codd, una versión más estricta de la tercera forma normal.",
      },
      {
        pregunta: "¿Qué comando SQL consulta datos?",
        opciones: ["GET", "SELECT", "FETCH"],
        correcta: 1,
        explicacion:
          "SELECT es la instrucción que recupera filas y columnas de una o varias tablas.",
      },
      {
        pregunta: "¿Qué representa una relación 1:N?",
        opciones: [
          "Un registro de una tabla se relaciona con muchos de otra",
          "Dos tablas sin relación",
          "Un registro con un solo campo",
        ],
        correcta: 0,
        explicacion:
          "En una relación uno a muchos, una fila de la tabla principal se asocia con varias filas de la tabla secundaria.",
      },
    ],
  },

  {
    id: "desarrollo-web-php-bootstrap",
    nombre: "Desarrollo Web Estático y Dinámico (PHP + Bootstrap)",
    docente: "Javier Mineros",
    icono: "🌐",
    color: "#5fd3b3",
    resumen:
      "Construimos sitios responsivos con HTML5, CSS3 y Bootstrap, y los conectamos a MySQL mediante PHP sobre un servidor local XAMPP.",
    aprendiste: [
      "Maquetación responsive",
      "Componentes y grillas de Bootstrap",
      "Conexión PHP–MySQL",
    ],
    instrumentos: ["Sitios web desplegados", "Formularios de registro", "Rúbricas"],
    programas: ["VS Code", "XAMPP (Apache, MySQL)", "Navegador web"],
    herramientas: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "Git"],
    recursos: [
      { nombre: "MDN · HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" },
      { nombre: "MDN · CSS", url: "https://developer.mozilla.org/es/docs/Web/CSS" },
      { nombre: "Bootstrap Docs", url: "https://getbootstrap.com/docs/" },
      { nombre: "PHP Manual", url: "https://www.php.net/manual/es/" },
    ],
    evidencias: ["Sitio web funcional en XAMPP", "Capturas de formularios"],
    quiz: [
      {
        pregunta: "¿Qué hace Bootstrap?",
        opciones: ["Es un framework JS", "Es un framework CSS para diseño responsive", "Es una base de datos"],
        correcta: 1,
        explicacion:
          "Bootstrap ofrece un sistema de grillas y componentes CSS listos para construir interfaces responsivas.",
      },
      {
        pregunta: "¿Qué lenguaje se ejecuta en el servidor con XAMPP?",
        opciones: ["JavaScript", "PHP", "CSS"],
        correcta: 1,
        explicacion:
          "PHP se ejecuta en el servidor (Apache) y genera el HTML que recibe el navegador.",
      },
      {
        pregunta: "¿Qué significa HTML?",
        opciones: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperTool Multi Language",
        ],
        correcta: 0,
        explicacion:
          "HTML son las siglas de HyperText Markup Language, el lenguaje de marcado de la web.",
      },
    ],
  },

  {
    id: "poo-c-sharp",
    nombre: "Programación Orientada a Objetos (POO con C#)",
    docente: "Javier Mineros",
    icono: "🧩",
    color: "#c792ea",
    resumen:
      "Modelamos el mundo real con clases y objetos en C#, aplicando encapsulamiento, herencia, polimorfismo y abstracción en soluciones modulares.",
    aprendiste: [
      "Clases, objetos y constructores",
      "Encapsulamiento y visibilidad",
      "Herencia y polimorfismo",
    ],
    instrumentos: ["Soluciones de código modular", "Pruebas prácticas"],
    programas: ["Visual Studio", ".NET SDK"],
    herramientas: ["C#", ".NET Framework / Core", "Git"],
    recursos: [
      { nombre: "Microsoft Learn · C#", url: "https://learn.microsoft.com/es-es/dotnet/csharp/" },
      { nombre: ".NET Docs", url: "https://learn.microsoft.com/es-es/dotnet/" },
      { nombre: "Refactoring Guru · Patrones", url: "https://refactoring.guru/es/design-patterns" },
    ],
    evidencias: ["Proyecto en consola/escritorio en C#"],
    quiz: [
      {
        pregunta: "¿Qué pilar oculta los detalles internos?",
        opciones: ["Herencia", "Encapsulamiento", "Polimorfismo"],
        correcta: 1,
        explicacion:
          "El encapsulamiento protege el estado interno del objeto y expone solo lo necesario.",
      },
      {
        pregunta: "¿Qué es un constructor?",
        opciones: [
          "Un método que se ejecuta al crear un objeto e inicializa sus atributos",
          "Una variable global",
          "Un tipo de bucle",
        ],
        correcta: 0,
        explicacion:
          "El constructor se llama automáticamente al instanciar la clase y deja el objeto en un estado válido.",
      },
      {
        pregunta: "¿Qué lenguaje de POO usaron?",
        opciones: ["Python", "C#", "Java"],
        correcta: 1,
        explicacion:
          "El módulo se trabajó con C# sobre .NET, usando Visual Studio como entorno principal.",
      },
    ],
  },

  {
    id: "aplicaciones-moviles-maui",
    nombre: "Aplicaciones Móviles con .NET MAUI y SQLite",
    docente: "Javier Mineros",
    icono: "📱",
    color: "#f78fb3",
    resumen:
      "Creamos aplicaciones multiplataforma con .NET MAUI, diseñando vistas en XAML y guardando la información en una base de datos local SQLite.",
    aprendiste: [
      "Arquitectura de una app MAUI",
      "Diseño de vistas con XAML",
      "Bases de datos locales con SQLite",
    ],
    instrumentos: ["App multiplataforma funcional", "Rúbrica de proyecto"],
    programas: ["Visual Studio con workload MAUI", "Emulador Android"],
    herramientas: [".NET MAUI", "C#", "XAML", "SQLite"],
    recursos: [
      { nombre: "Microsoft Learn · MAUI", url: "https://learn.microsoft.com/es-es/dotnet/maui/" },
      { nombre: "SQLite Docs", url: "https://www.sqlite.org/docs.html" },
      { nombre: ".NET Learn", url: "https://dotnet.microsoft.com/es-es/learn" },
    ],
    evidencias: ["App funcional", "Capturas del emulador"],
    quiz: [
      {
        pregunta: "¿Qué es .NET MAUI?",
        opciones: [
          "Un lenguaje",
          "Un framework multiplataforma para apps móviles y escritorio",
          "Un motor de bases de datos",
        ],
        correcta: 1,
        explicacion:
          "MAUI permite construir una sola app para Android, iOS, Windows y macOS a partir de una base compartida.",
      },
      {
        pregunta: "¿Qué base de datos local se usa?",
        opciones: ["MySQL", "SQLite", "PostgreSQL"],
        correcta: 1,
        explicacion:
          "SQLite es una base de datos ligera que se guarda en un archivo dentro del dispositivo.",
      },
      {
        pregunta: "¿Qué lenguaje de marcado se usa en las vistas de MAUI?",
        opciones: ["HTML", "XAML", "JSON"],
        correcta: 1,
        explicacion:
          "XAML describe la interfaz de usuario y se enlaza con el código C# de la aplicación.",
      },
    ],
  },

  {
    id: "sistemas-informacion-vivero",
    nombre: "Sistemas de Información y Documentación (Caso Vivero “La Marchita”)",
    docente: "Javier Mineros",
    icono: "📋",
    color: "#ef6b57",
    resumen:
      "Analizamos un caso real —el Vivero “La Marchita”— levantando requerimientos, modelando el sistema con UML y documentándolo en manuales técnicos y funcionales.",
    aprendiste: [
      "Levantamiento de requerimientos",
      "Modelado de sistemas con UML",
      "Documentación técnica estructurada",
    ],
    instrumentos: ["Manual de sistema", "Diagramas de arquitectura", "Rúbrica de proyecto"],
    programas: ["MindMeister", "Procesadores de texto"],
    herramientas: ["UML", "Documentación técnica estructurada"],
    recursos: [
      { nombre: "Diagrams.net", url: "https://www.diagrams.net/" },
      { nombre: "Lucidchart", url: "https://www.lucidchart.com/" },
      { nombre: "ISO/IEC 25010", url: "https://iso25000.com/index.php/normas-iso-25000/iso-25010" },
    ],
    evidencias: ["Manual funcional del Vivero", "Diagramas del sistema"],
    quiz: [
      {
        pregunta: "¿Cuál fue el caso principal del módulo?",
        opciones: ["Tienda en línea", "Vivero “La Marchita”", "Sistema bancario"],
        correcta: 1,
        explicacion:
          "El caso guía del módulo fue el Vivero “La Marchita”, usado para analizar requerimientos y documentar el sistema.",
      },
      {
        pregunta: "¿Qué tipo de diagramas se usaron para modelar?",
        opciones: ["Diagramas UML", "Diagramas de flujo de caja", "Mapas mentales"],
        correcta: 0,
        explicacion:
          "UML permitió representar actores, casos de uso y la estructura del sistema.",
      },
      {
        pregunta: "¿Qué se entregó además del sistema?",
        opciones: ["Solo el código", "Manual funcional y técnico", "Un videojuego"],
        correcta: 1,
        explicacion:
          "La documentación es parte del producto: manual funcional para usuarios y manual técnico para el equipo.",
      },
    ],
  },

  {
    id: "hardware-redes-mantenimiento",
    nombre: "Hardware, Redes y Mantenimiento",
    docente: "Arcides Canales",
    icono: "🔧",
    color: "#9ece6a",
    resumen:
      "Abrimos el equipo: diagnóstico de componentes, mantenimiento preventivo y correctivo, redes y reportes técnicos redactados en inglés.",
    aprendiste: [
      "Diagnóstico de hardware",
      "Mantenimiento preventivo y correctivo",
      "Reportes técnicos en inglés",
    ],
    instrumentos: ["Informes de diagnóstico", "Rúbricas de mantenimiento"],
    programas: ["Herramientas de diagnóstico de Windows", "Software de pruebas de estrés"],
    herramientas: ["Multímetros", "Software de pruebas", "Esquemas de red"],
    recursos: [
      { nombre: "Cisco NetAcad", url: "https://www.netacad.com/" },
      { nombre: "CompTIA A+", url: "https://www.comptia.org/certifications/a" },
      { nombre: "Microsoft Learn", url: "https://learn.microsoft.com/es-es/" },
    ],
    evidencias: ["Reportes de mantenimiento en inglés", "Fichas técnicas"],
    quiz: [
      {
        pregunta: "¿Qué herramienta mide voltaje y continuidad?",
        opciones: ["Osciloscopio", "Multímetro", "Crimpadora"],
        correcta: 1,
        explicacion:
          "El multímetro mide voltaje, corriente, resistencia y continuidad en un circuito.",
      },
      {
        pregunta: "¿En qué idioma se redactaron los reportes técnicos?",
        opciones: ["Español", "Inglés", "Francés"],
        correcta: 1,
        explicacion:
          "Los informes se redactaron en inglés como práctica del lenguaje técnico de la industria.",
      },
      {
        pregunta: "¿Qué tipo de mantenimiento previene fallas?",
        opciones: ["Correctivo", "Preventivo", "Predictivo de emergencia"],
        correcta: 1,
        explicacion:
          "El mantenimiento preventivo se planifica antes de que ocurra la falla para prolongar la vida del equipo.",
      },
    ],
  },

  {
    id: "automatizacion-robotica-vision",
    nombre: "Automatización, Robótica y Visión Artificial",
    docente: "Arcides Canales",
    icono: "🤖",
    color: "#6cc9e8",
    resumen:
      "Unimos hardware y software: Arduino, sensores y visión artificial con OpenCV y MediaPipe para construir un vehículo 4WD y un circuito LED controlado por gestos.",
    aprendiste: [
      "Arduino, sensores y actuadores",
      "Visión artificial con OpenCV y MediaPipe",
      "Integración hardware–software",
    ],
    instrumentos: ["Prototipo físico funcional", "Scripts de visión artificial"],
    programas: ["Arduino IDE", "VS Code (Python)"],
    herramientas: [
      "Arduino Uno",
      "L298N",
      "Sensores de flama",
      "Servomotor MG90S",
      "Bomba de agua",
      "OpenCV",
      "MediaPipe",
      "Python",
    ],
    recursos: [
      { nombre: "Arduino Docs", url: "https://docs.arduino.cc/" },
      { nombre: "OpenCV Docs", url: "https://docs.opencv.org/" },
      { nombre: "MediaPipe Docs", url: "https://developers.google.com/mediapipe" },
    ],
    evidencias: ["Prototipo 4WD", "Video del circuito LED con gestos"],
    quiz: [
      {
        pregunta: "¿Qué placa se usó en los prototipos?",
        opciones: ["Raspberry Pi", "Arduino Uno", "ESP32"],
        correcta: 1,
        explicacion:
          "Los prototipos se controlaron con Arduino Uno, sensores y el driver L298N.",
      },
      {
        pregunta: "¿Qué librerías se usaron para visión artificial?",
        opciones: ["TensorFlow y PyTorch", "OpenCV y MediaPipe", "NumPy y Pandas"],
        correcta: 1,
        explicacion:
          "OpenCV procesa la imagen y MediaPipe detecta gestos y puntos de referencia de la mano.",
      },
      {
        pregunta: "¿Qué lenguaje se usó para la visión artificial?",
        opciones: ["Java", "Python", "C++"],
        correcta: 1,
        explicacion:
          "Python fue el lenguaje de los scripts de visión artificial, ejecutados desde VS Code.",
      },
    ],
  },
];
