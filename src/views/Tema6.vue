<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Aspectos de gestión en el desarrollo de software

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
  name: 'Tema6',
  data: () => ({
    intro: [
      {
        type: 'p',
        text:
          'La gestión en el desarrollo de software comprende el conjunto de prácticas orientadas a planificar, organizar, coordinar y controlar los recursos involucrados en la construcción de un sistema. Su alcance va más allá de la administración del tiempo, ya que integra dimensiones técnicas, humanas y económicas que influyen directamente en el éxito del proyecto.',
      },
      {
        type: 'p',
        text:
          'Mientras el desarrollo técnico se concentra en cómo construir el sistema, la gestión se enfoca en decisiones estratégicas: qué construir, en qué orden, con qué recursos y bajo qué restricciones. Una gestión inadecuada puede comprometer un proyecto incluso cuando la solución técnica es correcta, generando retrasos, sobrecostos o productos que no satisfacen las necesidades reales.',
      },
      {
        type: 'p',
        text: 'Gestión del desarrollo como proceso continuo',
      },
      {
        type: 'p',
        text:
          'La gestión del software no ocurre en una única fase ni se limita a la planificación inicial. Se trata de un proceso continuo que acompaña al desarrollo desde su inicio hasta la entrega del sistema. En este proceso intervienen actividades como la coordinación del equipo, el seguimiento del trabajo realizado, la evaluación de resultados parciales y la adopción de acciones correctivas cuando es necesario.',
      },
      {
        type: 'p',
        text:
          'Este enfoque permite responder a cambios, reducir riesgos y mantener el control del proyecto sin rigidizar el desarrollo. La gestión actúa, así, como un marco que organiza el trabajo técnico y le da sentido dentro del proyecto.',
      },
      {
        type: 'p',
        text: 'Recursos, control y toma de decisiones',
      },
      {
        type: 'p',
        text:
          'El desarrollo de software requiere la gestión integrada de recursos humanos, tecnológicos y económicos. Asignar responsabilidades claras, facilitar herramientas adecuadas y establecer criterios de seguimiento son tareas esenciales para sostener el avance del proyecto.',
      },
      {
        type: 'p',
        text:
          'El control se apoya en la observación sistemática del progreso, la calidad del producto y el uso de los recursos. Su propósito no es solo detectar errores, sino proveer información para la toma de decisiones, permitiendo ajustar el desarrollo antes de que los problemas se acumulen.',
      },
      {
        type: 'p',
        text: 'La siguiente tabla ejemplifica al respecto:',
      },
      {
        type: 'caption',
        text:
          'Tabla 10. Dimensiones clave de la gestión en proyectos de software',
      },
      {
        type: 'table',
        headers: ['Tipo de costo', 'Característica principal', 'Ejemplo'],
        rows: [
          ['Directos.', 'Asociados al desarrollo.', 'Salarios del equipo.'],
          ['Indirectos.', 'Soporte al proyecto.', 'Infraestructura.'],
          ['Fijos.', 'No varían con el tiempo.', 'Licencias.'],
          ['Variables.', 'Dependen del desarrollo.', 'Horas adicionales.'],
          ['Ocultos.', 'No visibles inicialmente.', 'Retrabajo.'],
        ],
      },
      {
        type: 'p',
        text: 'Gestión como soporte del ciclo del proyecto',
      },
      {
        type: 'p',
        text:
          'La gestión del desarrollo se concreta operativamente a través de un ciclo de trabajo que articula la planificación, la ejecución, la medición y la corrección. Este ciclo permite estructurar el proyecto como un proceso iterativo, donde cada etapa retroalimenta a la siguiente.',
      },
      {
        type: 'p',
        text:
          'A continuación, se presenta este ciclo de gestión del proyecto de software, mostrando cómo estas fases se relacionan y permiten mantener el control y la coherencia del desarrollo a lo largo del tiempo:',
      },
      {
        type: 'p',
        text:
          'Planificación. Establece el marco de acción del proyecto, definiendo objetivos, alcance, tareas principales y recursos iniciales. Su función es orientar el desarrollo y facilitar la toma de decisiones sin pretender anticipar todos los detalles.',
      },
      {
        type: 'p',
        text:
          'Ejecución. Corresponde a la realización de las actividades técnicas planificadas, donde el equipo desarrolla el software, coordina tareas y produce los entregables, mientras la gestión asegura coherencia y continuidad del trabajo.',
      },
      {
        type: 'p',
        text:
          'Medición. Se centra en evaluar el avance y la calidad del proyecto mediante indicadores como cumplimiento de tareas, uso de recursos y estado del producto, proporcionando información objetiva sobre el progreso.',
      },
      {
        type: 'p',
        text:
          'Corrección. Implica realizar ajustes a partir de los resultados de la medición, modificando tareas, recursos o prioridades para corregir desviaciones, reducir riesgos y mantener el proyecto alineado con sus objetivos.',
      },
      {
        type: 'p',
        text:
          'Hay que tener presente, que todo proyecto de software está expuesto a riesgos que pueden afectar su desarrollo. La gestión de riesgos acompaña todo el ciclo del proyecto, permitiendo identificar posibles problemas, evaluar su impacto y definir acciones de mitigación de forma oportuna.',
      },
      {
        type: 'p',
        text:
          'De igual manera, la metodología de desarrollo determina cómo se organiza el trabajo a lo largo de las fases. Los enfoques tradicionales priorizan una planificación inicial detallada, mientras que las metodologías ágiles favorecen iteraciones cortas y ajustes continuos durante la ejecución y corrección.',
      },
      {
        type: 'p',
        text:
          'La comunicación constituye un elemento transversal de la gestión. Canales claros y mecanismos de coordinación efectivos permiten al equipo interpretar resultados, corregir desviaciones y mantener el proyecto alineado con sus objetivos, evitando errores y retrasos innecesarios.',
      },
    ],
    sections: [
      {
        id: 't_6_1',
        numero: '6.1',
        titulo: 'Costos asociados al desarrollo de software',
        blocks: [
          {
            type: 'p',
            text:
              'Los costos en el desarrollo de software corresponden al conjunto de recursos económicos necesarios para planificar, construir, probar, implementar y mantener un sistema a lo largo de su ciclo de vida. A diferencia de otros tipos de proyectos, el software no constituye un producto tangible, por lo que su costo no está asociado a materiales físicos, sino que depende principalmente del esfuerzo humano, el tiempo requerido y el nivel de complejidad de la solución desarrollada.',
          },
          {
            type: 'p',
            text:
              'Desde una perspectiva técnica, la estimación de costos supone un análisis integral de diversas variables, entre ellas el alcance funcional del sistema, el grado de incertidumbre del proyecto, las tecnologías seleccionadas y la experiencia del equipo de desarrollo. Cuando este proceso no se realiza de manera adecuada, se incrementa el riesgo de sobrecostos, retrasos en la entrega y, en casos críticos, el fracaso del proyecto.',
          },
          {
            type: 'p',
            text: 'Naturaleza de los costos en software',
          },
          {
            type: 'p',
            text:
              'Los costos en el desarrollo de software no siguen un comportamiento lineal. A medida que el sistema incrementa su complejidad, el esfuerzo requerido crece de forma desproporcionada, debido a factores como la integración entre componentes, la gestión de dependencias y la necesidad de realizar pruebas cada vez más exhaustivas para asegurar la estabilidad del sistema.',
          },
          {
            type: 'p',
            text:
              'Asimismo, el costo de un proyecto de software no se concentra únicamente en la fase de desarrollo. Una proporción significativa de los recursos se destina a las etapas posteriores, especialmente al mantenimiento, donde se corrigen defectos, se incorporan ajustes funcionales y se optimiza el desempeño del sistema en entornos de producción.',
          },
          {
            type: 'p',
            text:
              'Para gestionar el proyecto de manera efectiva, resulta fundamental identificar y clasificar los distintos tipos de costos involucrados. Esta clasificación permite comprender en qué áreas se concentran los recursos y facilita la toma de decisiones orientadas a su optimización. En este contexto, la siguiente tabla presenta una visión general de los principales tipos de costos que intervienen en un proyecto de software:',
          },
          {
            type: 'caption',
            text: 'Tabla 11. Clasificación técnica de costos',
          },
          {
            type: 'table',
            headers: ['Tipo de costo', 'Característica principal', 'Ejemplo'],
            rows: [
              ['Directos.', 'Asociados al desarrollo.', 'Salarios del equipo.'],
              ['Indirectos.', 'Soporte al proyecto.', 'Infraestructura.'],
              ['Fijos.', 'No varían con el tiempo.', 'Licencias.'],
              ['Variables.', 'Dependen del desarrollo.', 'Horas adicionales.'],
              ['Ocultos.', 'No visibles inicialmente.', 'Retrabajo.'],
            ],
          },
          {
            type: 'p',
            text: 'Estimación de costos en software (profundización)',
          },
          {
            type: 'p',
            text:
              'La estimación de costos es un proceso analítico que traduce requisitos y alcance en esfuerzo (horas-persona), tiempo y presupuesto. No busca exactitud perfecta, sino rangos confiables que permitan decidir, priorizar y comprometer entregables. La calidad de la estimación depende de la claridad de requisitos, la estabilidad del alcance y la disponibilidad de datos históricos.',
          },
          {
            type: 'p',
            text:
              'En la práctica, se combinan enfoques empíricos (experiencia, analogía con proyectos previos) con modelos cuantitativos. Entre estos últimos, COCOMO (en sus variantes) estima esfuerzo a partir del tamaño (ejemplo: KLOC o puntos de función) y factores de ajuste (complejidad, experiencia, herramientas, restricciones). Otros métodos comunes incluyen Puntos de Función (IFPUG) para medir tamaño funcional independiente del lenguaje, y estimación ágil relativa (story points + velocidad) para entornos iterativos.',
          },
          {
            type: 'p',
            text: 'Existen buenas prácticas de estimación como:',
          },
          {
            type: 'p',
            text:
              'Definir el alcance con suficiente detalle (historias/épicas, criterios de aceptación).',
          },
          {
            type: 'p',
            text:
              'Usar descomposición (WBS): dividir el sistema en componentes estimables.',
          },
          {
            type: 'p',
            text:
              'Aplicar triangulación: combinar al menos dos métodos (analógico + paramétrico).',
          },
          {
            type: 'p',
            text:
              'Estimar en rangos (optimista–más probable–pesimista) y derivar un valor esperado (ejemplo: PERT).',
          },
          {
            type: 'p',
            text:
              'Incorporar reservas de contingencia para incertidumbre y riesgos identificados.',
          },
          {
            type: 'p',
            text:
              'Ajustar por factores de productividad del equipo (experiencia, dominio del negocio, tooling).',
          },
          {
            type: 'p',
            text:
              'Revisar y reestimar iterativamente a medida que se reduce la incertidumbre.',
          },
          {
            type: 'p',
            text: 'Por lo cual, existen errores frecuentes tales como:',
          },
          {
            type: 'p',
            text:
              'Subestimar integración, pruebas y actividades no funcionales (seguridad, rendimiento).',
          },
          {
            type: 'p',
            text: 'Asumir productividad uniforme entre equipos o tecnologías.',
          },
          {
            type: 'p',
            text: 'No considerar retrabajo por cambios de requisitos.',
          },
          {
            type: 'p',
            text: 'Fijar una cifra única sin rango ni contingencias.',
          },
          {
            type: 'p',
            text: 'Relación entre tiempo, esfuerzo y costo (profundización)',
          },
          {
            type: 'p',
            text:
              'En software, el costo se modela típicamente como Costo ≈ Esfuerzo (horas) × Tarifa. El esfuerzo, a su vez, depende del tamaño y la complejidad. El tiempo calendario no es equivalente al esfuerzo: reducir el plazo no implica necesariamente reducir el costo.',
          },
          {
            type: 'p',
            text:
              'Un principio clave es que aumentar el equipo tiene rendimientos decrecientes debido a la coordinación, transferencia de conocimiento y dependencias. La comunicación crece de forma no lineal (aprox. n(n−1)/2 canales), lo que introduce sobrecarga y riesgo de inconsistencias.',
          },
          {
            type: 'p',
            text: 'Las siguientes son implicaciones prácticas:',
          },
          {
            type: 'p',
            text:
              'Compresión de cronograma. Hacerlo en menos tiempo: suele incrementar el costo por:',
          },
          {
            type: 'p',
            text: 'Mayor coordinación y gestión.',
          },
          {
            type: 'p',
            text: 'Necesidad de perfiles más senior.',
          },
          {
            type: 'p',
            text: 'Incremento de errores por presión de tiempo.',
          },
          {
            type: 'p',
            text:
              'Extensión del cronograma. Puede reducir picos de costo al distribuir el trabajo en el tiempo, pero incrementa los costos indirectos de gestión e infraestructura y eleva el riesgo de cambios durante el proyecto.',
          },
          {
            type: 'p',
            text:
              'Productividad. Apoyada en el uso de herramientas adecuadas, la automatización de procesos y la experiencia del equipo, es el factor más eficaz para mejorar la relación entre tiempo y costo en el desarrollo de software.',
          },
          {
            type: 'p',
            text: 'Dentro de las estrategias de optimización se tienen:',
          },
          {
            type: 'p',
            text:
              'Modularizar para permitir trabajo en paralelo con bajo acoplamiento.',
          },
          {
            type: 'p',
            text:
              'Invertir en automatización (CI/CD, pruebas) para reducir esfuerzo repetitivo.',
          },
          {
            type: 'p',
            text:
              'Mantener equipos pequeños y cohesionados en componentes bien definidos.',
          },
          {
            type: 'p',
            text:
              'Priorizar funcionalidades de alto valor (enfoque incremental) para entregar antes y reducir riesgo.',
          },
          {
            type: 'p',
            text: 'Costos de calidad en software (profundización)',
          },
          {
            type: 'p',
            text:
              'El costo de calidad se organiza en tres categorías: prevención, evaluación (detección) y fallas (internas y externas):',
          },
          {
            type: 'p',
            text:
              'Prevención. Actividades orientadas a evitar la aparición de defectos desde etapas tempranas, como revisiones de diseño, buenas prácticas de codificación y capacitación del equipo.',
          },
          {
            type: 'p',
            text:
              'Ejemplos: capacitación, estándares, revisiones de diseño, TDD, buenas prácticas.',
          },
          {
            type: 'p',
            text:
              'Evaluación (detección). Actividades destinadas a identificar defectos antes de la liberación del software, incluyendo pruebas, inspecciones y revisiones técnicas.',
          },
          {
            type: 'p',
            text:
              'Ejemplos: pruebas unitarias, integración, automatizadas, revisiones de código, QA.',
          },
          {
            type: 'p',
            text:
              'Fallas internas. Defectos detectados durante el desarrollo o las pruebas, antes de que el sistema entre en producción, lo que permite corregirlos con menor impacto.',
          },
          {
            type: 'p',
            text: 'Ejemplos: retrabajo, correcciones en QA, reprocesos.',
          },
          {
            type: 'p',
            text:
              'Fallas externas. Defectos que se manifiestan una vez el software está en producción, afectando a los usuarios finales y generando mayores costos de corrección y soporte.',
          },
          {
            type: 'p',
            text:
              'Ejemplos: incidentes, soporte, pérdida de reputación, penalizaciones contractuales.',
          },
          {
            type: 'p',
            text:
              'Principio económico clave:El costo de corregir un defecto crece exponencialmente a medida que avanza el ciclo de vida (requisitos → diseño → desarrollo → pruebas → producción). Principio económico clave:El costo de corregir un defecto crece exponencialmente a medida que avanza el ciclo de vida (requisitos → diseño → desarrollo → pruebas → producción).',
          },
        ],
      },
      {
        id: 't_6_2',
        numero: '6.2',
        titulo: 'Elementos y características de la estimación de costos',
        blocks: [
          {
            type: 'p',
            text:
              'La estimación de costos en el desarrollo de software no es un cálculo aislado, sino un proceso estructurado que depende de múltiples elementos interrelacionados. Estos elementos permiten transformar los requerimientos del sistema en una aproximación económica viable, considerando tanto el esfuerzo técnico como las condiciones del entorno.',
          },
          {
            type: 'p',
            text:
              'A nivel profesional, una estimación sólida no se basa únicamente en el tamaño del sistema, sino en la interacción entre: alcance, complejidad, recursos y contexto del proyecto. Comprender estos elementos permite reducir la incertidumbre y mejorar la toma de decisiones.',
          },
          {
            type: 'p',
            text: 'Elementos fundamentales en la estimación de costos',
          },
          {
            type: 'p',
            text:
              'Los elementos de estimación representan las variables que influyen directamente en el cálculo del costo. No todos tienen el mismo peso, pero en conjunto determinan la precisión de la estimación. Los siguientes, son dichos elementos:',
          },
          {
            type: 'p',
            text:
              'Alcance del proyecto. Define qué se va a desarrollar y delimita el esfuerzo necesario.',
          },
          {
            type: 'p',
            text:
              'Tamaño del software. Medido en líneas de código, puntos de función o historias de usuario.',
          },
          {
            type: 'p',
            text:
              'Complejidad técnica. Nivel de dificultad en la implementación e integración.',
          },
          {
            type: 'p',
            text:
              'Recursos humanos. Experiencia, habilidades y productividad del equipo.',
          },
          {
            type: 'p',
            text: 'Tecnología utilizada. Herramientas, frameworks y lenguajes.',
          },
          {
            type: 'p',
            text:
              'Restricciones del proyecto. Tiempo, presupuesto y condiciones externas.',
          },
          {
            type: 'p',
            text: 'Características de una estimación de costos',
          },
          {
            type: 'p',
            text:
              'Una estimación efectiva no se define únicamente por los elementos que la componen, sino por las características que garantizan su calidad y utilidad dentro del proyecto. En primer lugar, la aproximación progresiva permite que la estimación se refine a medida que se dispone de mayor información, reduciendo la incertidumbre conforme avanza el desarrollo.',
          },
          {
            type: 'p',
            text:
              'Asimismo, la flexibilidad es fundamental para ajustar la estimación frente a cambios en los requerimientos o en las condiciones del proyecto, sin perder control ni coherencia. La trazabilidad asegura que cada valor estimado pueda justificarse a partir de datos, supuestos y experiencias previas, lo que fortalece la toma de decisiones.',
          },
          {
            type: 'p',
            text:
              'La consistencia implica que las estimaciones mantengan coherencia con versiones anteriores y con proyectos similares, evitando variaciones arbitrarias. Finalmente, la transparencia facilita que el equipo comprenda cómo se obtuvieron las estimaciones, promoviendo confianza y alineación. En conjunto, estas características convierten la estimación en una herramienta de gestión estratégica y no solo en un valor numérico aislado.',
          },
          {
            type: 'p',
            text: 'Niveles de estimación en el desarrollo',
          },
          {
            type: 'p',
            text:
              'La estimación de costos no es un proceso único ni estático; evoluciona conforme avanza el proyecto y se reduce la incertidumbre. En cada etapa del ciclo de vida del software, la estimación adquiere un nivel distinto de precisión, detalle y confiabilidad.',
          },
          {
            type: 'p',
            text:
              'En fases tempranas, cuando los requisitos aún son generales, las estimaciones son aproximadas y sirven principalmente para evaluar la viabilidad del proyecto. A medida que se avanza hacia el diseño y desarrollo, la estimación se refina, incorporando información más concreta sobre el sistema.',
          },
          {
            type: 'p',
            text: 'Evolución de los niveles de estimación',
          },
          {
            type: 'p',
            text:
              'Cada nivel responde a un propósito específico dentro del proyecto:',
          },
          {
            type: 'p',
            text: 'Estimación inicial (orden de magnitud)',
          },
          {
            type: 'p',
            text: 'Se realiza en etapas tempranas (idea o propuesta).',
          },
          {
            type: 'p',
            text: 'Basada en información limitada.',
          },
          {
            type: 'p',
            text: 'Alta incertidumbre.',
          },
          {
            type: 'p',
            text: 'Se utiliza para toma de decisiones estratégicas.',
          },
          {
            type: 'p',
            text: 'Estimación intermedia (presupuestaria)',
          },
          {
            type: 'p',
            text: 'Se desarrolla durante el análisis y diseño.',
          },
          {
            type: 'p',
            text: 'Incluye mayor detalle de requisitos.',
          },
          {
            type: 'p',
            text: 'Permite planificar recursos y cronograma.',
          },
          {
            type: 'p',
            text: 'Reduce el margen de error.',
          },
          {
            type: 'p',
            text: 'Estimación detallada (definitiva)',
          },
          {
            type: 'p',
            text: 'Se realiza en etapas de desarrollo.',
          },
          {
            type: 'p',
            text: 'Basada en tareas específicas (WBS).',
          },
          {
            type: 'p',
            text: 'Alta precisión.',
          },
          {
            type: 'p',
            text: 'Se usa para control y seguimiento del proyecto.',
          },
          {
            type: 'p',
            text: 'Ajuste y validación de la estimación (profundización)',
          },
          {
            type: 'p',
            text:
              'La estimación no es un valor fijo; es una hipótesis que debe ser validada constantemente frente a la realidad del proyecto. El ajuste y validación permiten verificar si el proyecto avanza según lo previsto o si es necesario realizar correcciones.',
          },
          {
            type: 'p',
            text:
              'Este proceso implica comparar el esfuerzo real con el estimado, identificar desviaciones y tomar decisiones para corregirlas.',
          },
          {
            type: 'p',
            text: 'Tipos de ajustes en la estimación',
          },
          {
            type: 'p',
            text:
              'Dependiendo de las desviaciones detectadas, los ajustes pueden aplicarse en distintos niveles, cada uno orientado a restablecer el equilibrio del proyecto sin comprometer sus objetivos:',
          },
          {
            type: 'p',
            text:
              'Ajuste de alcance. Consiste en reducir, redefinir o priorizar funcionalidades para evitar el crecimiento descontrolado del proyecto. Este tipo de ajuste permite concentrar los esfuerzos en los requisitos más críticos y asegurar que el sistema entregue valor dentro de las limitaciones existentes.',
          },
          {
            type: 'p',
            text:
              'Ajuste de recursos. Implica la redistribución de tareas entre los miembros del equipo o la incorporación de personal con competencias específicas. Su objetivo es mejorar la capacidad de respuesta del proyecto ante cargas de trabajo elevadas o desafíos técnicos no previstos.',
          },
          {
            type: 'p',
            text:
              'Ajuste de tiempo. Se orienta a modificar el cronograma mediante la extensión de plazos o la reorganización de entregables. Este ajuste busca recuperar la viabilidad del proyecto cuando los tiempos inicialmente estimados resultan insuficientes.',
          },
          {
            type: 'p',
            text:
              'Ajuste técnico. Comprende decisiones relacionadas con el cambio o actualización de herramientas, tecnologías o enfoques de desarrollo. También incluye la optimización de procesos con el fin de aumentar la eficiencia, reducir errores y mejorar la calidad del producto final.',
          },
          {
            type: 'p',
            text:
              'Importancia del ajuste continuoEl ajuste continuo permite mantener el control del proyecto, evitando desviaciones críticas que puedan comprometer el presupuesto o el tiempo de entrega.En metodologías ágiles, este proceso se realiza de forma iterativa en cada ciclo de desarrollo (sprint), lo que facilita la adaptación a cambios y mejora la precisión de las estimaciones futuras.',
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
