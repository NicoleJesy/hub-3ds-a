export const MODULOS = [
  {
    id: 'orientacion-estudiantes',
    codigo: 'BTVD3 3.0',
    nombre: 'Orientación a los estudiantes al proceso educativo',
    docente: 'Julio Portillo',
    icono: '🎓',
    color: '#e8b14a',
    resumen: 'Espacio de orientación para acompañar al estudiantado durante el proceso educativo y fortalecer su participación en la formación técnica.',
    aprendiste: [
      'Reconocer la importancia de participar activamente en el proceso educativo.',
      'Identificar apoyos y responsabilidades relacionados con la formación.',
      'Valorar la organización y el compromiso como parte del aprendizaje.'
    ],
    instrumentos: ['Actividades de reflexión', 'Guías de orientación'],
    programas: ['Materiales de apoyo educativo'],
    herramientas: ['Trabajo individual y colaborativo'],
    keywords: ['BTVD3 3.0', 'orientacion', 'estudiantes', 'proceso educativo'],
    recursos: [
      { nombre: 'UNESCO — Educación', url: 'https://www.unesco.org/es/education' }
    ],
    evidencias: ['Actividades y reflexiones desarrolladas durante el módulo.'],
    quiz: [
      {
        pregunta: '¿Qué favorece la participación activa en el proceso educativo?',
        opciones: ['El compromiso con el aprendizaje', 'Evitar las actividades', 'Dejar toda la responsabilidad al docente'],
        correcta: 0,
        explicacion: 'La participación y el compromiso ayudan a aprovechar mejor la formación.'
      }
    ]
  },
  {
    id: 'solucion-problemas-logica',
    codigo: 'BTVD3 3.1',
    nombre: 'Desarrollo de Aplicaciones de Software para la Solución de Problemas',
    docente: 'Arcides Canales',
    icono: '🧠',
    color: '#e8b14a',
    resumen: 'Módulo de inicio donde aprendimos a analizar problemas cotidianos y transformarlos en soluciones lógicas. Diseñamos diagramas de flujo, escribimos pseudocódigo y probamos la lógica mediante ejercicios ejecutados en consola.',
    aprendiste: [
      'Todo problema complejo se resuelve dividiéndolo en pasos lógicos ordenados.',
      'Los diagramas de flujo y el pseudocódigo son la representación gráfica y estructural del programa.',
      'La consola es el medio primario para validar la lógica antes de programar en entornos complejos.'
    ],
    instrumentos: ['Guías de ejercicios de lógica de programación', 'Pruebas prácticas de código en consola'],
    programas: ['VS Code', 'Consola del sistema operativo'],
    herramientas: ['Diagramas de flujo', 'Pseudocódigo'],
    keywords: ['modulo 1', 'logica', 'algoritmo', 'pseudocodigo', 'diagrama de flujo', 'solucion de problemas', 'consola', 'python'],
    recursos: [
      { nombre: 'MDN — Learn', url: 'https://developer.mozilla.org/es/docs/Learn' },
      { nombre: 'MDN — JavaScript Guide', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide' },
      { nombre: 'Python — Tutorial', url: 'https://docs.python.org/es/3/tutorial/' }
    ],
    evidencias: ['Carpeta con guías de ejercicios resueltos y capturas de diagramas de flujo.'],
    quiz: [
      {
        pregunta: '¿Qué representa un diagrama de flujo en programación?',
        opciones: ['La secuencia gráfica de pasos de un algoritmo', 'Un tipo de lenguaje de programación', 'El diseño visual de una base de datos'],
        correcta: 0,
        explicacion: 'Cada figura geométrica estandarizada (óvalo, rectángulo, rombo) representa una acción o decisión dentro del proceso.'
      },
      {
        pregunta: '¿Qué estructura repite una serie de instrucciones mientras se cumpla una condición?',
        opciones: ['if', 'while', 'switch'],
        correcta: 1,
        explicacion: 'El while evalúa la condición al inicio y ejecuta el bloque repetidamente mientras dicha condición sea verdadera.'
      },
      {
        pregunta: '¿Cuál es la función del pseudocódigo?',
        opciones: ['Compilar el programa', 'Ejecutarse en el navegador', 'Diseñar y probar la lógica sin depender de la sintaxis de un lenguaje real'],
        correcta: 2,
        explicacion: 'Permite enfocarse en la resolución del problema sin distracciones de errores de compilación o sintaxis.'
      }
    ]
  },
  {
    id: 'componentes-moviles',
    codigo: 'BTVD3 3.5',
    nombre: 'Desarrollo de componentes para dispositivos móviles',
    docente: 'Arcides Canales',
    icono: '📱',
    color: '#f2b66d',
    resumen: 'Aprendimos a estructurar y construir componentes para aplicaciones móviles. Diseñamos interfaces adaptadas a pantallas táctiles, manejamos la navegación entre pantallas y conectamos eventos de usuario en entornos móviles.',
    aprendiste: [
      'El diseño de software móvil requiere interfaces limpias y adaptables a distintas resoluciones.',
      'Los componentes visuales (botones, listas, formularios) se gestionan mediante eventos del usuario.',
      'Desarrollar para móviles implica considerar la eficiencia de memoria y procesamiento del dispositivo.'
    ],
    instrumentos: ['Rúbrica de evaluación de interfaz móvil', 'Lista de cotejo de componentes visuales'],
    programas: ['Android Studio / VS Code', 'Emulador de dispositivo móvil'],
    herramientas: ['Lenguaje de desarrollo móvil (Java/Kotlin/Flutter/React Native)', 'Layouts de interfaz'],
    keywords: ['modulo 2', 'moviles', 'aplicaciones moviles', 'componentes', 'android', 'ui movil', 'interfaz'],
    recursos: [
      { nombre: 'Android Developers Docs', url: 'https://developer.android.com/docs' },
      { nombre: 'MDN — Responsive Web Design', url: 'https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Responsive_Design' },
      { nombre: 'Flutter Docs', url: 'https://docs.flutter.dev/' }
    ],
    evidencias: ['Capturas del emulador ejecutando la aplicación móvil y repositorio con el código fuente.'],
    quiz: [
      {
        pregunta: '¿Por qué es importante diseñar interfaces adaptables en dispositivos móviles?',
        opciones: ['Porque todos los teléfonos son iguales', 'Porque existe una gran variedad de tamaños y resoluciones de pantalla', 'Porque así lo exige Android'],
        correcta: 1,
        explicacion: 'La interfaz debe reajustar sus elementos para verse y funcionar bien en cualquier teléfono o tableta.'
      },
      {
        pregunta: '¿Qué es un componente visual en una app móvil?',
        opciones: ['Un elemento de la interfaz de usuario como un botón o un campo de texto', 'Una función interna del sistema operativo', 'Una base de datos local'],
        correcta: 0,
        explicacion: 'Son los bloques constructivos con los que el usuario interactúa en la pantalla.'
      },
      {
        pregunta: '¿Cómo responde una aplicación móvil a la acción de presionar un botón?',
        opciones: ['Reiniciando la app', 'Mediante la ejecución de un evento (event listener / onClick)', 'Enviando un correo'],
        correcta: 1,
        explicacion: 'El sistema detecta la interacción táctil y dispara la función programada para esa acción.'
      }
    ]
  },
  {
    id: 'mantenimiento-sistemas',
    codigo: 'BTVD3 3.2',
    nombre: 'Mantenimiento y aseguramiento de la operación del sistema informático',
    docente: 'Arcides Canales / Julio Portillo',
    icono: '🔧',
    color: '#7cc9f9',
    resumen: 'Realizamos actividades de diagnóstico, mantenimiento preventivo y correctivo en sistemas informáticos. Aprendimos a asegurar el funcionamiento continuo del hardware y software, optimizando el rendimiento de los equipos.',
    aprendiste: [
      'El mantenimiento preventivo regular evita fallas críticas y prolonga la vida útil del equipo.',
      'El diagnóstico estructurado permite identificar si una falla es a nivel de hardware o de sistema operativo.',
      'Asegurar la operación incluye respaldar información y aplicar medidas de seguridad en el sistema.'
    ],
    instrumentos: ['Lista de cotejo de mantenimiento técnico', 'Ficha de diagnóstico y soporte de equipos'],
    programas: ['Herramientas de diagnóstico de sistema', 'Utilidades de optimización y formateo'],
    herramientas: ['Kit de herramientas físicas', 'Software de mantenimiento técnico'],
    keywords: ['mantenimiento', 'aseguramiento', 'sistemas informaticos', 'soporte', 'diagnostico', 'mantenimiento preventivo', 'mantenimiento correctivo'],
    recursos: [
      { nombre: 'Microsoft Support — Mantenimiento de Windows', url: 'https://support.microsoft.com/es-es/windows' },
      { nombre: 'GNU/Linux System Admin Guide', url: 'https://tldp.org/LDP/sag/html/index.html' },
      { nombre: 'Cisco Networking Academy Docs', url: 'https://www.netacad.com/' }
    ],
    evidencias: ['Informe técnico de mantenimiento realizado con fotografías o capturas del proceso.'],
    quiz: [
      {
        pregunta: '¿Cuál es la diferencia entre mantenimiento preventivo y correctivo?',
        opciones: ['No hay diferencia', 'El preventivo se realiza antes de que ocurran fallas y el correctivo repara un daño existente', 'El correctivo es más barato'],
        correcta: 1,
        explicacion: 'La prevención busca evitar paros de servicio, mientras que la corrección soluciona problemas detectados.'
      },
      {
        pregunta: '¿Qué paso es indispensable antes de realizar un mantenimiento correctivo en un sistema?',
        opciones: ['Formatear el disco', 'Realizar un respaldo (backup) de la información crítica', 'Apagar el equipo'],
        correcta: 1,
        explicacion: 'Protege los datos del usuario ante eventuales pérdidas durante la reparación o formateo.'
      },
      {
        pregunta: '¿Qué herramienta del sistema operativo ayuda a verificar la salud del disco o los procesos?',
        opciones: ['El navegador', 'El Administrador de tareas o el Administrador de discos', 'El Bloc de notas'],
        correcta: 1,
        explicacion: 'Monitorean en tiempo real el consumo de recursos (CPU, RAM, Disco) y el estado de las particiones.'
      }
    ]
  },
  {
    id: 'administracion-bases-datos',
    codigo: 'BTVD3 3.3',
    nombre: 'Administración de base de datos',
    docente: 'Javier Mineros',
    icono: '🗄️',
    color: '#a8d7ff',
    resumen: 'Aprendimos a administrar sistemas gestores de bases de datos relacionales. Diseñamos diagramas entidad-relación, creamos tablas, definimos restricciones de integridad y redactamos consultas SQL para manipular información.',
    aprendiste: [
      'La correcta normalización de tablas elimina la redundancia de datos.',
      'Las llaves primarias y foráneas garantizan la integridad referencial del sistema.',
      'Las consultas SQL (SELECT, INSERT, UPDATE, DELETE) permiten gestionar la información de manera precisa.'
    ],
    instrumentos: ['Guía de diseño de modelos relacionales', 'Prueba práctica de consultas SQL'],
    programas: ['MySQL Workbench', 'SQL Server Management Studio'],
    herramientas: ['Lenguaje SQL', 'Motores de base de datos (MySQL / SQL Server)'],
    keywords: ['modulo 3.3', 'base de datos', 'administracion', 'sql', 'mysql', 'sql server', 'consultas', 'tablas', 'relacion'],
    recursos: [
      { nombre: 'MySQL — Documentación', url: 'https://dev.mysql.com/doc/' },
      { nombre: 'Microsoft Learn — SQL Server', url: 'https://learn.microsoft.com/es-es/sql/sql-server/' },
      { nombre: 'Microsoft Learn — T-SQL Tutorial', url: 'https://learn.microsoft.com/es-es/sql/t-sql/' }
    ],
    evidencias: ['Script ejecutable .sql con creación de tablas, inserción de datos y consultas resueltas.'],
    quiz: [
      {
        pregunta: '¿Qué función cumple una Llave Foránea (Foreign Key)?',
        opciones: ['Eliminar registros automáticamente', 'Vincular un registro de una tabla con la llave primaria de otra tabla', 'Cifrar los datos de la tabla'],
        correcta: 1,
        explicacion: 'Mantiene la integridad referencial y establece las relaciones entre las entidades del modelo.'
      },
      {
        pregunta: '¿Qué comando SQL se utiliza para modificar registros existentes en una tabla?',
        opciones: ['INSERT', 'UPDATE', 'DELETE'],
        correcta: 1,
        explicacion: 'UPDATE modifica los valores de una o más columnas en las filas que cumplan la condición del WHERE.'
      },
      {
        pregunta: '¿Por qué se aplican reglas de normalización en una base de datos?',
        opciones: ['Para que el sistema sea más lento', 'Para evitar la duplicidad de datos y prevenir anomalías', 'Para usar menos tablas'],
        correcta: 1,
        explicacion: 'Organiza las tablas de forma óptima para mantener la consistencia del sistema.'
      }
    ]
  },
  {
    id: 'documentacion-sistemas',
    codigo: 'BTVD3 3.4',
    nombre: 'Elaboración de documentación de sistemas informáticos',
    docente: 'Javier Mineros',
    icono: '📋',
    color: '#8dd3c7',
    resumen: 'Elaboramos la documentación técnica y de usuario para proyectos de software. Aprendimos a redactar especificaciones de requerimientos, diagramas de casos de uso, diccionarios de datos y manuales de instalación y usuario.',
    aprendiste: [
      'Un sistema sin documentación adecuada resulta difícil de mantener y escalar.',
      'El manual técnico está dirigido a programadores y administradores; el manual de usuario, a quien opera el sistema.',
      'Los diagramas UML y diccionarios de datos detallan la arquitectura del software.'
    ],
    instrumentos: ['Lista de cotejo de especificación de requerimientos', 'Rúbrica de evaluación de manual técnico y usuario'],
    programas: ['Procesador de texto (MS Word / Google Docs)', 'Herramientas de diagramación (Draw.io / StarUML)'],
    herramientas: ['Estándares de documentación de software', 'Notación UML (Casos de uso, despliegue)'],
    keywords: ['modulo 3.4', 'documentacion', 'manual de usuario', 'manual tecnico', 'requisitos', 'casos de uso', 'diagramas'],
    recursos: [
      { nombre: 'ISO/IEC/IEEE 29148 Standard Overview', url: 'https://www.iso.org/standard/72089.html' },
      { nombre: 'MDN — Documenting Web Projects', url: 'https://developer.mozilla.org/es/docs/MDN/Writing_guidelines' },
      { nombre: 'Draw.io Documentation', url: 'https://www.drawio.com/doc/' }
    ],
    evidencias: ['Documento PDF completado con el Manual Técnico y de Usuario del proyecto informático.'],
    quiz: [
      {
        pregunta: '¿Cuál es el objetivo principal del Manual de Usuario?',
        opciones: ['Detallar el código fuente', 'Guiar al usuario final en el uso operativo del sistema', 'Listar los lenguajes usados'],
        correcta: 1,
        explicacion: 'No contiene detalles de código ni arquitectura, sino instrucciones directas de uso del software.'
      },
      {
        pregunta: '¿Qué contiene un Diccionario de Datos?',
        opciones: ['La descripción detallada de cada tabla, campo, tipo de dato y restricciones', 'Los correos del equipo', 'El presupuesto del proyecto'],
        correcta: 0,
        explicacion: 'Sirve como referencia técnica para entender la estructura de almacenamiento del sistema.'
      },
      {
        pregunta: '¿Para qué se utiliza un Diagrama de Casos de Uso?',
        opciones: ['Para dibujar el logo', 'Para representar las interacciones entre los actores y las funciones del sistema', 'Para calcular costos'],
        correcta: 1,
        explicacion: 'Ilustra el alcance del software desde el punto de vista de las funcionalidades que ofrece.'
      }
    ]
  },
  {
    id: 'ingles-tecnico',
    codigo: 'BTVD3 3.6',
    nombre: 'Conversación de inglés sobre mantenimiento de sistemas informáticos',
    docente: 'Javier Mineros',
    icono: '💬',
    color: '#b9b7ff',
    resumen: 'Desarrollamos habilidades de comunicación verbal y escrita en idioma inglés enfocadas al ámbito informático. Practicamos vocabulario técnico sobre hardware, software, atención de tickets de soporte y solución de problemas (troubleshooting).',
    aprendiste: [
      'El inglés técnico es indispensable para leer documentación, resolver errores y comunicarse en el área IT.',
      'Simular llamadas y diálogos de soporte permite estructurar explicaciones claras al cliente.',
      'Conocer los términos en inglés sobre componentes y comandos agiliza la búsqueda de soluciones.'
    ],
    instrumentos: ['Rúbrica de evaluación de diálogo/conversación en inglés', 'Lista de cotejo de vocabulario técnico'],
    programas: ['Plataforma de audio/video para grabaciones', 'Diccionarios técnicos en línea'],
    herramientas: ['Guiones de soporte en inglés (Troubleshooting scripts)', 'Glosario técnico de sistemas'],
    keywords: ['modulo 3.6', 'ingles', 'english', 'conversacion', 'technical english', 'soporte tecnico', 'ingles tecnico', 'mantenimiento'],
    recursos: [
      { nombre: 'Cambridge Technical English Resources', url: 'https://www.cambridge.org/gb/cambridgeenglish/catalog/business-professional-and-vocational/technical-english' },
      { nombre: 'BBC Learning English — Workplace', url: 'https://www.bbc.co.uk/learningenglish/english/features/english-at-work' },
      { nombre: 'Cisco Technical English Guide', url: 'https://www.netacad.com/' }
    ],
    evidencias: ['Archivo de audio/video con la simulación de soporte técnico en inglés o diálogo escrito sustentado.'],
    quiz: [
      {
        pregunta: 'What is the meaning of "troubleshooting" in technical support?',
        opciones: ['Instalar software', 'El proceso sistemático de diagnosticar y resolver problemas', 'Comprar hardware'],
        correcta: 1,
        explicacion: '"Troubleshooting" se refiere a identificar la causa raíz de una falla para darle solución.'
      },
      {
        pregunta: 'Which phrase is appropriate to ask a user about a software error?',
        opciones: ['Fix it yourself', 'Could you please describe the error message displayed on your screen?', 'I don\'t know'],
        correcta: 1,
        explicacion: 'Es una forma educada y profesional de solicitar información específica del problema al usuario.'
      },
      {
        pregunta: 'What does the term "backup" mean in IT context?',
        opciones: ['Borrar archivos', 'La copia de seguridad de archivos o datos para prevenir pérdidas', 'Actualizar Windows'],
        correcta: 1,
        explicacion: 'Se utiliza globalmente en inglés técnico para indicar la duplicación preventiva de la información.'
      }
    ]
  },
  {
    id: 'proyecto-innovador-software',
    codigo: 'BTVD3 3.8',
    nombre: 'Proyecto innovador de desarrollo de software',
    docente: 'Javier Mineros',
    icono: '💡',
    color: '#ffad9a',
    resumen: 'Espacio para proponer y desarrollar una solución de software innovadora, aplicando los conocimientos de la especialidad a una necesidad o problema.',
    aprendiste: [
      'Identificar una necesidad que pueda atenderse con una solución de software.',
      'Planificar y desarrollar una propuesta de proyecto.',
      'Presentar y explicar la solución construida.'
    ],
    instrumentos: ['Propuesta de proyecto', 'Presentación del proyecto'],
    programas: ['Herramientas de desarrollo de software'],
    herramientas: ['Planificación de proyectos', 'Diseño y programación de software'],
    keywords: ['BTVD3 3.8', 'proyecto innovador', 'desarrollo de software', 'solucion', 'prototipo'],
    recursos: [
      { nombre: 'MDN — Learn web development', url: 'https://developer.mozilla.org/es/docs/Learn' },
      { nombre: 'GitHub Skills', url: 'https://skills.github.com/' }
    ],
    evidencias: ['Propuesta y presentación del proyecto innovador de software.'],
    quiz: [
      {
        pregunta: '¿Cuál es un buen punto de partida para un proyecto innovador de software?',
        opciones: ['Identificar una necesidad o problema', 'Elegir colores antes de conocer el propósito', 'Escribir código sin planificar'],
        correcta: 0,
        explicacion: 'Comprender la necesidad permite definir el propósito y orientar el desarrollo de la solución.'
      }
    ]
  },
  {
    id: 'microempresa-cooperativa',
    codigo: 'BTVD3 3.7',
    nombre: 'Puesta en marcha de la microempresa en asociatividad cooperativa',
    docente: 'Julio Portillo',
    icono: '🤝',
    color: '#8dd3c7',
    resumen: 'Módulo orientado a conocer cómo organizar y poner en marcha una microempresa mediante el trabajo asociativo y los principios de cooperación.',
    aprendiste: [
      'Reconocer la importancia de la organización para iniciar una microempresa.',
      'Comprender el valor del trabajo asociativo y la cooperación.',
      'Identificar elementos básicos para poner en marcha una iniciativa productiva.'
    ],
    instrumentos: ['Guías de trabajo', 'Actividades de planificación'],
    programas: ['Herramientas de planificación y presentación'],
    herramientas: ['Trabajo asociativo', 'Planificación de iniciativas'],
    keywords: ['BTVD3 3.7', 'microempresa', 'asociatividad', 'cooperativa', 'emprendimiento'],
    recursos: [
      { nombre: 'OIT — Cooperativas', url: 'https://www.ilo.org/es/temas-y-sectores/cooperativas' }
    ],
    evidencias: ['Actividades de organización y planificación de una iniciativa microempresarial.'],
    quiz: [
      {
        pregunta: '¿Qué promueve la asociatividad cooperativa?',
        opciones: ['La colaboración para alcanzar objetivos comunes', 'El trabajo aislado', 'Evitar la planificación'],
        correcta: 0,
        explicacion: 'La asociatividad cooperativa se basa en la colaboración y la organización de sus integrantes.'
      }
    ]
  }
].sort((a, b) => a.codigo.localeCompare(b.codigo, 'es', { numeric: true }));
