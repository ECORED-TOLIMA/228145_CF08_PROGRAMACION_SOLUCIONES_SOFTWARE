<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Servidores y servicios en aplicaciones de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Texto que describa la imagen')
      .col-lg-8
        .p-4.cajon.color-secundario.mb-3
          p.mb-0 Los servidores y servicios constituyen la base operativa de las aplicaciones modernas, permitiendo la gestión, procesamiento y entrega de información entre sistemas y usuarios. Su correcta implementación define la capacidad de una aplicación para escalar, responder eficientemente y mantenerse disponible en diferentes entornos.
        p En este contexto, los servidores actúan como plataformas que alojan y ejecutan aplicaciones, mientras que los servicios representan las funcionalidades que estas aplicaciones exponen para ser consumidas por otros sistemas o clientes.
        p Un servidor es un sistema diseñado para proveer recursos, datos o servicios a otros sistemas (clientes) a través de una red. No se limita al hardware, sino que incluye el #[i software] que gestiona solicitudes y respuestas.
    .BG02.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6
          .p-4.bgf12.border
            p Las funciones principales de un servidor son:
            ul.lista-ul
              li
                i.fas.fa-computer
                | Procesar solicitudes de clientes.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | Gestionar recursos del sistema.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | Almacenar y distribuir información.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | Ejecutar aplicaciones.
              li
                i.fas.fa-computer(style="color: #FFB758;")
                | Mantener la disponibilidad del servicio.
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema3/img2.svg', alt='Texto que describa la imagen')
    p Los servidores se clasifican según el tipo de función que desempeñan dentro del sistema de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Servidor <em>web</em>")
            p Se encarga de recibir y gestionar las solicitudes HTTP de los clientes, servir contenido estático y dinámico, y canalizar las peticiones hacia otros componentes del sistema, como servidores de aplicaciones.
          .row(titulo="Servidor de aplicaciones")
            p Ejecuta la lógica del negocio definida por la aplicación, procesa reglas y flujos de trabajo, coordina servicios internos y actúa como enlace entre el servidor #[i web] y la base de datos.
          .row(titulo="Servidor de base de datos")
            p Administra de forma centralizada el almacenamiento y la manipulación de los datos, asegurando la integridad, consistencia, seguridad y disponibilidad de la información.
          .row(titulo="Servidor de archivos")
            p Proporciona un repositorio común para almacenar y distribuir archivos, permitiendo el acceso controlado, la compartición de recursos y la gestión eficiente de la información dentro del sistema.
    p.mb-4 Los servicios representan funcionalidades específicas que pueden ser consumidas por otros sistemas, lo que permite que distintas aplicaciones se comuniquen e intercambien información de forma estructurada y controlada. En las aplicaciones modernas, estas funcionalidades suelen organizarse siguiendo diferentes enfoques arquitectónicos, como la arquitectura monolítica, donde todo está integrado en un solo sistema; la arquitectura basada en servicios, que separa responsabilidades en módulos reutilizables; y la arquitectura de microservicios, en la que cada servicio es independiente y puede desarrollarse, desplegarse y escalarse de manera autónoma.
    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema3/img4.svg', style="width: 120px", alt='AvatarTop')
      .col-lg-11
        p.mb-0 Para que estos servicios interactúen entre sí, se apoyan en protocolos y formatos de comunicación estandarizados que garantizan interoperabilidad y confiabilidad. Entre los más utilizados se encuentran HTTP/HTTPS, las APIs REST, los sistemas de mensajería mediante colas de mensajes y otros protocolos de comunicación estructurada, los cuales facilitan el intercambio de datos, la integración entre sistemas heterogéneos y la construcción de soluciones distribuidas más flexibles y escalables.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Servidores de aplicaciones y servidores #[i web]
    p En el desarrollo de #[i software] moderno, los servidores #[i web] y los servidores de aplicaciones cumplen funciones diferenciadas pero complementarias dentro de la arquitectura de un sistema. Ambos son esenciales para gestionar la interacción entre el usuario y la lógica del sistema, pero operan en distintos niveles del procesamiento. Cada uno destaca lo siguiente:
    .BG01.p-5.mb-4
      .tarjeta.slider-custom-bg.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Servidor #[i web]
              p Está diseñado principalmente para gestionar solicitudes HTTP y entregar contenido al cliente, generalmente en forma de páginas #[i web], archivos estáticos o recursos multimedia. Su función es actuar como intermediario entre el navegador del usuario y los recursos alojados, optimizando la entrega de contenido mediante mecanismos como caché, compresión y balanceo de carga.
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='Gráfico ilustrativo de uso de programa')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              h4 Servidor de aplicaciones
              p Se encarga de ejecutar la lógica del negocio. No solo responde solicitudes, sino que procesa información, aplica reglas, interactúa con bases de datos y genera respuestas dinámicas. Este tipo de servidor permite construir aplicaciones complejas donde la lógica no está en el cliente, sino centralizada en el #[i backend].
            .col-md-6.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='Gráfico ilustrativo de uso de programa')
    p La diferencia fundamental entre ambos no es solo funcional, sino arquitectónica. Mientras el servidor #[i web] se enfoca en la entrega de contenido, el servidor de aplicaciones gestiona la lógica interna del sistema.
    p El siguiente esquema muestra cómo se establece la relación entre ambos procesos:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 3.
          span Relación entre servidor #[i web] y servidor de aplicaciones
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img7.svg', alt='Figura 3 que relaciona un esquema donde se muestra la interacción entre el servidor #[i web] y el servidor de aplicaciones, a partir de una solicitud HTTP del cliente hasta la entrega de la respuesta final.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img7_1.svg', alt='Figura 3 que relaciona un esquema donde se muestra la interacción entre el servidor #[i web] y el servidor de aplicaciones, a partir de una solicitud HTTP del cliente hasta la entrega de la respuesta final.')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p En este flujo, el servidor #[i web] recibe la solicitud inicial y, cuando es necesario, la delega al servidor de aplicaciones para su procesamiento. Posteriormente, el resultado es devuelto al cliente en un formato adecuado.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Servidor #[i web]: función y alcance
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Infografía de matriz RACI')
      .col-lg-7
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Infografía de matriz RACI')
          .col-lg-9
            p El servidor #[i web] opera como el primer punto de contacto con el usuario. Su diseño está orientado a la eficiencia en la entrega de contenido y a la gestión de múltiples solicitudes concurrentes.
        .cajon.color-primario.p-4.mb-2
          p.mb-0 En términos técnicos, este tipo de servidor trabaja sobre protocolos como HTTP/HTTPS, interpretando solicitudes y respondiendo con recursos previamente definidos. Su fortaleza radica en la rapidez y en la capacidad de manejar grandes volúmenes de tráfico sin necesidad de ejecutar lógica compleja.
        p Ejemplos ampliamente utilizados incluyen Apache, Nginx e IIS, los cuales permiten configurar reglas de enrutamiento, seguridad y optimización del contenido.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Servidor de aplicaciones: procesamiento y lógica del negocio
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img10.svg', alt='Infografía de matriz RACI')
          .col-lg-9
            p A diferencia del servidor #[i web], el servidor de aplicaciones está diseñado para ejecutar procesos complejos. Aquí se implementa la lógica del sistema, incluyendo validaciones, cálculos, acceso a datos y generación de contenido dinámico.
        .cajon.color-primario.p-4.mb-2
          p.mb-0 Este tipo de servidor permite la construcción de aplicaciones escalables, ya que separa la lógica del cliente y facilita la integración con otros sistemas. Además, soporta múltiples tecnologías y lenguajes, lo que lo hace adaptable a diferentes entornos de desarrollo.
        p Entre los más utilizados se encuentran Tomcat, JBoss, #[i WebLogic] y Node.js, cada uno orientado a distintos tipos de aplicaciones.
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img11.png', alt='Infografía de matriz RACI')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Integración en la arquitectura de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Infografía de matriz RACI')
      .col-lg-7
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img13.svg', alt='Infografía de matriz RACI')
          .col-lg-9
            p En sistemas modernos, ambos tipos de servidores trabajan de manera conjunta para optimizar el rendimiento y la escalabilidad. Esta separación permite distribuir responsabilidades y mejorar la eficiencia del sistema.
        .cajon.color-primario.p-4.mb-2
          p.mb-0 El servidor #[i web] se encarga de manejar las solicitudes iniciales y optimizar la entrega de contenido, mientras que el servidor de aplicaciones procesa la lógica compleja. Esta división reduce la carga en cada componente y permite escalar el sistema de manera independiente.
        p Esta arquitectura es ampliamente utilizada en aplicaciones empresariales y sistemas #[i web] de gran escala
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Servicios #[i web] y paradigmas de APIs
    p Los servicios #[i web] y las APIs (Application Programming Interfaces) constituyen el mecanismo fundamental mediante el cual las aplicaciones modernas se comunican, intercambian información y comparten funcionalidades. En entornos distribuidos, donde múltiples sistemas interactúan entre sí, los servicios #[i web] permiten desacoplar componentes, facilitando la integración, la escalabilidad y la interoperabilidad.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un servicio #[i web] puede entenderse como una funcionalidad accesible a través de la red, diseñada para ser consumida por otras aplicaciones. No depende del lenguaje ni de la plataforma, lo que permite que sistemas heterogéneos puedan comunicarse entre sí. Por su parte, una API define el conjunto de reglas, #[i endpoints] y estructuras que especifican cómo se debe acceder a esas funcionalidades, estableciendo contratos claros entre sistemas.
    p.mb-4 A continuación, se profundiza en la naturaleza de los servicios #[i web] dentro de las arquitecturas modernas, analizando cómo estructuran la lógica de las aplicaciones, los principales paradigmas de diseño de APIs y las implicaciones técnicas y operativas que estos enfoques tienen en el desarrollo y la evolución del #[i software]:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-4
      .row(titulo="Naturaleza de los servicios #[i web] en arquitecturas modernas")
        .row
          .col-lg-6
            p En la actualidad, los servicios #[i web] no solo exponen información, sino que estructuran la lógica de las aplicaciones en unidades reutilizables. Esto permite que diferentes componentes del sistema operen de forma independiente, reduciendo el acoplamiento y mejorando la capacidad de evolución del #[i software].
            p Desde una perspectiva técnica, los servicios #[i web] se basan en protocolos de comunicación como HTTP/HTTPS, utilizando formatos de intercambio de datos como JSON o XML. Estos formatos permiten estructurar la información de manera que pueda ser interpretada por distintos sistemas sin ambigüedades.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img15.png', alt='Infografía de matriz RACI')
      .row(titulo="Paradigmas de APIs: enfoques de diseño")
        .row
          .col-lg-6
            p Los paradigmas de APIs definen la forma en que se estructuran y consumen los servicios #[i web]. No se trata solo de tecnología, sino de modelos de diseño que determinan cómo se organiza la comunicación entre sistemas.
            p El paradigma más extendido es REST (Representational State Transfer), el cual se basa en recursos identificados mediante URLs y en el uso de métodos HTTP (GET, POST, PUT, DELETE). REST prioriza la simplicidad, la escalabilidad y el uso eficiente de la #[i web] como plataforma.
            p En contraste, SOAP (Simple Object Access Protocol) es un paradigma más estructurado que utiliza XML y define estándares estrictos para la comunicación. Aunque es más complejo, ofrece mayor formalidad y control, siendo utilizado en entornos donde la seguridad y la integridad son críticas.
            p Más recientemente, han surgido enfoques como GraphQL, que permite al cliente definir exactamente qué datos necesita, y arquitecturas basadas en eventos, donde la comunicación no es directa, sino mediada por sistemas de mensajería.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img16.png', alt='Infografía de matriz RACI')
      .row(titulo="Paradigmas de APIs: enfoques de diseño")
        .row
          .col-lg-6
            p Las diferencias entre paradigmas no son superficiales, sino que impactan directamente en el diseño, rendimiento y mantenimiento del sistema.
            p REST se caracteriza por su ligereza y facilidad de implementación, lo que lo convierte en la opción predominante para aplicaciones #[i web] y móviles. SOAP, en cambio, se enfoca en la formalidad y en el cumplimiento de estándares, siendo utilizado en sistemas empresariales donde la interoperabilidad controlada es esencial.
            p GraphQL introduce un enfoque orientado al cliente, reduciendo el consumo innecesario de datos y mejorando la eficiencia en aplicaciones complejas. Por su parte, los sistemas basados en eventos permiten desacoplar completamente los componentes, facilitando la escalabilidad en arquitecturas distribuidas.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img17.png', alt='Infografía de matriz RACI')
      .row(titulo="Diseño de APIs: principios fundamentales")
        .row
          .col-lg-6
            p El diseño de una API no debe limitarse a exponer funcionalidades, sino que debe garantizar claridad, consistencia y facilidad de uso. Una API bien diseñada actúa como un contrato estable entre sistemas, permitiendo su evolución sin afectar a los consumidores.
            p Entre los principios más relevantes se encuentran la consistencia en los #[i endpoints], la correcta utilización de los métodos HTTP, la estructuración clara de las respuestas y el manejo adecuado de errores. Además, la documentación juega un papel crítico, ya que permite a otros desarrolladores comprender y utilizar la API de manera eficiente.
            p Una API mal diseñada puede generar inconsistencias, dificultar la integración y aumentar los costos de mantenimiento.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img18.png', alt='Infografía de matriz RACI')
    
                  



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
