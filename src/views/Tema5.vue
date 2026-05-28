<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Documentación y buenas prácticas de programación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Texto que describa la imagen') 
      .col-lg-7
        p La documentación y las buenas prácticas de programación constituyen pilares fundamentales para garantizar la calidad, mantenibilidad y sostenibilidad del #[i software]. No se trata únicamente de escribir código funcional, sino de desarrollar soluciones que puedan ser comprendidas, utilizadas y mantenidas por otros desarrolladores a lo largo del tiempo.
        .p-4.cajon.color-primario
          p.mb-0 En entornos reales, el #[i software] no es un producto estático, sino un sistema en constante evolución. Por esta razón, la documentación permite transmitir conocimiento, mientras que las buenas prácticas establecen estándares que aseguran consistencia en el desarrollo. Ambos elementos reducen la dependencia del desarrollador original y facilitan la continuidad del proyecto.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Naturaleza técnica de las pruebas unitarias
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        p La documentación permite describir el funcionamiento del sistema, sus componentes y la forma en que debe ser utilizado o mantenido. Su valor no radica en la cantidad de información, sino en su claridad, precisión y utilidad para distintos actores del proyecto.
        p En términos técnicos, la documentación cumple una función de referencia que facilita la comprensión del sistema sin necesidad de analizar directamente el código fuente. Esto es especialmente relevante en proyectos complejos donde múltiples equipos interactúan sobre el mismo sistema.
        p La documentación no es uniforme, se adapta a diferentes necesidades según el rol de quien la utiliza y el momento del ciclo de vida del #[i software]. Por ende, es importante conocer la siguiente tipología y sus procesos:
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema5/img2.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Tipos de documentación y su propósito
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo de documentación
                  th Enfoque principal
                  th Usuario objetivo
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Técnica.
                  td Estructura y funcionamiento del sistema.
                  td Desarrolladores.
                tr 
                  th Funcional.
                  td Comportamiento del sistema.
                  td Analistas.
                tr(style="background-color: #F3F9FF;")
                  th Usuario.
                  td Uso del sistema.
                  td Usuarios finales.
                tr
                  th Operativa.
                  td Instalación y despliegue.
                  td Administradores.
    p Una documentación adecuada no debe ser extensa sin propósito, sino estructurada, orientada a facilitar la comprensión y, además de ello, debe:
    .tarjeta--container.row.mb-4
      .col.bgf5.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='Texto que describa la imagen')
          
        h5.text-center Ser clara y precisa.
      .col.tarjeta.bgf9.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Mantenerse actualizada.
      .col.tarjeta.bgf5.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg', alt='Texto que describa la imagen')
          
        h5.text-center Ser accesible para el equipo.
      .col.tarjeta.bgf9.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img6.svg', alt='Texto que describa la imagen')
          
        h5.text-center Estar alineada con el sistema real.
      .col.bgf5.p-5.mb-4.mb-lg-0
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img7.svg', alt='Texto que describa la imagen')
          
        h5.text-center Evitar redundancias innecesarias.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Buenas prácticas de programación
    p Las buenas prácticas son principios que guían la forma en que se escribe el código, permitiendo que sea legible, mantenible y escalable. No son reglas rígidas, sino estándares que buscan mejorar la calidad del desarrollo.
    figure.mb-4
      img(src='@/assets/curso/temas/tema5/img8.png', alt='Texto que describa la imagen')
    p Un código bien estructurado facilita su comprensión, reduce errores y permite realizar modificaciones sin afectar otras partes del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6
        .bgf2-1.text-center.p-3
          p.mb-0 Los principios de buenas prácticas en programación, deben incluir:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema5/img9.svg' alt='AvatarTop')
        h5.text-center Legibilidad
        p.text-center El código debe ser claro y comprensible, permitiendo que otros desarrolladores entiendan fácilmente su propósito, lógica y funcionamiento sin necesidad de explicaciones adicionales.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema5/img10.svg' alt='AvatarTop')
        h5.text-center Modularidad
        p.text-center Consiste en dividir el sistema en componentes o módulos independientes, cada uno con una responsabilidad específica, lo que facilita el mantenimiento, la prueba y la evolución del #[i software].
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
        h5.text-center Reutilización
        p.text-center Promueve el uso de código existente y probado, evitando duplicaciones innecesarias y reduciendo el esfuerzo de desarrollo, al tiempo que mejora la consistencia y confiabilidad del sistema.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema5/img12.svg' alt='AvatarTop')
        h5.text-center Simplicidad
        p.text-center Implica evitar complejidad innecesaria en el diseño y la implementación, priorizando soluciones claras y directas que reduzcan errores y faciliten el mantenimiento.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema5/img13.svg' alt='AvatarTop')
        h5.text-center Consistencia
        p.text-center Se refiere al uso uniforme de estándares, convenciones y patrones a lo largo del código, lo que mejora la coherencia del sistema y facilita el trabajo colaborativo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .p-4.cajon.color-primario.mb-4
          p.mb-0 Es importante destacar que la documentación y las buenas prácticas no son elementos independientes, sino complementarios. Un código bien escrito reduce la necesidad de documentación excesiva, mientras que una documentación adecuada facilita la comprensión del código.
        p.mb-0 En conjunto, permiten construir sistemas más robustos, donde la información está organizada tanto en el código como en los documentos asociados.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Estructuración del código y mantenibilidad
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-1.order-lg-2
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema5/img14.svg', alt='Infografía de matriz RACI')
          .col-lg-9
            p La forma en que se organiza el código influye directamente en la capacidad de evolucionar el sistema. Una estructura adecuada permite realizar cambios sin generar efectos secundarios no deseados.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 En este contexto, prácticas como la separación de responsabilidades, el uso de funciones pequeñas y la organización por capas permiten mejorar la claridad del sistema.
        p Desde esta perspectiva, la estructuración del código no solo responde a criterios técnicos, sino que se refleja en la forma en que los distintos elementos del sistema se organizan y relacionan entre sí. La siguiente imagen permite visualizar esta organización, mostrando cómo una estructura clara y jerárquica contribuye a la mantenibilidad y a la separación efectiva de responsabilidades en el #[i software]:
      .col-lg-5.col-8.mb-4.mb-lg-0.order-2.order-lg-1
        figure
          img(src='@/assets/curso/temas/tema5/img15.png', alt='Infografía de matriz RACI')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 5.
          span Organización estructural del código
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img16.png', alt='Figura 5 que representa la estructura que organiza un sistema de #[i software] en niveles jerárquicos —sistema, módulos, componentes, clases y funciones— destacando una estructura organizada, la separación de responsabilidades y la mantenibilidad del código como principios asociados a una correcta organización del software.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img16_1.png', alt='Figura 5 que representa la estructura que organiza un sistema de #[i software] en niveles jerárquicos —sistema, módulos, componentes, clases y funciones— destacando una estructura organizada, la separación de responsabilidades y la mantenibilidad del código como principios asociados a una correcta organización del software.')
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Manuales de usuario y técnicas de documentación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img17.png', alt='Infografía de matriz RACI')
      .col-lg-6
        .p-4.cajon.color-primario.mb-4
          p.mb-0 Los manuales de usuario representan uno de los elementos más importantes dentro de la documentación del #[i software], ya que constituyen el puente entre el sistema desarrollado y el usuario final. Su propósito es facilitar el uso correcto de la aplicación, permitiendo que personas sin conocimientos técnicos puedan interactuar con el sistema de manera eficiente.
        p.mb-4 A diferencia de la documentación técnica, los manuales de usuario se enfocan en la experiencia práctica, explicando cómo realizar tareas específicas dentro del sistema. Esto implica traducir funcionalidades complejas en instrucciones claras, estructuradas y orientadas a la acción.
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Rol de los manuales de usuario en el #[i software]
        p Un manual de usuario no se limita a describir funcionalidades, sino que actúa como una guía de uso que orienta al usuario en la ejecución de procesos dentro del sistema. Su función principal es facilitar la resolución de dudas, reducir la curva de aprendizaje y contribuir a la reducción de errores operativos, mejorando así la experiencia general de uso. En términos prácticos, un manual bien diseñado permite al usuario operar el sistema con mayor autonomía, disminuyendo la necesidad de soporte técnico, reduciendo costos operativos y aumentando la eficiencia del #[i software] en su uso real.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Técnicas de documentación orientadas al usuario
    p La documentación centrada en el usuario implica cambiar el enfoque tradicional: en lugar de explicar el sistema, se debe facilitar la ejecución de tareas reales.
    p.mb-4 Esto requiere comprender el contexto del usuario, su nivel de conocimiento y los objetivos que busca cumplir. La documentación debe responder a preguntas prácticas como “¿qué se necesita hacer?” y “cómo se hace paso a paso?”, evitando explicaciones abstractas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema5/img18.svg', alt='Infografía de matriz RACI')
      .col-lg-9
        .p-4.cajon.color-primario
          p.mb-0 Una técnica clave es la segmentación por tareas, donde cada sección del manual corresponde a una acción concreta. Esto mejora la navegabilidad y permite al usuario encontrar rápidamente lo que necesita.
    p Basado en lo anterior, se relacionan las técnicas avanzadas de documentación centradas en el usuario:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.d-none.d-lg-block.mb-4
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img19.png', alt='Infografía de matriz RACI')
            .tarjeta.bgf6.p-3(x="43.5%" y="33%" numero="+")
              p #[b Aplicación:] organización por acciones.
              p #[b Beneficio:] mayor claridad.
            .tarjeta.bgf6.p-3(x="43.5%" y="50%" numero="+")
              p #[b Lenguaje ]contextual
              p #[b Beneficio:] mejor comprensión.
            .tarjeta.bgf6.p-3(x="43%" y="65%" numero="+")
              p #[b Aplicación:] pasos ordenados.
              p #[b Beneficio:] reduce errores.
            .tarjeta.bgf6.p-3(x="80.5%" y="65%" numero="+")
              p #[b Aplicación:] información fragmentada.
              p #[b Beneficio:] acceso rápido.
            .tarjeta.bgf6.p-3(x="80.5%" y="79%" numero="+")
              p #[b Aplicación:] casos reales.
              p #[b Beneficio:] aprendizaje aplicado.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img19_1.png', alt='Matriz RACI para dispositivos móviles')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Diseño funcional y redacción técnica de manuales de usuario
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img20.svg', alt='Matriz RACI para dispositivos móviles')
      .col-lg-8
        .p-4.cajon.color-primario.mb-2
          p.mb-0 El diseño de un manual de usuario debe responder tanto al propósito del sistema como al perfil del usuario, lo que implica seleccionar el tipo de manual más adecuado y aplicar criterios rigurosos de redacción técnica. No resulta eficiente utilizar un único manual para todos los contextos, especialmente en sistemas complejos, donde es común combinar manuales con funciones diferenciadas —introductorias, procedimentales o de referencia— para acompañar progresivamente la adopción del #[i software].
        p Cada tipo de manual cumple un rol específico dentro del uso del sistema: algunos facilitan la familiarización inicial, otros orientan la operación diaria paso a paso, y otros permiten consultas rápidas por parte de usuarios experimentados. En entornos organizacionales, también adquieren relevancia los manuales contextuales y adaptativos, que integran procesos y roles específicos.
    p De forma complementaria, la redacción técnica es un componente crítico para garantizar la efectividad de cualquier tipo de manual. Las instrucciones deben ser precisas, secuenciales y consistentes, evitando ambigüedades que puedan generar errores. Asimismo, es necesario controlar la carga cognitiva del usuario mediante textos breves, estructurados y claros, organizados en unidades manejables que faciliten la comprensión y la ejecución correcta de las tareas.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .p-4.bgf6
          p.mb-0 En conjunto, la selección funcional del manual y una redacción técnica orientada a la claridad permiten que la documentación cumpla su objetivo principal: guiar al usuario de forma eficaz, reducir errores y optimizar el uso real del sistema.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Principios y buenas prácticas de programación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        p Las buenas prácticas de programación constituyen el conjunto de criterios técnicos que permiten construir #[i software] legible, mantenible, escalable y confiable. No se limitan a la sintaxis del lenguaje, sino que definen la forma en que se estructura, organiza y evoluciona el código a lo largo del tiempo.
        .p-4.cajon.color-primario
          p.mb-0 En entornos profesionales, el código no es desarrollado para un único uso, sino que debe ser entendido, modificado y ampliado por diferentes desarrolladores. Por esta razón, las buenas prácticas buscan reducir la complejidad, mejorar la claridad y facilitar la adaptación del sistema a nuevos requerimientos.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema5/img21.png', alt='Matriz RACI para dispositivos móviles')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Fundamentos de las buenas prácticas
    p El objetivo principal de estas prácticas es controlar la complejidad del #[i software]. A medida que un sistema crece, la falta de organización puede generar dependencias innecesarias, dificultar su mantenimiento y aumentar la probabilidad de errores.
    figure.mb-4
      img(src='@/assets/curso/temas/tema5/img22.png', alt='Matriz RACI para dispositivos móviles')
    p.mb-5 Un código bien estructurado no solo cumple su función, sino que también comunica su intención, permitiendo que otros desarrolladores comprendan rápidamente su propósito y funcionamiento.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Principios clave en programación (profundización técnica)
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los principios de programación no son reglas aisladas, sino criterios de diseño que permiten controlar la complejidad del #[i software] a medida que crece. Su aplicación sistemática evita que el código se convierta en una estructura difícil de mantener, conocida comúnmente como código espagueti.
        p.mb-0 Más allá de definiciones básicas, estos principios operan como mecanismos de decisión: orientan cuándo dividir componentes, cómo evitar dependencias innecesarias y de qué forma estructurar soluciones que puedan evolucionar sin generar efectos colaterales.
    p Un aspecto crítico es que estos principios no se aplican de forma rígida, sino contextual. Por ejemplo, aplicar DRY en exceso puede generar sobreabstracción, mientras que ignorarlo produce duplicidad. El equilibrio es lo que define la calidad del diseño.
    p.mb-4 La siguiente tabla detalla la aplicación y riesgo de cada principio destacado en entornos reales:
     .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Aplicación avanzada de principios en escenarios reales
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Principio
                  th Aplicación concreta
                  th Riesgo si se ignora
              tbody
                tr(style="background-color: #F3F9FF;")
                  th SRP.
                  td Separar responsabilidades como validación, lógica de negocio y acceso a datos en componentes distintos.
                  td Código acoplado y difícil de mantener.
                tr                
                  th DRY.
                  td Centralizar la lógica común en funciones o módulos reutilizables.
                  td Duplicidad de código y mayor probabilidad de errores.
                tr(style="background-color: #F3F9FF;")
                  th KISS.
                  td Elegir soluciones simples y comprensibles, evitando estructuras innecesariamente complejas.
                  td Complejidad innecesaria y baja legibilidad.
                tr
                  th YAGNI.
                  td Implementar únicamente la funcionalidad requerida en el momento.
                  td Sobrediseño y aumento del esfuerzo de mantenimiento.
                tr(style="background-color: #F3F9FF;")
                  th Open/Closed.
                  td Extender el comportamiento del sistema sin modificar el código existente.
                  td Fragilidad del sistema y riesgo de introducir fallos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Estructuración del código y diseño
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img24.png', alt='Matriz RACI para dispositivos móviles')    
      .col-lg-8   
        p.mb-4 La estructuración del código define cómo se organiza el sistema internamente. No se trata solo de dividir archivos, sino de establecer una arquitectura donde cada componente tenga un propósito claro y una responsabilidad delimitada.
        .p-4.cajon.color-secundario.mb-4
          p.mb-0 Una mala estructura genera acoplamiento, lo que significa que cambios en una parte del sistema afectan otras. En contraste, una buena estructura permite aislar cambios, facilitando la evolución del #[i software] sin romper funcionalidades existentes.
        p.mb-0 El diseño por capas (presentación, lógica, datos) es una de las estrategias más utilizadas, ya que separa responsabilidades y permite modificar cada nivel de manera independiente. A esto se suma la modularidad, donde el sistema se divide en unidades autónomas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf2-2.text-center.p-3
          p.mb-0 Las estrategias de estructuración del código se dan de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img25.png' alt='AvatarTop')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Modularización")
            p Consiste en dividir el sistema en componentes independientes, lo que reduce la complejidad del código y facilita su mantenimiento y evolución.
          .row(numero="2" titulo="Encapsulamiento")
            p  Implica ocultar los detalles de implementación de los componentes, disminuyendo el acoplamiento y protegiendo la estabilidad del sistema.
          .row(numero="3" titulo="Separación de capas")
            p Organiza el sistema según responsabilidades funcionales, mejorando la claridad de la arquitectura y permitiendo una mayor escalabilidad.
          .row(numero="4" titulo="Inyección de dependencias")
            p Permite gestionar las dependencias de manera externa a los componentes, lo que incrementa la flexibilidad y facilita el cambio, la prueba y la reutilización del código.
          .row(numero="5" titulo="Interfaces")
            p Definen contratos claros entre componentes, permitiendo su sustitución y extensión sin afectar el funcionamiento general del sistema.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Legibilidad y calidad del código
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8          
        p La legibilidad del código es un factor crítico porque el #[i software] se lee más veces de las que se escribe. Un código difícil de entender incrementa el tiempo de mantenimiento, aumenta la probabilidad de errores y reduce la productividad del equipo.
        .p-4.cajon.color-secundario.mb-4
          p.mb-0 La legibilidad no depende únicamente del nombre de variables, sino de la intención expresiva del código. Esto significa que el código debe ser capaz de explicar qué hace sin necesidad de comentarios extensos.
        p Un elemento clave es la consistencia: usar patrones de nombrado, estructuras similares y convenciones uniformes permite que cualquier desarrollador pueda interpretar el sistema rápidamente.              
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema5/img26.png' alt='AvatarTop')                        
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .bgf2-2.text-center.p-3
          p.mb-0 El flujo de comprensión del código se da siguiendo esta secuencia:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img27.svg', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img27_1.svg', alt='Matriz RACI para dispositivos móviles')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Manejo de errores y robustez
    p El manejo de errores es un componente esencial para la estabilidad del sistema. No se trata solo de capturar excepciones, sino de diseñar el #[i software] para que responda adecuadamente ante condiciones inesperadas.
    p Un sistema robusto debe anticipar fallos en entradas, procesos y dependencias externas. Esto implica validar datos antes de procesarlos, controlar excepciones y garantizar que el sistema pueda recuperarse o al menos fallar de forma controlada. Además, el manejo de errores debe proporcionar información útil para diagnóstico sin exponer detalles sensibles, especialmente en entornos productivos.
    p La siguiente imagen representa en cada nivel:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 6.
          span Niveles de manejo de errores
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img28.svg', alt='Figura 6 que integra cuatro niveles interconectados: preventivo, asociado a la validación de datos para evitar fallos antes de que ocurran; correctivo, centrado en los mecanismos de recuperación que permiten continuar la operación del sistema; informativo, vinculado al registro de eventos (logs) para facilitar el diagnóstico y análisis posterior; detectivo, orientado a la captura de errores con el fin de identificar problemas durante la ejecución. ')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img28_1.svg', alt='Figura 6 que integra cuatro niveles interconectados: preventivo, asociado a la validación de datos para evitar fallos antes de que ocurran; correctivo, centrado en los mecanismos de recuperación que permiten continuar la operación del sistema; informativo, vinculado al registro de eventos (logs) para facilitar el diagnóstico y análisis posterior; detectivo, orientado a la captura de errores con el fin de identificar problemas durante la ejecución. ')
    p.mb-4 Para finalizar este tema, el siguiente video ejemplifica buenas y malas prácticas de programación mediante casos reales de código, mostrando cómo la estructuración, la legibilidad y el manejo de errores influyen directamente en la calidad y mantenibilidad del #[i software]:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Leyenda del video
    
        

</template>

<script>
export default {
  name: 'Tema3',
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
