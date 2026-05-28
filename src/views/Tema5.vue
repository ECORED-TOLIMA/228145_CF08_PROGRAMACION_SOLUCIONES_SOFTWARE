<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Documentación y buenas prácticas de programación

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
  name: 'Tema5',
  data: () => ({
    intro: [
      {
        type: 'p',
        text:
          'La documentación y las buenas prácticas de programación constituyen pilares fundamentales para garantizar la calidad, mantenibilidad y sostenibilidad del software. No se trata únicamente de escribir código funcional, sino de desarrollar soluciones que puedan ser comprendidas, utilizadas y mantenidas por otros desarrolladores a lo largo del tiempo.',
      },
      {
        type: 'p',
        text:
          'En entornos reales, el software no es un producto estático, sino un sistema en constante evolución. Por esta razón, la documentación permite transmitir conocimiento, mientras que las buenas prácticas establecen estándares que aseguran consistencia en el desarrollo. Ambos elementos reducen la dependencia del',
      },
      {
        type: 'p',
        text: 'desarrollador original y facilitan la continuidad del proyecto.',
      },
      {
        type: 'p',
        text: 'Importancia de la documentación en el desarrollo de software',
      },
      {
        type: 'p',
        text:
          'La documentación permite describir el funcionamiento del sistema, sus componentes y la forma en que debe ser utilizado o mantenido. Su valor no radica en la cantidad de información, sino en su claridad, precisión y utilidad para distintos actores del proyecto.',
      },
      {
        type: 'p',
        text:
          'En términos técnicos, la documentación cumple una función de referencia que facilita la comprensión del sistema sin necesidad de analizar directamente el código fuente. Esto es especialmente relevante en proyectos complejos donde múltiples equipos interactúan sobre el mismo sistema.',
      },
      {
        type: 'p',
        text:
          'La documentación no es uniforme, se adapta a diferentes necesidades según el rol de quien la utiliza y el momento del ciclo de vida del software. Por ende, es importante conocer la siguiente tipología y sus procesos:',
      },
      {
        type: 'caption',
        text: 'Tabla 8. Tipos de documentación y su propósito',
      },
      {
        type: 'table',
        headers: [
          'Tipo de documentación',
          'Enfoque principal',
          'Usuario objetivo',
        ],
        rows: [
          [
            'Técnica.',
            'Estructura y funcionamiento del sistema.',
            'Desarrolladores.',
          ],
          ['Funcional.', 'Comportamiento del sistema.', 'Analistas.'],
          ['Usuario.', 'Uso del sistema.', 'Usuarios finales.'],
          ['Operativa.', 'Instalación y despliegue.', 'Administradores.'],
        ],
      },
      {
        type: 'p',
        text:
          'Una documentación adecuada no debe ser extensa sin propósito, sino estructurada, orientada a facilitar la comprensión y, además de ello, debe:',
      },
      {
        type: 'p',
        text: 'Ser clara y precisa.',
      },
      {
        type: 'p',
        text: 'Mantenerse actualizada.',
      },
      {
        type: 'p',
        text: 'Ser accesible para el equipo.',
      },
      {
        type: 'p',
        text: 'Estar alineada con el sistema real.',
      },
      {
        type: 'p',
        text: 'Evitar redundancias innecesarias.',
      },
      {
        type: 'p',
        text: 'Buenas prácticas de programación',
      },
      {
        type: 'p',
        text:
          'Las buenas prácticas son principios que guían la forma en que se escribe el código, permitiendo que sea legible, mantenible y escalable. No son reglas rígidas, sino estándares que buscan mejorar la calidad del',
      },
      {
        type: 'p',
        text: 'desarrollo.',
      },
      {
        type: 'p',
        text:
          'Un código bien estructurado facilita su comprensión, reduce errores y permite realizar modificaciones sin afectar otras partes del sistema.',
      },
      {
        type: 'p',
        text:
          'Los principios de buenas prácticas en programación, deben incluir:',
      },
      {
        type: 'p',
        text:
          'Legibilidad. El código debe ser claro y comprensible, permitiendo que otros desarrolladores entiendan fácilmente su propósito, lógica y funcionamiento sin necesidad de explicaciones adicionales.',
      },
      {
        type: 'p',
        text:
          'Modularidad. Consiste en dividir el sistema en componentes o módulos independientes, cada uno con una responsabilidad específica, lo que facilita el mantenimiento, la prueba y la evolución del software.',
      },
      {
        type: 'p',
        text:
          'Reutilización. Promueve el uso de código existente y probado, evitando duplicaciones innecesarias y reduciendo el esfuerzo de desarrollo, al tiempo que mejora la consistencia y confiabilidad del sistema.',
      },
      {
        type: 'p',
        text:
          'Simplicidad. Implica evitar complejidad innecesaria en el diseño y la implementación, priorizando soluciones claras y directas que reduzcan errores y faciliten el mantenimiento.',
      },
      {
        type: 'p',
        text:
          'Consistencia. Se refiere al uso uniforme de estándares, convenciones y patrones a lo largo del código, lo que mejora la coherencia del sistema y facilita el trabajo colaborativo.',
      },
      {
        type: 'p',
        text:
          'Es importante destacar que la documentación y las buenas prácticas no son elementos independientes, sino complementarios. Un código bien escrito reduce la necesidad de documentación excesiva, mientras que una documentación adecuada facilita la comprensión del código.',
      },
      {
        type: 'p',
        text:
          'En conjunto, permiten construir sistemas más robustos, donde la información está organizada tanto en el código como en los documentos asociados.',
      },
      {
        type: 'p',
        text: 'Estructuración del código y mantenibilidad',
      },
      {
        type: 'p',
        text:
          'La forma en que se organiza el código influye directamente en la capacidad de evolucionar el sistema. Una',
      },
      {
        type: 'p',
        text:
          'estructura adecuada permite realizar cambios sin generar efectos secundarios no deseados.',
      },
      {
        type: 'p',
        text:
          'En este contexto, prácticas como la separación de responsabilidades, el uso de funciones pequeñas y la',
      },
      {
        type: 'p',
        text:
          'organización por capas permiten mejorar la claridad del sistema.',
      },
      {
        type: 'p',
        text:
          'Desde esta perspectiva, la estructuración del código no solo responde a criterios técnicos, sino que se refleja en la forma en que los distintos elementos del sistema se organizan y relacionan entre sí. La siguiente imagen permite visualizar esta organización, mostrando cómo una estructura clara y jerárquica contribuye a la mantenibilidad y a la separación efectiva de responsabilidades en el software:',
      },
      {
        type: 'caption',
        text: 'Figura 5. Organización estructural del código',
      },
    ],
    sections: [
      {
        id: 't_5_1',
        numero: '5.1',
        titulo: 'Manuales de usuario y técnicas de documentación',
        blocks: [
          {
            type: 'p',
            text:
              'Los manuales de usuario representan uno de los elementos más importantes dentro de la documentación del software, ya que constituyen el puente entre el sistema desarrollado y el usuario final. Su propósito es facilitar el uso correcto de la aplicación, permitiendo que personas sin conocimientos técnicos puedan interactuar con el sistema de manera eficiente.',
          },
          {
            type: 'p',
            text:
              'A diferencia de la documentación técnica, los manuales de usuario se enfocan en la experiencia práctica, explicando cómo realizar tareas específicas dentro del sistema. Esto implica traducir funcionalidades complejas en instrucciones claras, estructuradas y orientadas a la acción.',
          },
          {
            type: 'p',
            text: 'Rol de los manuales de usuario en el software',
          },
          {
            type: 'p',
            text:
              'Un manual de usuario no se limita a describir funcionalidades, sino que actúa como una guía de uso que orienta al usuario en la ejecución de procesos dentro del sistema. Su función principal es facilitar la resolución de dudas, reducir la curva de aprendizaje y contribuir a la reducción de errores operativos, mejorando así la experiencia general de uso. En términos prácticos, un manual bien diseñado permite al usuario operar el sistema con mayor autonomía, disminuyendo la necesidad de soporte técnico, reduciendo costos operativos y aumentando la eficiencia del software en su uso real.',
          },
          {
            type: 'p',
            text: 'Técnicas de documentación orientadas al usuario',
          },
          {
            type: 'p',
            text:
              'La documentación centrada en el usuario implica cambiar el enfoque tradicional: en lugar de explicar el sistema, se debe facilitar la ejecución de tareas reales.',
          },
          {
            type: 'p',
            text:
              'Esto requiere comprender el contexto del usuario, su nivel de conocimiento y los objetivos que busca cumplir.',
          },
          {
            type: 'p',
            text:
              'La documentación debe responder a preguntas prácticas como “¿qué se necesita hacer?” y “cómo se hace paso a paso?”, evitando explicaciones abstractas.',
          },
          {
            type: 'p',
            text:
              'Una técnica clave es la segmentación por tareas, donde cada sección del manual corresponde a una acción concreta. Esto mejora la navegabilidad y permite al usuario encontrar rápidamente lo que necesita.',
          },
          {
            type: 'p',
            text:
              'Basado en lo anterior, se relacionan las técnicas avanzadas de documentación centradas en el usuario:',
          },
          {
            type: 'p',
            text: 'Enfoque por tareas',
          },
          {
            type: 'p',
            text: 'Aplicación: organización por acciones.',
          },
          {
            type: 'p',
            text: 'Beneficio: mayor claridad.',
          },
          {
            type: 'p',
            text: 'Lenguaje contextual',
          },
          {
            type: 'p',
            text: 'Aplicación: adaptado al usuario.',
          },
          {
            type: 'p',
            text: 'Beneficio: mejor comprensión.',
          },
          {
            type: 'p',
            text: 'Secuencia guiada',
          },
          {
            type: 'p',
            text: 'Aplicación: pasos ordenados.',
          },
          {
            type: 'p',
            text: 'Beneficio: reduce errores.',
          },
          {
            type: 'p',
            text: 'Microcontenidos',
          },
          {
            type: 'p',
            text: 'Aplicación: información fragmentada.',
          },
          {
            type: 'p',
            text: 'Beneficio: acceso rápido.',
          },
          {
            type: 'p',
            text: 'Ejemplos prácticos',
          },
          {
            type: 'p',
            text: 'Aplicación: casos reales.',
          },
          {
            type: 'p',
            text: 'Beneficio: aprendizaje aplicado.',
          },
          {
            type: 'p',
            text: 'Diseño funcional y redacción técnica de manuales de usuario',
          },
          {
            type: 'p',
            text:
              'El diseño de un manual de usuario debe responder tanto al propósito del sistema como al perfil del usuario, lo que implica seleccionar el tipo de manual más adecuado y aplicar criterios rigurosos de redacción técnica. No resulta eficiente utilizar un único manual para todos los contextos, especialmente en sistemas complejos, donde es común combinar manuales con funciones diferenciadas —introductorias, procedimentales o de referencia— para acompañar progresivamente la adopción del software.',
          },
          {
            type: 'p',
            text:
              'Cada tipo de manual cumple un rol específico dentro del uso del sistema: algunos facilitan la familiarización inicial, otros orientan la operación diaria paso a paso, y otros permiten consultas rápidas por parte de usuarios experimentados. En entornos organizacionales, también adquieren relevancia los manuales contextuales y adaptativos, que integran procesos y roles específicos.',
          },
          {
            type: 'p',
            text:
              'De forma complementaria, la redacción técnica es un componente crítico para garantizar la efectividad de cualquier tipo de manual. Las instrucciones deben ser precisas, secuenciales y consistentes, evitando ambigüedades que puedan generar errores. Asimismo, es necesario controlar la carga cognitiva del usuario mediante textos breves, estructurados y claros, organizados en unidades manejables que faciliten la comprensión y la ejecución correcta de las tareas.',
          },
          {
            type: 'p',
            text:
              'En conjunto, la selección funcional del manual y una redacción técnica orientada a la claridad permiten que la documentación cumpla su objetivo principal: guiar al usuario de forma eficaz, reducir errores y optimizar el uso real del sistema.',
          },
        ],
      },
      {
        id: 't_5_2',
        numero: '5.2',
        titulo: 'Principios y buenas prácticas de programación',
        blocks: [
          {
            type: 'p',
            text:
              'Las buenas prácticas de programación constituyen el conjunto de criterios técnicos que permiten construir software legible, mantenible, escalable y confiable. No se limitan a la sintaxis del lenguaje, sino que definen la forma en que se estructura, organiza y evoluciona el código a lo largo del tiempo.',
          },
          {
            type: 'p',
            text:
              'En entornos profesionales, el código no es desarrollado para un único uso, sino que debe ser entendido, modificado y ampliado por diferentes desarrolladores. Por esta razón, las buenas prácticas buscan reducir la complejidad, mejorar la claridad y facilitar la adaptación del sistema a nuevos requerimientos.',
          },
          {
            type: 'p',
            text: 'Fundamentos de las buenas prácticas',
          },
          {
            type: 'p',
            text:
              'El objetivo principal de estas prácticas es controlar la complejidad del software. A medida que un sistema crece, la falta de organización puede generar dependencias innecesarias, dificultar su mantenimiento y aumentar la probabilidad de errores.',
          },
          {
            type: 'p',
            text:
              'Un código bien estructurado no solo cumple su función, sino que también comunica su intención, permitiendo que otros desarrolladores comprendan rápidamente su propósito y funcionamiento.',
          },
          {
            type: 'p',
            text: 'Principios clave en programación (profundización técnica)',
          },
          {
            type: 'p',
            text:
              'Los principios de programación no son reglas aisladas, sino criterios de diseño que permiten controlar la complejidad del software a medida que crece. Su aplicación sistemática evita que el código se convierta en una estructura difícil de mantener, conocida comúnmente como código espagueti.',
          },
          {
            type: 'p',
            text:
              'Más allá de definiciones básicas, estos principios operan como mecanismos de decisión: orientan cuándo dividir componentes, cómo evitar dependencias innecesarias y de qué forma estructurar soluciones que puedan evolucionar sin generar efectos colaterales.',
          },
          {
            type: 'p',
            text:
              'Un aspecto crítico es que estos principios no se aplican de forma rígida, sino contextual. Por ejemplo, aplicar',
          },
          {
            type: 'p',
            text:
              'DRY en exceso puede generar sobreabstracción, mientras que ignorarlo produce duplicidad. El equilibrio es lo que define la calidad del diseño.',
          },
          {
            type: 'p',
            text:
              'La siguiente tabla detalla la aplicación y riesgo de cada principio destacado en entornos reales:',
          },
          {
            type: 'caption',
            text:
              'Tabla 9. Aplicación avanzada de principios en escenarios reales',
          },
          {
            type: 'table',
            headers: [
              'Principio',
              'Aplicación concreta',
              'Riesgo si se ignora',
            ],
            rows: [
              [
                'SRP.',
                'Separar responsabilidades como validación, lógica de negocio y acceso a datos en componentes distintos.',
                'Código acoplado y difícil de mantener.',
              ],
              [
                'DRY.',
                'Centralizar la lógica común en funciones o módulos reutilizables.',
                'Duplicidad de código y mayor probabilidad de errores.',
              ],
              [
                'KISS.',
                'Elegir soluciones simples y comprensibles, evitando estructuras innecesariamente complejas.',
                'Complejidad innecesaria y baja legibilidad.',
              ],
              [
                'YAGNI.',
                'Implementar únicamente la funcionalidad requerida en el momento.',
                'Sobrediseño y aumento del esfuerzo de mantenimiento.',
              ],
              [
                'Open/Closed.',
                'Extender el comportamiento del sistema sin modificar el código existente.',
                'Fragilidad del sistema y riesgo de introducir fallos.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Estructuración del código y diseño',
          },
          {
            type: 'p',
            text:
              'La estructuración del código define cómo se organiza el sistema internamente. No se trata solo de dividir archivos, sino de establecer una arquitectura donde cada componente tenga un propósito claro y una responsabilidad delimitada.',
          },
          {
            type: 'p',
            text:
              'Una mala estructura genera acoplamiento, lo que significa que cambios en una parte del sistema afectan otras. En contraste, una buena estructura permite aislar cambios, facilitando la evolución del software sin romper funcionalidades existentes.',
          },
          {
            type: 'p',
            text:
              'El diseño por capas (presentación, lógica, datos) es una de las estrategias más utilizadas, ya que separa responsabilidades y permite modificar cada nivel de manera independiente. A esto se suma la modularidad, donde el sistema se divide en unidades autónomas.',
          },
          {
            type: 'p',
            text:
              'Las estrategias de estructuración del código se dan de la siguiente manera:',
          },
          {
            type: 'p',
            text:
              'Modularización. Consiste en dividir el sistema en componentes independientes, lo que reduce la complejidad del código y facilita su mantenimiento y evolución.',
          },
          {
            type: 'p',
            text:
              'Encapsulamiento. Implica ocultar los detalles de implementación de los componentes, disminuyendo el acoplamiento y protegiendo la estabilidad del sistema.',
          },
          {
            type: 'p',
            text:
              'Separación de capas. Organiza el sistema según responsabilidades funcionales, mejorando la claridad de la arquitectura y permitiendo una mayor escalabilidad.',
          },
          {
            type: 'p',
            text:
              'Inyección de dependencias. Permite gestionar las dependencias de manera externa a los componentes, lo que incrementa la flexibilidad y facilita el cambio, la prueba y la reutilización del código.',
          },
          {
            type: 'p',
            text:
              'Interfaces. Definen contratos claros entre componentes, permitiendo su sustitución y extensión sin afectar el funcionamiento general del sistema.',
          },
          {
            type: 'p',
            text: 'Legibilidad y calidad del código',
          },
          {
            type: 'p',
            text:
              'La legibilidad del código es un factor crítico porque el software se lee más veces de las que se escribe. Un código difícil de entender incrementa el tiempo de mantenimiento, aumenta la probabilidad de errores y reduce la productividad del equipo.',
          },
          {
            type: 'p',
            text:
              'La legibilidad no depende únicamente del nombre de variables, sino de la intención expresiva del código. Esto significa que el código debe ser capaz de explicar qué hace sin necesidad de comentarios extensos.',
          },
          {
            type: 'p',
            text:
              'Un elemento clave es la consistencia: usar patrones de nombrado, estructuras similares y convenciones uniformes permite que cualquier desarrollador pueda interpretar el sistema rápidamente.',
          },
          {
            type: 'p',
            text:
              'El flujo de comprensión del código se da siguiendo esta secuencia:',
          },
          {
            type: 'p',
            text: 'Código Lectura Interpretación Comprensión Mantenimiento',
          },
          {
            type: 'p',
            text: 'Manejo de errores y robustez',
          },
          {
            type: 'p',
            text:
              'El manejo de errores es un componente esencial para la estabilidad del sistema. No se trata solo de capturar excepciones, sino de diseñar el software para que responda adecuadamente ante condiciones inesperadas.',
          },
          {
            type: 'p',
            text:
              'Un sistema robusto debe anticipar fallos en entradas, procesos y dependencias externas. Esto implica validar datos antes de procesarlos, controlar excepciones y garantizar que el sistema pueda recuperarse o al menos fallar de forma controlada. Además, el manejo de errores debe proporcionar información útil para diagnóstico sin exponer detalles sensibles, especialmente en entornos productivos.',
          },
          {
            type: 'p',
            text: 'La siguiente imagen representa en cada nivel:',
          },
          {
            type: 'caption',
            text: 'Figura 6. Niveles de manejo de errores',
          },
          {
            type: 'p',
            text:
              'Para finalizar este tema, el siguiente video ejemplifica buenas y malas prácticas de programación mediante casos reales de código, mostrando cómo la estructuración, la legibilidad y el manejo de errores influyen directamente en la calidad y mantenibilidad del software:',
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
