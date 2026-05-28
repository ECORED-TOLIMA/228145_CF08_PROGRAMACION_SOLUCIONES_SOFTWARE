<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pruebas en el desarrollo de software

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
  name: 'Tema4',
  data: () => ({
    intro: [
      {
        type: 'p',
        text:
          'Las pruebas de software constituyen un proceso sistemático orientado a verificar y validar que un sistema cumple con los requisitos definidos y funciona correctamente en distintos escenarios de uso. No se limitan a detectar errores, sino que permiten evaluar la calidad del software, reducir riesgos y asegurar la confiabilidad del producto antes de su despliegue.',
      },
      {
        type: 'p',
        text:
          'Desde una perspectiva técnica, las pruebas se integran en todo el ciclo de vida del desarrollo, evolucionando desde un enfoque correctivo —donde se probaba al final— hacia un enfoque preventivo, donde las pruebas se diseñan y ejecutan de manera continua. Esto permite identificar defectos en etapas tempranas, reduciendo el costo de corrección y mejorando la estabilidad del sistema.',
      },
      {
        type: 'p',
        text:
          'Comprender las pruebas de software implica reconocerlas como un proceso continuo que acompaña todo el ciclo de desarrollo y contribuye tanto a la calidad técnica como a la confiabilidad del sistema. A partir de esta visión, los siguientes apartados abordan su propósito, los principales tipos de pruebas, el diseño de casos, la automatización y su integración en entornos modernos de desarrollo:',
      },
      {
        type: 'p',
        text: 'Naturaleza y propósito de las pruebas',
      },
      {
        type: 'p',
        text:
          'Las pruebas cumplen dos funciones fundamentales: verificación, que consiste en comprobar que el software se construyó correctamente según su diseño y validación, que asegura que el sistema satisface las necesidades del usuario.',
      },
      {
        type: 'p',
        text:
          'En términos prácticos, esto implica evaluar tanto el comportamiento esperado como las condiciones excepcionales, identificando fallos que podrían afectar la operación del sistema. Las pruebas no garantizan la ausencia total de errores, pero sí permiten reducir significativamente su probabilidad e impacto.',
      },
      {
        type: 'p',
        text: 'Tipos de pruebas en el desarrollo',
      },
      {
        type: 'p',
        text:
          'Las pruebas se clasifican según el nivel en el que se aplican y el tipo de evaluación que realizan. Cada tipo responde a una necesidad específica dentro del proceso de aseguramiento de calidad.',
      },
      {
        type: 'p',
        text:
          'Las pruebas unitarias se enfocan en componentes individuales, verificando que funciones o módulos específicos operen correctamente de manera aislada. Las pruebas de integración evalúan la interacción entre distintos componentes, asegurando que trabajen de forma conjunta sin errores. Por su parte, las pruebas de sistema analizan el comportamiento completo de la aplicación, mientras que las pruebas de aceptación validan el sistema desde la perspectiva del usuario final.',
      },
      {
        type: 'p',
        text: 'Diseño de pruebas y casos de prueba',
      },
      {
        type: 'p',
        text:
          'El diseño de pruebas implica definir de manera estructurada las condiciones bajo las cuales se evaluará el sistema. Esto se materializa en los casos de prueba, que describen entradas, pasos de ejecución y resultados esperados.',
      },
      {
        type: 'p',
        text:
          'Un caso de prueba bien definido permite reproducir escenarios específicos y comparar el comportamiento del sistema con lo esperado. Esto facilita la identificación de fallos y asegura que las pruebas sean repetibles y consistentes.',
      },
      {
        type: 'p',
        text:
          'En entornos profesionales, el diseño de pruebas se basa en técnicas como la partición de equivalencia, análisis de valores límite y pruebas basadas en escenarios, lo que permite cubrir múltiples condiciones sin necesidad de evaluar todas las combinaciones posibles.',
      },
      {
        type: 'p',
        text: 'Automatización de pruebas',
      },
      {
        type: 'p',
        text:
          'La automatización ha transformado la forma en que se realizan las pruebas, permitiendo ejecutar validaciones de manera repetitiva sin intervención manual. Esto es especialmente útil en procesos donde el software cambia constantemente, como en metodologías ágiles o integración continua.',
      },
      {
        type: 'p',
        text:
          'Las pruebas automatizadas permiten detectar errores de forma temprana, mejorar la cobertura del sistema y reducir el tiempo necesario para validar nuevas versiones. Sin embargo, su implementación requiere un diseño cuidadoso, ya que no todas las pruebas son susceptibles de automatización.',
      },
      {
        type: 'p',
        text: 'Pruebas en entornos modernos de desarrollo',
      },
      {
        type: 'p',
        text:
          'En el desarrollo actual, las pruebas se integran dentro de procesos continuos como CI/CD, donde cada cambio en el código es validado automáticamente antes de ser desplegado. Esto permite mantener un control constante sobre la calidad del software y evita la acumulación de errores.',
      },
      {
        type: 'p',
        text:
          'Además, enfoques como TDD (Test-Driven Development) proponen escribir las pruebas antes del código, lo que garantiza que cada funcionalidad tenga un criterio claro de validación desde su inicio.',
      },
    ],
    sections: [
      {
        id: 't_4_1',
        numero: '4.1',
        titulo: 'Casos de prueba y técnicas de creación',
        blocks: [
          {
            type: 'p',
            text:
              'Los casos de prueba son la unidad básica mediante la cual se valida el comportamiento de un sistema de software. Representan escenarios controlados que permiten evaluar si una funcionalidad cumple con los requisitos definidos, estableciendo una relación directa entre lo esperado y lo obtenido durante la ejecución.',
          },
          {
            type: 'p',
            text:
              'Desde un enfoque técnico, un caso de prueba no es solo una descripción de pasos, sino una estructura formal que permite reproducir condiciones específicas, facilitando la detección de errores, la validación de resultados y el seguimiento del comportamiento del sistema a lo largo del tiempo.',
          },
          {
            type: 'p',
            text: 'Estructura técnica de un caso de prueba',
          },
          {
            type: 'p',
            text:
              'Un caso de prueba bien construido debe garantizar claridad, repetibilidad y trazabilidad. Esto implica definir con precisión los elementos que intervienen en la validación, evitando ambigüedades que puedan afectar la interpretación de los resultados.',
          },
          {
            type: 'p',
            text: 'La siguiente tabla detalla lo que incluye cada componente:',
          },
          {
            type: 'caption',
            text: 'Tabla 5. Componentes estructurales de un caso de prueba',
          },
          {
            type: 'table',
            headers: [
              'Componente',
              'Propósito técnico',
              'Valor en la validación',
            ],
            rows: [
              [
                'Identificador.',
                'Permite su control y trazabilidad.',
                'Organización del proceso.',
              ],
              [
                'Descripción.',
                'Define el objetivo de la prueba.',
                'Contexto de evaluación.',
              ],
              [
                'Condiciones iniciales.',
                'Estado previo requerido.',
                'Control del entorno.',
              ],
              [
                'Datos de entrada.',
                'Información a evaluar.',
                'Simulación de escenarios.',
              ],
              [
                'Resultado esperado.',
                'Comportamiento correcto.',
                'Referencia de validación.',
              ],
              [
                'Resultado obtenido.',
                'Resultado real.',
                'Comparación objetiva.',
              ],
            ],
          },
          {
            type: 'p',
            text:
              'Construcción y técnicas de casos de prueba: enfoque sistemático',
          },
          {
            type: 'p',
            text:
              'El proceso de construcción de casos de prueba no es arbitrario; se basa en el análisis de requisitos y en la identificación de escenarios relevantes. Esto implica traducir funcionalidades en condiciones verificables, asegurando que cada aspecto del sistema sea evaluado de forma controlada.',
          },
          {
            type: 'p',
            text:
              'Un diseño adecuado considera tanto el comportamiento esperado como situaciones límite y condiciones',
          },
          {
            type: 'p',
            text:
              'excepcionales, lo que permite detectar errores que no son evidentes en escenarios básicos. Este enfoque evita la ejecución de pruebas innecesarias y optimiza la cobertura del sistema.',
          },
          {
            type: 'p',
            text:
              'Por su parte, las técnicas de diseño de pruebas permiten estructurar los casos de manera lógica, reduciendo la cantidad de pruebas necesarias sin afectar la calidad de la validación. Estas técnicas no buscan probar todo, sino probar lo necesario de forma inteligente.',
          },
          {
            type: 'p',
            text:
              'Se invita a analizar la siguiente tabla que sintetiza lo relacionado con estas técnicas:',
          },
          {
            type: 'caption',
            text: 'Tabla 6. Técnicas de diseño y su aplicación',
          },
          {
            type: 'table',
            headers: [
              'Técnica',
              'Principio de funcionamiento',
              'Aplicación práctica',
            ],
            rows: [
              [
                'Partición de equivalencia.',
                'Agrupa entradas similares.',
                'Reduce cantidad de pruebas.',
              ],
              [
                'Valores límite.',
                'Evalúa extremos.',
                'Detecta errores críticos.',
              ],
              [
                'Tablas de decisión.',
                'Analiza combinaciones.',
                'Sistemas con múltiples condiciones.',
              ],
              [
                'Transición de estados.',
                'Evalúa cambios de estado.',
                'Sistemas dinámicos.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Claves para un diseño efectivo de casos de prueba',
          },
          {
            type: 'p',
            text:
              'Uno de los principales desafíos en la creación de casos de prueba es lograr una cobertura adecuada sin generar redundancia. La cobertura se refiere al grado en que las pruebas evalúan las funcionalidades del sistema, mientras que la eficiencia busca minimizar el número de pruebas necesarias.',
          },
          {
            type: 'p',
            text:
              'Un equilibrio entre ambos aspectos permite validar el sistema de forma completa sin afectar el tiempo ni los recursos del proyecto. Esto se logra mediante la aplicación de técnicas de diseño y la priorización de escenarios críticos.',
          },
          {
            type: 'p',
            text:
              'Igualmente, es importante tener en cuenta que un diseño inadecuado de casos de prueba puede generar resultados poco confiables o dificultar la detección de errores.',
          },
          {
            type: 'p',
            text:
              'Entre los problemas más frecuentes se encuentran la falta de claridad en los resultados esperados, la duplicación de escenarios, la omisión de condiciones límite y la ausencia de trazabilidad con los requisitos.',
          },
          {
            type: 'p',
            text:
              'Estos errores afectan la calidad del proceso de pruebas y pueden llevar a conclusiones incorrectas sobre el estado del sistema.',
          },
        ],
      },
      {
        id: 't_4_2',
        numero: '4.2',
        titulo: 'Pruebas unitarias de software',
        blocks: [
          {
            type: 'p',
            text:
              'Las pruebas unitarias constituyen el nivel más básico y fundamental del proceso de validación en el desarrollo de software. Su propósito es verificar el comportamiento correcto de unidades individuales de código, como funciones, métodos o clases, de manera aislada. Este enfoque permite detectar errores en etapas tempranas, cuando su corrección es menos costosa y más controlable.',
          },
          {
            type: 'p',
            text:
              'A diferencia de otros tipos de pruebas, las pruebas unitarias no evalúan la interacción entre componentes, sino que se centran exclusivamente en el funcionamiento interno de una unidad específica. Esto implica que cada prueba se ejecuta en un entorno controlado, donde las dependencias externas son simuladas o eliminadas, garantizando que el resultado dependa únicamente del código evaluado.',
          },
          {
            type: 'p',
            text: 'Naturaleza técnica de las pruebas unitarias',
          },
          {
            type: 'p',
            text:
              'Desde una perspectiva estructural, una prueba unitaria se basa en la comparación entre un resultado esperado y el resultado obtenido, al ejecutar una unidad de código bajo condiciones específicas. Este proceso se apoya en frameworks especializados que permiten automatizar la ejecución y validación de los resultados.',
          },
          {
            type: 'p',
            text:
              'Una característica esencial es su independencia, lo que implica que cada prueba debe ejecutarse sin depender de otras. Esto garantiza que los errores puedan identificarse con precisión y que el comportamiento del sistema sea predecible.',
          },
          {
            type: 'p',
            text:
              'Desde esta perspectiva técnica, la siguiente imagen permite determinar el aislamiento de la unidad de código y la comparación entre el resultado obtenido y el esperado, elementos centrales de la prueba unitaria. Su análisis facilita comprender cómo se estructuran estas pruebas y prepara el terreno para abordar su aplicación y automatización en los apartados siguientes:',
          },
          {
            type: 'caption',
            text: 'Figura 4. Enfoque de prueba unitaria',
          },
          {
            type: 'p',
            text:
              'Una prueba unitaria bien diseñada incluye elementos que permiten estructurar la validación de forma clara y repetible. Estos componentes no solo definen la prueba, sino que garantizan su consistencia y se pueden representar de la siguiente manera:',
          },
          {
            type: 'caption',
            text: 'Tabla 7. Elementos técnicos de una prueba unitaria',
          },
          {
            type: 'table',
            headers: ['Elemento', 'Función específica', 'Impacto en la prueba'],
            rows: [
              [
                'Datos de entrada.',
                'Definen el escenario a evaluar.',
                'Control del comportamiento.',
              ],
              [
                'Unidad evaluada.',
                'Código bajo prueba.',
                'Objeto de validación.',
              ],
              [
                'Resultado esperado.',
                'Define el comportamiento correcto.',
                'Base de comparación.',
              ],
              [
                'Resultado obtenido.',
                'Resultado real de ejecución.',
                'Evidencia.',
              ],
              [
                'Aserción (assert).',
                'Verifica la igualdad entre resultados.',
                'Determina éxito o fallo.',
              ],
            ],
          },
          {
            type: 'p',
            text:
              'Estos elementos permiten que la prueba sea automatizable y reproducible en cualquier entorno.',
          },
          {
            type: 'p',
            text:
              'Las pruebas unitarias suelen organizarse bajo un patrón estructural que facilita su comprensión y mantenimiento. Este patrón divide la prueba en tres etapas claramente definidas:',
          },
          {
            type: 'p',
            text:
              'Preparación (arrange). Se configuran los datos de entrada, se inicializan los objetos necesarios y se establecen las condiciones iniciales del entorno de prueba. En esta fase también se simulan o aíslan las dependencias externas, con el fin de garantizar que la unidad de código se evalúe de forma controlada.',
          },
          {
            type: 'p',
            text:
              'Ejecución (act). Se invoca la unidad de código que se desea probar, aplicando la lógica bajo prueba con los datos y condiciones definidos en el paso anterior. Esta etapa representa la acción central de la prueba unitaria.',
          },
          {
            type: 'p',
            text:
              'Validación (assert). Se compara el resultado obtenido durante la ejecución con el resultado esperado previamente establecido. Esta verificación permite determinar si el comportamiento de la unidad de código es correcto o si existen desviaciones que indiquen un error.',
          },
          {
            type: 'p',
            text:
              'Una de las características más importantes de las pruebas unitarias es el aislamiento. Para lograrlo, se utilizan técnicas que permiten simular el comportamiento de dependencias externas, evitando que la prueba dependa de bases de datos, servicios o archivos reales.',
          },
          {
            type: 'p',
            text:
              'Las pruebas unitarias se ejecutan mediante herramientas que permiten automatizar su ejecución y validar resultados de manera inmediata. Estas herramientas se integran con entornos de desarrollo y sistemas de integración continua.',
          },
          {
            type: 'p',
            text:
              'Entre las más utilizadas se encuentran JUnit (Java), NUnit (.NET), PyTest (Python) y Jest (JavaScript). Estas plataformas permiten estructurar pruebas, ejecutar múltiples casos y generar reportes detallados.',
          },
          {
            type: 'p',
            text:
              'Las pruebas unitarias permiten medir la cobertura del código; es decir, el porcentaje de código que ha sido evaluado mediante pruebas. Sin embargo, una alta cobertura no garantiza calidad si las pruebas no están bien diseñadas.',
          },
          {
            type: 'p',
            text:
              'El objetivo no es alcanzar el 100 % de cobertura, sino asegurar que las partes críticas del sistema estén correctamente validadas. Esto implica priorizar funcionalidades sensibles y escenarios de alto impacto.',
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
