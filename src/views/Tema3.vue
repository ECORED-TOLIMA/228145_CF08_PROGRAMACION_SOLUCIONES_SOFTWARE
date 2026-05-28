<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Servidores y servicios en aplicaciones de software

    template(v-for="(block, index) in intro")
      p(v-if="block.type === 'p'" :key="`intro-p-${index}`") {{ block.text }}
      .titulo-sexto.color-acento-contenido(v-else-if="block.type === 'caption'" :key="`intro-c-${index}`")
        h5 {{ block.text }}
      .tabla-a.color-acento-contenido.mb-5(v-else-if="block.type === 'table'" :key="`intro-t-${index}`")
        table
          thead
            tr
              th(v-for="header in block.headers" :key="header") {{ header }}
          tbody
            tr(v-for="(row, rowIndex) in block.rows" :key="rowIndex")
              td(v-for="(cell, cellIndex) in row" :key="cellIndex") {{ cell }}

    template(v-for="section in sections")
      Separador(:key="`sep-${section.id}`")
      .titulo-segundo.color-acento-contenido(data-aos="fade-left" :id="section.id" :key="`title-${section.id}`")
        h2 {{ section.numero }} {{ section.titulo }}
      template(v-for="(block, index) in section.blocks")
        p(v-if="block.type === 'p'" :key="`${section.id}-p-${index}`") {{ block.text }}
        .titulo-sexto.color-acento-contenido(v-else-if="block.type === 'caption'" :key="`${section.id}-c-${index}`")
          h5 {{ block.text }}
        .tabla-a.color-acento-contenido.mb-5(v-else-if="block.type === 'table'" :key="`${section.id}-t-${index}`")
          table
            thead
              tr
                th(v-for="header in block.headers" :key="header") {{ header }}
            tbody
              tr(v-for="(row, rowIndex) in block.rows" :key="rowIndex")
                td(v-for="(cell, cellIndex) in row" :key="cellIndex") {{ cell }}
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    intro: [
      {
        type: 'p',
        text:
          'Los servidores y servicios constituyen la base operativa de las aplicaciones modernas, permitiendo la gestión, procesamiento y entrega de información entre sistemas y usuarios. Su correcta implementación define la capacidad de una aplicación para escalar, responder eficientemente y mantenerse disponible en diferentes entornos.',
      },
      {
        type: 'p',
        text:
          'En este contexto, los servidores actúan como plataformas que alojan y ejecutan aplicaciones, mientras que los servicios representan las funcionalidades que estas aplicaciones exponen para ser consumidas por otros sistemas o clientes.',
      },
      {
        type: 'p',
        text:
          'Un servidor es un sistema diseñado para proveer recursos, datos o servicios a otros sistemas (clientes) a través de una red. No se limita al hardware, sino que incluye el software que gestiona solicitudes y respuestas.',
      },
      {
        type: 'p',
        text: 'Las funciones principales de un servidor son:',
      },
      {
        type: 'p',
        text: 'Procesar solicitudes de clientes.',
      },
      {
        type: 'p',
        text: 'Gestionar recursos del sistema.',
      },
      {
        type: 'p',
        text: 'Almacenar y distribuir información.',
      },
      {
        type: 'p',
        text: 'Ejecutar aplicaciones.',
      },
      {
        type: 'p',
        text: 'Mantener la disponibilidad del servicio.',
      },
      {
        type: 'p',
        text:
          'Los servidores se clasifican según el tipo de función que desempeñan dentro del sistema de la siguiente manera:',
      },
      {
        type: 'p',
        text:
          'Servidor web. Se encarga de recibir y gestionar las solicitudes HTTP de los clientes, servir contenido estático y dinámico, y canalizar las peticiones hacia otros componentes del sistema, como servidores de aplicaciones.',
      },
      {
        type: 'p',
        text:
          'Servidor de aplicaciones. Ejecuta la lógica del negocio definida por la aplicación, procesa reglas y flujos de trabajo, coordina servicios internos y actúa como enlace entre el servidor web y la base de datos.',
      },
      {
        type: 'p',
        text:
          'Servidor de base de datos. Administra de forma centralizada el almacenamiento y la manipulación de los datos, asegurando la integridad, consistencia, seguridad y disponibilidad de la información.',
      },
      {
        type: 'p',
        text:
          'Servidor de archivos. Proporciona un repositorio común para almacenar y distribuir archivos, permitiendo el acceso controlado, la compartición de recursos y la gestión eficiente de la información dentro del sistema.',
      },
      {
        type: 'p',
        text:
          'Los servicios representan funcionalidades específicas que pueden ser consumidas por otros sistemas, lo que permite que distintas aplicaciones se comuniquen e intercambien información de forma estructurada y controlada. En las aplicaciones modernas, estas funcionalidades suelen organizarse siguiendo diferentes enfoques arquitectónicos, como la arquitectura monolítica, donde todo está integrado en un solo sistema; la arquitectura basada en servicios, que separa responsabilidades en módulos reutilizables; y la arquitectura de microservicios, en la que cada servicio es independiente y puede desarrollarse, desplegarse y escalarse de manera autónoma.',
      },
      {
        type: 'p',
        text:
          'Para que estos servicios interactúen entre sí, se apoyan en protocolos y formatos de comunicación estandarizados que garantizan interoperabilidad y confiabilidad. Entre los más utilizados se encuentran HTTP/HTTPS, las APIs REST, los sistemas de mensajería mediante colas de mensajes y otros protocolos de comunicación estructurada, los cuales facilitan el intercambio de datos, la integración entre sistemas heterogéneos y la construcción de soluciones distribuidas más flexibles y escalables.',
      },
    ],
    sections: [
      {
        id: 't_3_1',
        numero: '3.1',
        titulo: 'Servidores de aplicaciones y servidores web',
        blocks: [
          {
            type: 'p',
            text:
              'En el desarrollo de software moderno, los servidores web y los servidores de aplicaciones cumplen funciones diferenciadas pero complementarias dentro de la arquitectura de un sistema. Ambos son esenciales para gestionar la interacción entre el usuario y la lógica del sistema, pero operan en distintos niveles del procesamiento. Cada uno destaca lo siguiente:',
          },
          {
            type: 'p',
            text:
              'Servidor web. Está diseñado principalmente para gestionar solicitudes HTTP y entregar contenido al cliente, generalmente en forma de páginas web, archivos estáticos o recursos multimedia. Su función es actuar como intermediario entre el navegador del usuario y los recursos alojados, optimizando la entrega de contenido mediante mecanismos como caché, compresión y balanceo de carga.',
          },
          {
            type: 'p',
            text:
              'Servidor de aplicaciones. Se encarga de ejecutar la lógica del negocio. No solo responde solicitudes, sino que procesa información, aplica reglas, interactúa con bases de datos y genera respuestas dinámicas. Este tipo de servidor permite construir aplicaciones complejas donde la lógica no está en el cliente, sino centralizada en el backend.',
          },
          {
            type: 'p',
            text:
              'La diferencia fundamental entre ambos no es solo funcional, sino arquitectónica. Mientras el servidor web se enfoca en la entrega de contenido, el servidor de aplicaciones gestiona la lógica interna del sistema.',
          },
          {
            type: 'p',
            text:
              'El siguiente esquema muestra cómo se establece la relación entre ambos procesos:',
          },
          {
            type: 'caption',
            text:
              'Figura 3. Relación entre servidor web y servidor de aplicaciones',
          },
          {
            type: 'p',
            text:
              'En este flujo, el servidor web recibe la solicitud inicial y, cuando es necesario, la delega al servidor de aplicaciones para su procesamiento. Posteriormente, el resultado es devuelto al cliente en un formato adecuado.',
          },
          {
            type: 'p',
            text: 'Servidor web: función y alcance',
          },
          {
            type: 'p',
            text:
              'El servidor web opera como el primer punto de contacto con el usuario. Su diseño está orientado a la eficiencia en la entrega de contenido y a la gestión de múltiples solicitudes concurrentes.',
          },
          {
            type: 'p',
            text:
              'En términos técnicos, este tipo de servidor trabaja sobre protocolos como HTTP/HTTPS, interpretando solicitudes y respondiendo con recursos previamente definidos. Su fortaleza radica en la rapidez y en la capacidad de manejar grandes volúmenes de tráfico sin necesidad de ejecutar lógica compleja.',
          },
          {
            type: 'p',
            text:
              'Ejemplos ampliamente utilizados incluyen Apache, Nginx e IIS, los cuales permiten configurar reglas de enrutamiento, seguridad y optimización del contenido.',
          },
          {
            type: 'p',
            text:
              'Servidor de aplicaciones: procesamiento y lógica del negocio',
          },
          {
            type: 'p',
            text:
              'A diferencia del servidor web, el servidor de aplicaciones está diseñado para ejecutar procesos complejos. Aquí se implementa la lógica del sistema, incluyendo validaciones, cálculos, acceso a datos y generación de contenido dinámico.',
          },
          {
            type: 'p',
            text:
              'Este tipo de servidor permite la construcción de aplicaciones escalables, ya que separa la lógica del cliente y facilita la integración con otros sistemas. Además, soporta múltiples tecnologías y lenguajes, lo que lo hace adaptable a diferentes entornos de desarrollo.',
          },
          {
            type: 'p',
            text:
              'Entre los más utilizados se encuentran Tomcat, JBoss, WebLogic y Node.js, cada uno orientado a distintos tipos de aplicaciones.',
          },
          {
            type: 'p',
            text: 'Integración en la arquitectura de software',
          },
          {
            type: 'p',
            text:
              'En sistemas modernos, ambos tipos de servidores trabajan de manera conjunta para optimizar el rendimiento y la escalabilidad. Esta separación permite distribuir responsabilidades y mejorar la eficiencia del sistema.',
          },
          {
            type: 'p',
            text:
              'El servidor web se encarga de manejar las solicitudes iniciales y optimizar la entrega de contenido, mientras que el servidor de aplicaciones procesa la lógica compleja. Esta división reduce la carga en cada componente y permite escalar el sistema de manera independiente.',
          },
          {
            type: 'p',
            text:
              'Esta arquitectura es ampliamente utilizada en aplicaciones empresariales y sistemas web de gran escala.',
          },
        ],
      },
      {
        id: 't_3_2',
        numero: '3.2',
        titulo: 'Servicios web y paradigmas de APIs',
        blocks: [
          {
            type: 'p',
            text:
              'Los servicios web y las APIs (Application Programming Interfaces) constituyen el mecanismo fundamental mediante el cual las aplicaciones modernas se comunican, intercambian información y comparten funcionalidades. En entornos distribuidos, donde múltiples sistemas interactúan entre sí, los servicios web permiten desacoplar componentes, facilitando la integración, la escalabilidad y la interoperabilidad.',
          },
          {
            type: 'p',
            text:
              'Un servicio web puede entenderse como una funcionalidad accesible a través de la red, diseñada para ser consumida por otras aplicaciones. No depende del lenguaje ni de la plataforma, lo que permite que sistemas heterogéneos puedan comunicarse entre sí. Por su parte, una API define el conjunto de reglas, endpoints y estructuras que especifican cómo se debe acceder a esas funcionalidades, estableciendo contratos claros entre sistemas.',
          },
          {
            type: 'p',
            text:
              'A continuación, se profundiza en la naturaleza de los servicios web dentro de las arquitecturas modernas, analizando cómo estructuran la lógica de las aplicaciones, los principales paradigmas de diseño de APIs y las implicaciones técnicas y operativas que estos enfoques tienen en el desarrollo y la evolución del software:',
          },
          {
            type: 'p',
            text: 'Naturaleza de los servicios web en arquitecturas modernas',
          },
          {
            type: 'p',
            text:
              'En la actualidad, los servicios web no solo exponen información, sino que estructuran la lógica de las aplicaciones en unidades reutilizables. Esto permite que diferentes componentes del sistema operen de forma independiente, reduciendo el acoplamiento y mejorando la capacidad de evolución del software.',
          },
          {
            type: 'p',
            text:
              'Desde una perspectiva técnica, los servicios web se basan en protocolos de comunicación como HTTP/HTTPS, utilizando formatos de intercambio de datos como JSON o XML. Estos formatos permiten estructurar la información de manera que pueda ser interpretada por distintos sistemas sin ambigüedades.',
          },
          {
            type: 'p',
            text: 'Paradigmas de APIs: enfoques de diseño',
          },
          {
            type: 'p',
            text:
              'Los paradigmas de APIs definen la forma en que se estructuran y consumen los servicios web. No se trata solo de tecnología, sino de modelos de diseño que determinan cómo se organiza la comunicación entre sistemas.',
          },
          {
            type: 'p',
            text:
              'El paradigma más extendido es REST (Representational State Transfer), el cual se basa en recursos identificados mediante URLs y en el uso de métodos HTTP (GET, POST, PUT, DELETE). REST prioriza la simplicidad, la escalabilidad y el uso eficiente de la web como plataforma.',
          },
          {
            type: 'p',
            text:
              'En contraste, SOAP (Simple Object Access Protocol) es un paradigma más estructurado que utiliza XML y define estándares estrictos para la comunicación. Aunque es más complejo, ofrece mayor formalidad y control, siendo utilizado en entornos donde la seguridad y la integridad son críticas.',
          },
          {
            type: 'p',
            text:
              'Más recientemente, han surgido enfoques como GraphQL, que permite al cliente definir exactamente qué datos necesita, y arquitecturas basadas en eventos, donde la comunicación no es directa, sino mediada por sistemas de mensajería.',
          },
          {
            type: 'p',
            text: 'Diferencias operativas entre paradigmas',
          },
          {
            type: 'p',
            text:
              'Las diferencias entre paradigmas no son superficiales, sino que impactan directamente en el diseño, rendimiento y mantenimiento del sistema.',
          },
          {
            type: 'p',
            text:
              'REST se caracteriza por su ligereza y facilidad de implementación, lo que lo convierte en la opción predominante para aplicaciones web y móviles. SOAP, en cambio, se enfoca en la formalidad y en el cumplimiento de estándares, siendo utilizado en sistemas empresariales donde la interoperabilidad controlada es esencial.',
          },
          {
            type: 'p',
            text:
              'GraphQL introduce un enfoque orientado al cliente, reduciendo el consumo innecesario de datos y mejorando la eficiencia en aplicaciones complejas. Por su parte, los sistemas basados en eventos permiten desacoplar completamente los componentes, facilitando la escalabilidad en arquitecturas distribuidas.',
          },
          {
            type: 'p',
            text: 'Diseño de APIs: principios fundamentales',
          },
          {
            type: 'p',
            text:
              'El diseño de una API no debe limitarse a exponer funcionalidades, sino que debe garantizar claridad, consistencia y facilidad de uso. Una API bien diseñada actúa como un contrato estable entre sistemas, permitiendo su evolución sin afectar a los consumidores.',
          },
          {
            type: 'p',
            text:
              'Entre los principios más relevantes se encuentran la consistencia en los endpoints, la correcta utilización de los métodos HTTP, la estructuración clara de las respuestas y el manejo adecuado de errores. Además, la documentación juega un papel crítico, ya que permite a otros desarrolladores comprender y utilizar la API de manera eficiente.',
          },
          {
            type: 'p',
            text:
              'Una API mal diseñada puede generar inconsistencias, dificultar la integración y aumentar los costos de mantenimiento.',
          },
        ],
      },
    ],
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
