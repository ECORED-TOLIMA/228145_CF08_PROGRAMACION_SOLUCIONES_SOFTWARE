export default {
  global: {
    Name: 'Herramientas y prácticas en el desarrollo de <em>software</em>',
    Description:
      'Este componente formativo aborda los fundamentos de lenguajes y paradigmas de programación, herramientas de desarrollo, servidores y servicios, pruebas de <em>software</em>, documentación y buenas prácticas, así como aspectos de gestión y estimación de costos, orientado a fortalecer competencias técnicas para el desarrollo eficiente y controlado de aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de los lenguajes y paradigmas de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Lenguajes de programación: tipos, características y usos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Paradigmas de programación y su aplicación en el desarrollo de <em>software</em>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Editores de código y entornos de desarrollo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Frameworks</em> y herramientas de apoyo al desarrollo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Servidores y servicios en aplicaciones de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Servidores de aplicaciones y servidores web',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Servicios web y paradigmas de APIs',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pruebas en el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Casos de prueba y técnicas de creación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pruebas unitarias de <em>software</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Documentación y buenas prácticas de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Manuales de usuario y técnicas de documentación',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Principios y buenas prácticas de programación',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Aspectos de gestión en el desarrollo de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Costos asociados al desarrollo de <em>software</em>',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Elementos y características de la estimación de costos',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'API (Application Programming Interface)',
      significado:
        'conjunto de definiciones y protocolos que permiten la comunicación entre diferentes sistemas de <em>software</em>, facilitando el intercambio de datos y funcionalidades.',
    },
    {
      termino: 'Caso de prueba',
      significado:
        'escenario definido que especifica entradas, condiciones y resultados esperados, utilizado para verificar el correcto funcionamiento de una funcionalidad del sistema.',
    },
    {
      termino: 'Documentación de <em>software</em>',
      significado:
        'conjunto de materiales que describen el funcionamiento, uso y estructura de un sistema, incluyendo manuales técnicos y de usuario, con el fin de facilitar su comprensión y mantenimiento.',
    },
    {
      termino: 'Entorno de desarrollo integrado (IDE)',
      significado:
        'herramienta que integra funcionalidades como editor de código, compilador, depurador y gestor de proyectos, facilitando el desarrollo de <em>software</em> en un solo entorno.',
    },
    {
      termino: 'Estimación de costos en <em>software</em>',
      significado:
        'proceso mediante el cual se calcula el esfuerzo, tiempo y recursos necesarios para desarrollar un sistema, considerando factores como complejidad, tamaño y productividad del equipo.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'estructura de <em>software</em> reutilizable que proporciona un conjunto de herramientas, librerías y reglas para desarrollar aplicaciones de forma más rápida y organizada, definiendo una arquitectura base.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'sistema formal compuesto por reglas sintácticas y semánticas que permite escribir instrucciones ejecutables por una computadora. Se utilizan para desarrollar <em>software</em> mediante diferentes niveles de abstracción (bajo, medio y alto nivel).',
    },
    {
      termino: 'Paradigma de programación',
      significado:
        'modelo conceptual que define la forma en que se estructura y organiza el código. Determina cómo se diseñan las soluciones, siendo ejemplos la programación orientada a objetos, funcional y estructurada.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'tipo de prueba que valida el funcionamiento de componentes individuales del <em>software</em>, como funciones o métodos, de manera aislada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K. (2003). Test-Driven Development: By Example. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Boehm, B. W. (1981). <em>software</em> Engineering Economics. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Fowler, M. (2018). Refactoring: Improving the Design of Existing Code (2nd ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Gamma, E., Helm, R., Johnson, R. & Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented <em>software</em>. Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Hunt, A., & Thomas, D. (2019). The Pragmatic Programmer: Your Journey to Mastery (20th Anniversary Edition). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). Ingeniería del <em>software</em>: Un enfoque práctico (9.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). Ingeniería del <em>software</em> (10.ª ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
