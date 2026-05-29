<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Aspectos de gestión en el desarrollo de #[i software]
    p.mb-4 La gestión en el desarrollo de #[i software] comprende el conjunto de prácticas orientadas a planificar, organizar, coordinar y controlar los recursos involucrados en la construcción de un sistema. Su alcance va más allá de la administración del tiempo, ya que integra dimensiones técnicas, humanas y económicas que influyen directamente en el éxito del proyecto.
    figure.mb-4
      img(src='@/assets/curso/temas/tema6/img1.png', alt='Infografía de matriz RACI')
    
    .cajon.color-secundario.p-4.mb-4
      p.mb-0 Mientras el desarrollo técnico se concentra en cómo construir el sistema, la gestión se enfoca en decisiones estratégicas: qué construir, en qué orden, con qué recursos y bajo qué restricciones. Una gestión inadecuada puede comprometer un proyecto incluso cuando la solución técnica es correcta, generando retrasos, sobrecostos o productos que no satisfacen las necesidades reales.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Gestión del desarrollo como proceso continuo

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img2.png', alt='')
      .col-lg-7
        p.mb-4 La gestión del #[i software] no ocurre en una única fase ni se limita a la planificación inicial. Se trata de un proceso continuo que acompaña al desarrollo desde su inicio hasta la entrega del sistema. En este proceso intervienen actividades como la coordinación del equipo, el seguimiento del trabajo realizado, la evaluación de resultados parciales y la adopción de acciones correctivas cuando es necesario.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Este enfoque permite responder a cambios, reducir riesgos y mantener el control del proyecto sin rigidizar el desarrollo. La gestión actúa, así, como un marco que organiza el trabajo técnico y le da sentido dentro del proyecto.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Recursos, control y toma de decisiones
    p El desarrollo de #[i software] requiere la gestión integrada de recursos humanos, tecnológicos y económicos. Asignar responsabilidades claras, facilitar herramientas adecuadas y establecer criterios de seguimiento son tareas esenciales para sostener el avance del proyecto.

    p El control se apoya en la observación sistemática del progreso, la calidad del producto y el uso de los recursos. Su propósito no es solo detectar errores, sino proveer información para la toma de decisiones, permitiendo ajustar el desarrollo antes de que los problemas se acumulen.

    p.mb-4 La siguiente tabla ejemplifica al respecto: 

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Dimensiones clave de la gestión en proyectos de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de costo
                  th Característica principal
                  th Ejemplo
              tbody
                tr(style="background-color: #F3F9FF;")
                  td Directos.
                  td Asociados al desarrollo.
                  td Salarios del equipo.
                tr
                  td Indirectos.
                  td Soporte al proyecto.
                  td Infraestructura.
                tr(style="background-color: #F3F9FF;")
                  td Fijos.
                  td No varían con el tiempo.
                  td Licencias.
                tr
                  td Variables.
                  td Dependen del desarrollo.
                  td Horas adicionales.
                tr(style="background-color: #F3F9FF;")
                  td Ocultos.
                  td No visibles inicialmente.
                  td Retrabajo.


    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Gestión como soporte del ciclo del proyecto
    p La gestión del desarrollo se concreta operativamente a través de un ciclo de trabajo que articula la planificación, la ejecución, la medición y la corrección. Este ciclo permite estructurar el proyecto como un proceso iterativo, donde cada etapa retroalimenta a la siguiente.
    p.mb-4 A continuación, se presenta este ciclo de gestión del proyecto de #[i software], mostrando cómo estas fases se relacionan y permiten mantener el control y la coherencia del desarrollo a lo largo del tiempo:

    .row.mb-5.d-flex.d-lg-none
      .col-lg-3.mb-4
        .tarjeta.cajon.bgf13.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/temas/tema6/img3_1.png', alt='alt')
          h5 Planificación
          p.mb-0 Establece el marco de acción del proyecto, definiendo objetivos, alcance, tareas principales y recursos iniciales. Su función es orientar el desarrollo y facilitar la toma de decisiones sin pretender anticipar todos los detalles.
      .col-lg-3.mb-4
        .tarjeta.cajon.bgf13.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/temas/tema6/img4_1.png', alt='alt')
          h5 Ejecución
          p.mb-0 Corresponde a la realización de las actividades técnicas planificadas, donde el equipo desarrolla el #[i software], coordina tareas y produce los entregables, mientras la gestión asegura coherencia y continuidad del trabajo.
      .col-lg-3.mb-4
        .tarjeta.cajon.bgf13.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/temas/tema6/img5_1.png', alt='alt')
          h5 Medición
          p.mb-0 Se centra en evaluar el avance y la calidad del proyecto mediante indicadores como cumplimiento de tareas, uso de recursos y estado del producto, proporcionando información objetiva sobre el progreso.
      .col-lg-3.mb-4
        .tarjeta.cajon.bgf13.p-4.h-100
          figure.mb-4
            img(src='@/assets/curso/temas/tema6/img6_1.png', alt='alt')
          h5 Corrección
          p.mb-0 Implica realizar ajustes a partir de los resultados de la medición, modificando tareas, recursos o prioridades para corregir desviaciones, reducir riesgos y mantener el proyecto alineado con sus objetivos.

    .row.justify-content-center.mb-4.d-none.d.d-lg-flex
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img3.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Planificación
            p.mb-0 Establece el marco de acción del proyecto, definiendo objetivos, alcance, tareas principales y recursos iniciales. Su función es orientar el desarrollo y facilitar la toma de decisiones sin pretender anticipar todos los detalles.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img4.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Ejecución
            p.mb-0 Corresponde a la realización de las actividades técnicas planificadas, donde el equipo desarrolla el #[i software], coordina tareas y produce los entregables, mientras la gestión asegura coherencia y continuidad del trabajo.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img5.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Medición
            p.mb-0 Se centra en evaluar el avance y la calidad del proyecto mediante indicadores como cumplimiento de tareas, uso de recursos y estado del producto, proporcionando información objetiva sobre el progreso.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema6/img6.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .ubicar
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                h5.mb-3 Corrección
            p.mb-0 Implica realizar ajustes a partir de los resultados de la medición, modificando tareas, recursos o prioridades para corregir desviaciones, reducir riesgos y mantener el proyecto alineado con sus objetivos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img(src="@/assets/curso/temas/tema6/img7.svg", alt="alt") 
            .col-lg-10
              p Hay que tener presente, que todo proyecto de #[i software] está expuesto a riesgos que pueden afectar su desarrollo. La gestión de riesgos acompaña todo el ciclo del proyecto, permitiendo identificar posibles problemas, evaluar su impacto y definir acciones de mitigación de forma oportuna.
    p De igual manera, la metodología de desarrollo determina cómo se organiza el trabajo a lo largo de las fases. Los enfoques tradicionales priorizan una planificación inicial detallada, mientras que las metodologías ágiles favorecen iteraciones cortas y ajustes continuos durante la ejecución y corrección.
    p.mb-0 La comunicación constituye un elemento transversal de la gestión. Canales claros y mecanismos de coordinación efectivos permiten al equipo interpretar resultados, corregir desviaciones y mantener el proyecto alineado con sus objetivos, evitando errores y retrasos innecesarios.
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.1 Casos de prueba y técnicas de creación
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los costos en el desarrollo de #[i software] corresponden al conjunto de recursos económicos necesarios para planificar, construir, probar, implementar y mantener un sistema a lo largo de su ciclo de vida. A diferencia de otros tipos de proyectos, el #[i software] no constituye un producto tangible, por lo que su costo no está asociado a materiales físicos, sino que depende principalmente del esfuerzo humano, el tiempo requerido y el nivel de complejidad de la solución desarrollada.
    p.mb-4 Desde una perspectiva técnica, la estimación de costos supone un análisis integral de diversas variables, entre ellas el alcance funcional del sistema, el grado de incertidumbre del proyecto, las tecnologías seleccionadas y la experiencia del equipo de desarrollo. Cuando este proceso no se realiza de manera adecuada, se incrementa el riesgo de sobrecostos, retrasos en la entrega y, en casos críticos, el fracaso del proyecto.
    
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Naturaleza de los costos en #[i software]

    p.mb-4 Los costos en el desarrollo de #[i software] no siguen un comportamiento lineal. A medida que el sistema incrementa su complejidad, el esfuerzo requerido crece de forma desproporcionada, debido a factores como la integración entre componentes, la gestión de dependencias y la necesidad de realizar pruebas cada vez más exhaustivas para asegurar la estabilidad del sistema.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema6/img9.svg', style="width: 120px", alt='AvatarTop')
      .col-lg-9
        p.mb-0 Asimismo, el costo de un proyecto de #[i software] no se concentra únicamente en la fase de desarrollo. Una proporción significativa de los recursos se destina a las etapas posteriores, especialmente al mantenimiento, donde se corrigen defectos, se incorporan ajustes funcionales y se optimiza el desempeño del sistema en entornos de producción.

    p.mb-4 Para gestionar el proyecto de manera efectiva, resulta fundamental identificar y clasificar los distintos tipos de costos involucrados. Esta clasificación permite comprender en qué áreas se concentran los recursos y facilita la toma de decisiones orientadas a su optimización. En este contexto, la siguiente tabla presenta una visión general de los principales tipos de costos que intervienen en un proyecto de #[i software]:
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Clasificación técnica de costos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de costo
                  th Característica principal
                  th Ejemplo
              tbody
                tr(style="background-color: #F3F9FF;")
                  td Directos.
                  td Asociados al desarrollo.
                  td Salarios del equipo.
                tr
                  td Indirectos.
                  td Soporte al proyecto.
                  td Infraestructura.
                tr(style="background-color: #F3F9FF;")
                  td Fijos.
                  td No varían con el tiempo.
                  td Licencias.
                tr
                  td Variables.
                  td Dependen del desarrollo.
                  td Horas adicionales.
                tr(style="background-color: #F3F9FF;")
                  td Ocultos.
                  td No visibles inicialmente.
                  td Retrabajo.
    
    
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Estimación de costos en #[i software] (profundización)

    p.mb-4 La estimación de costos es un proceso analítico que traduce requisitos y alcance en esfuerzo (horas-persona), tiempo y presupuesto. No busca exactitud perfecta, sino rangos confiables que permitan decidir, priorizar y comprometer entregables. La calidad de la estimación depende de la claridad de requisitos, la estabilidad del alcance y la disponibilidad de datos históricos.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, se combinan enfoques empíricos (experiencia, analogía con proyectos previos) con modelos cuantitativos. Entre estos últimos, COCOMO (en sus variantes) estima esfuerzo a partir del tamaño (ejemplo: KLOC o puntos de función) y factores de ajuste (complejidad, experiencia, herramientas, restricciones). Otros métodos comunes incluyen Puntos de Función (IFPUG) para medir tamaño funcional independiente del lenguaje, y estimación ágil relativa (story points + velocidad) para entornos iterativos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf2-2.text-center.p-3
          p.mb-0 Existen buenas prácticas de estimación como:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
        img(src='@/assets/curso/temas/tema6/img11.svg', alt='alt')
      .col-lg-9
        .cajon.bgf5.p-4.h-100
          ol.lista-ol--cuadro.lista-ol--separador
            li
              .lista-ol--cuadro__vineta
                span 1
              | Definir el alcance con suficiente detalle (historias/épicas, criterios de aceptación).
            li
              .lista-ol--cuadro__vineta
                span 2
              | Usar descomposición (WBS): dividir el sistema en componentes estimables.
            li
              .lista-ol--cuadro__vineta
                span 3
              | Aplicar triangulación: combinar al menos dos métodos (analógico + paramétrico).
            li
              .lista-ol--cuadro__vineta
                span 4
              | Estimar en rangos (optimista-más probable-pesimista) y derivar un valor esperado (ejemplo: PERT).
            li
              .lista-ol--cuadro__vineta
                span 5
              | Incorporar reservas de contingencia para incertidumbre y riesgos identificados.
            li
              .lista-ol--cuadro__vineta
                span 6
              | Ajustar por factores de productividad del equipo (experiencia, dominio del negocio, #[i tooling]).
            li
              .lista-ol--cuadro__vineta
                span 7
              | Revisar y reestimar iterativamente a medida que se reduce la incertidumbre.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf2-2.text-center.p-3
          p.mb-0 Por lo cual, existen errores frecuentes tales como:
    .tarjeta--container.row.mb-4
      .col.tarjeta.bgf5.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img12.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Subestimar integración, pruebas y actividades no funcionales (seguridad, rendimiento). 
      .col.tarjeta.bgf9.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img13.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Asumir productividad uniforme entre equipos o tecnologías. 
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img14.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center No considerar retrabajo por cambios de requisitos. 
      .col.tarjeta.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img15.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Fijar una cifra única sin rango ni contingencias.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Relación entre tiempo, esfuerzo y costo (profundización)
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img16.png', alt='')
      .col-lg-6
        p.mb-4 En #[i software], el costo se modela típicamente como Costo ≈ Esfuerzo (horas) × Tarifa. El esfuerzo, a su vez, depende del tamaño y la complejidad. El tiempo calendario no es equivalente al esfuerzo: reducir el plazo no implica necesariamente reducir el costo.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Un principio clave es que aumentar el equipo tiene rendimientos decrecientes debido a la coordinación, transferencia de conocimiento y dependencias. La comunicación crece de forma no lineal (aprox. n(n−1)/2 canales), lo que introduce sobrecarga y riesgo de inconsistencias.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf2-2.text-center.p-3
          p.mb-0 Las siguientes son implicaciones prácticas:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Compresión de cronograma")
            p Hacerlo en menos tiempo: suele incrementar el costo por:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Mayor coordinación y gestión. 
              li.mb-0
                i.lista-ul__vineta
                | Necesidad de perfiles más senior. 
              li.mb-0
                i.lista-ul__vineta
                | Incremento de errores por presión de tiempo. 
          .row(titulo="Extensión del cronograma")
            p Puede reducir picos de costo al distribuir el trabajo en el tiempo, pero incrementa los costos indirectos de gestión e infraestructura y eleva el riesgo de cambios durante el proyecto.
          .row(titulo="Productividad")
            p Apoyada en el uso de herramientas adecuadas, la automatización de procesos y la experiencia del equipo, es el factor más eficaz para mejorar la relación entre tiempo y costo en el desarrollo de #[i software].
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img17.png', alt='Texto que describa la imagen')
       
    .BG022.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema6/img18.svg', alt='Texto que describa la imagen')
        .col-lg-6
          .p-4.bgf12.border
            p Dentro de las estrategias de optimización se tienen:
            ul.lista-ul
              li
                i.fas.fa-computer
                | Modularizar para permitir trabajo en paralelo con bajo acoplamiento. 
              li
                i.fas.fa-computer
                | Invertir en automatización (CI/CD, pruebas) para reducir esfuerzo repetitivo. 
              li
                i.fas.fa-computer
                | Mantener equipos pequeños y cohesionados en componentes bien definidos. 
              li
                i.fas.fa-computer
                | Priorizar funcionalidades de alto valor (enfoque incremental) para entregar antes y reducir riesgo.
            


    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Costos de calidad en #[i software] (profundización)
    p.mb-4 El costo de calidad se organiza en tres categorías: prevención, evaluación (detección) y fallas (internas y externas):
    
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.order-2.order-lg-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Prevención")
            p Actividades orientadas a evitar la aparición de defectos desde etapas tempranas, como revisiones de diseño, buenas prácticas de codificación y capacitación del equipo. 
            p #[b Ejemplos:]  capacitación, estándares, revisiones de diseño, TDD, buenas prácticas. 
          .row(numero="2" titulo="Evaluación (detección)")
            p Actividades destinadas a identificar defectos antes de la liberación del #[i software], incluyendo pruebas, inspecciones y revisiones técnicas. 
            p #[b Ejemplos:]  pruebas unitarias, integración, automatizadas, revisiones de código, QA. 
          .row(numero="3" titulo="Fallas internas")
            p Defectos detectados durante el desarrollo o las pruebas, antes de que el sistema entre en producción, lo que permite corregirlos con menor impacto. 
            p #[b Ejemplos:]  retrabajo, correcciones en QA, reprocesos. 
          .row(numero="4" titulo="Fallas externas")
            p Defectos que se manifiestan una vez el #[i software] está en producción, afectando a los usuarios finales y generando mayores costos de corrección y soporte. 
            p #[b Ejemplos:]  incidentes, soporte, pérdida de reputación, penalizaciones contractuales. 
          
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema6/img19.png' alt='AvatarTop')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4
          .row
            .col-lg-10
              p Principio económico clave:
              p.mb-0 El costo de corregir un defecto crece exponencialmente a medida que avanza el ciclo de vida (requisitos → diseño → desarrollo → pruebas → producción). 
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema6/img20.svg', alt='AvatarTop')
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 6.2 Pruebas unitarias de #[i #[i software]]
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img21.png', alt='')
      .col-lg-6
        p.mb-4 La estimación de costos en el desarrollo de #[i software] no es un cálculo aislado, sino un proceso estructurado que depende de múltiples elementos interrelacionados. Estos elementos permiten transformar los requerimientos del sistema en una aproximación económica viable, considerando tanto el esfuerzo técnico como las condiciones del entorno.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 A nivel profesional, una estimación sólida no se basa únicamente en el tamaño del sistema, sino en la interacción entre: alcance, complejidad, recursos y contexto del proyecto. Comprender estos elementos permite reducir la incertidumbre y mejorar la toma de decisiones.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Elementos fundamentales en la estimación de costos
    p.mb-4 Los elementos de estimación representan las variables que influyen directamente en el cálculo del costo. No todos tienen el mismo peso, pero en conjunto determinan la precisión de la estimación. Los siguientes, son dichos elementos:[

    .row.justify-content-center.BG01.align-items-center.px-5.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema6/img22.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img23.svg", alt="alt").img100.m-auto
            h5.text-center Alcance del proyecto
            p.text-center.mb-0 Define qué se va a desarrollar y delimita el esfuerzo necesario.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img24.svg", alt="alt").img100.m-auto
            h5.text-center Tamaño del #[i software]
            p.text-center.mb-0 Medido en líneas de código, puntos de función o historias de usuario.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img25.svg", alt="alt").img100.m-auto
            h5.text-center Complejidad técnica
            p.text-center.mb-0 Nivel de dificultad en la implementación e integración.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img26.svg", alt="alt").img100.m-auto
            h5.text-center Recursos humanos
            p.text-center.mb-0 Experiencia, habilidades y productividad del equipo.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img27.svg", alt="alt").img100.m-auto
            h5.text-center Tecnología utilizada
            p.text-center.mb-0 Herramientas, #[i frameworks] y lenguajes.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-6
                img(src="@/assets/curso/temas/tema6/img28.svg", alt="alt").img100.m-auto
            h5.text-center Restricciones del proyecto
            p.text-center.mb-0 Tiempo, presupuesto y condiciones externas.
    
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Características de una estimación de costos
    p.mb-4 Una estimación efectiva no se define únicamente por los elementos que la componen, sino por las características que garantizan su calidad y utilidad dentro del proyecto. En primer lugar, la aproximación progresiva permite que la estimación se refine a medida que se dispone de mayor información, reduciendo la incertidumbre conforme avanza el desarrollo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        p.mb-4 Asimismo, la flexibilidad es fundamental para ajustar la estimación frente a cambios en los requerimientos o en las condiciones del proyecto, sin perder control ni coherencia. La trazabilidad asegura que cada valor estimado pueda justificarse a partir de datos, supuestos y experiencias previas, lo que fortalece la toma de decisiones.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 La consistencia implica que las estimaciones mantengan coherencia con versiones anteriores y con proyectos similares, evitando variaciones arbitrarias. Finalmente, la transparencia facilita que el equipo comprenda cómo se obtuvieron las estimaciones, promoviendo confianza y alineación. En conjunto, estas características convierten la estimación en una herramienta de gestión estratégica y no solo en un valor numérico aislado.
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img29.png', alt='')
      

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Niveles de estimación en el desarrollo

    p La estimación de costos no es un proceso único ni estático; evoluciona conforme avanza el proyecto y se reduce la incertidumbre. En cada etapa del ciclo de vida del #[i software], la estimación adquiere un nivel distinto de precisión, detalle y confiabilidad.
    p.mb-4 La estimación de costos no es un proceso único ni estático; evoluciona conforme avanza el proyecto y se reduce la incertidumbre. En cada etapa del ciclo de vida del #[i software], la estimación adquiere un nivel distinto de precisión, detalle y confiabilidad.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Evolución de los niveles de estimación

    p.mb-4 Cada nivel responde a un propósito específico dentro del proyecto:[
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema6/img29_1.png', alt='Texto que describa la imagen')

      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Estimación inicial (orden de magnitud) ")
            p Hacerlo en menos tiempo: suele incrementar el costo por:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Se realiza en etapas tempranas (idea o propuesta).
              li.mb-0
                i.lista-ul__vineta
                | Basada en información limitada. 
              li.mb-0
                i.lista-ul__vineta
                | Alta incertidumbre.
              li.mb-0
                i.lista-ul__vineta
                | Se utiliza para toma de decisiones estratégicas.
          .row(titulo="Estimación intermedia (presupuestaria)")
            p Puede reducir picos de costo al distribuir el trabajo en el tiempo, pero incrementa los costos indirectos de gestión e infraestructura y eleva el riesgo de cambios durante el proyecto.
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Se desarrolla durante el análisis y diseño. 
              li.mb-0
                i.lista-ul__vineta
                | Incluye mayor detalle de requisitos. 
              li.mb-0
                i.lista-ul__vineta
                | Permite planificar recursos y cronograma. 
              li.mb-0
                i.lista-ul__vineta
                | Reduce el margen de error.
          .row(titulo="Estimación detallada (definitiva)")
            p Apoyada en el uso de herramientas adecuadas, la automatización de procesos y la experiencia del equipo, es el factor más eficaz para mejorar la relación entre tiempo y costo en el desarrollo de #[i software].
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                | Se realiza en etapas de desarrollo. 
              li.mb-0
                i.lista-ul__vineta
                | Basada en tareas específicas (WBS). 
              li.mb-0
                i.lista-ul__vineta
                | Alta precisión.
              li.mb-0
                i.lista-ul__vineta
                | Se usa para control y seguimiento del proyecto.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Ajuste y validación de la estimación (profundización)
    
    p La estimación no es un valor fijo; es una hipótesis que debe ser validada constantemente frente a la realidad del proyecto. El ajuste y validación permiten verificar si el proyecto avanza según lo previsto o si es necesario realizar correcciones.
    p.mb-4 Este proceso implica comparar el esfuerzo real con el estimado, identificar desviaciones y tomar decisiones para corregirlas.

    .titulo.p-4.mb-4(data-aos="fade-left")
      h5 Tipos de ajustes en la estimación
    p.mb-4 Dependiendo de las desviaciones detectadas, los ajustes pueden aplicarse en distintos niveles, cada uno orientado a restablecer el equilibrio del proyecto sin comprometer sus objetivos:
    
    .BG01.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-12
          LineaTiempoC.color-acento-botones
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema6/img30.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-md-0
                h5 Ajuste de alcance
                p Consiste en reducir, redefinir o priorizar funcionalidades para evitar el crecimiento descontrolado del proyecto. Este tipo de ajuste permite concentrar los esfuerzos en los requisitos más críticos y asegurar que el sistema entregue valor dentro de las limitaciones existentes.
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema6/img31.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-md-0
                h5 Ajuste de recursos
                p Implica la redistribución de tareas entre los miembros del equipo o la incorporación de personal con competencias específicas. Su objetivo es mejorar la capacidad de respuesta del proyecto ante cargas de trabajo elevadas o desafíos técnicos no previstos.
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema6/img32.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-md-0
                h5Ajuste de tiempo
                p Se orienta a modificar el cronograma mediante la extensión de plazos o la reorganización de entregables. Este ajuste busca recuperar la viabilidad del proyecto cuando los tiempos inicialmente estimados resultan insuficientes.
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema6/img33.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-md-0
                h5 Ajuste técnico
                p Comprende decisiones relacionadas con el cambio o actualización de herramientas, tecnologías o enfoques de desarrollo. También incluye la optimización de procesos con el fin de aumentar la eficiencia, reducir errores y mejorar la calidad del producto final.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .row.justify-content-center.align-items-center.bgf14
          .col-lg-5.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img34.png' style="margin-left:-12%", alt='AvatarTop')
          .col-lg-7
              br
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-2.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema6/img35.svg' style="width:120px", alt='AvatarTop')
                .col-lg-10
                  h5 Importancia del ajuste continuo
              p El ajuste continuo permite mantener el control del proyecto, evitando desviaciones críticas que puedan comprometer el presupuesto o el tiempo de entrega.
              p.mb-0 En metodologías ágiles, este proceso se realiza de forma iterativa en cada ciclo de desarrollo (sprint), lo que facilita la adaptación a cambios y mejora la precisión de las estimaciones futuras.

</template>
<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
