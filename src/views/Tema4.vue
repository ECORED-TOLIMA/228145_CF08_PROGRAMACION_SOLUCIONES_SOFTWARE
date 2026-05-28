<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pruebas en el desarrollo de #[i software]
    figure.mb-4
      img(src='@/assets/curso/temas/tema4/img1.png', alt='Infografía de matriz RACI')
    p Las pruebas de #[i software] constituyen un proceso sistemático orientado a verificar y validar que un sistema cumple con los requisitos definidos y funciona correctamente en distintos escenarios de uso. No se limitan a detectar errores, sino que permiten evaluar la calidad del #[i software], reducir riesgos y asegurar la confiabilidad del producto antes de su despliegue.
    .BG02.mb-4.px-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema4/img2.png', alt='Infografía de matriz RACI')
        .col-lg-6
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Desde una perspectiva técnica, las pruebas se integran en todo el ciclo de vida del desarrollo, evolucionando desde un enfoque correctivo —donde se probaba al final— hacia un enfoque preventivo, donde las pruebas se diseñan y ejecutan de manera continua. Esto permite identificar defectos en etapas tempranas, reduciendo el costo de corrección y mejorando la estabilidad del sistema.
          p.mb-0 Comprender las pruebas de #[i software] implica reconocerlas como un proceso continuo que acompaña todo el ciclo de desarrollo y contribuye tanto a la calidad técnica como a la confiabilidad del sistema. A partir de esta visión, los siguientes apartados abordan su propósito, los principales tipos de pruebas, el diseño de casos, la automatización y su integración en entornos modernos de desarrollo:
    .BG01.p-5
      .tarjeta.tarjeta--gris.p-4
        PasosB.color-primario
          .row(titulo="")
            .col-lg-7.mb-4.mb-md-0.order-2.order-lg-1
              h5 Naturaleza y propósito de las pruebas
              p Las pruebas cumplen dos funciones fundamentales: verificación, que consiste en comprobar que el #[i software] se construyó correctamente según su diseño y validación, que asegura que el sistema satisface las necesidades del usuario.
              p En términos prácticos, esto implica evaluar tanto el comportamiento esperado como las condiciones excepcionales, identificando fallos que podrían afectar la operación del sistema. Las pruebas no garantizan la ausencia total de errores, pero sí permiten reducir significativamente su probabilidad e impacto.
            .col-lg-5.col-12.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-7.mb-4.mb-md-0.order-2.order-lg-1
              h5 Tipos de pruebas en el desarrollo
              p Las pruebas se clasifican según el nivel en el que se aplican y el tipo de evaluación que realizan. Cada tipo responde a una necesidad específica dentro del proceso de aseguramiento de calidad.
              p Las pruebas unitarias se enfocan en componentes individuales, verificando que funciones o módulos específicos operen correctamente de manera aislada. Las pruebas de integración evalúan la interacción entre distintos componentes, asegurando que trabajen de forma conjunta sin errores. Por su parte, las pruebas de sistema analizan el comportamiento completo de la aplicación, mientras que las pruebas de aceptación validan el sistema desde la perspectiva del usuario final.
            .col-lg-5.col.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img4.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-7.mb-4.mb-md-0.order-2.order-lg-1
              h5 Diseño de pruebas y casos de prueba
              p El diseño de pruebas implica definir de manera estructurada las condiciones bajo las cuales se evaluará el sistema. Esto se materializa en los casos de prueba, que describen entradas, pasos de ejecución y resultados esperados.
              p Un caso de prueba bien definido permite reproducir escenarios específicos y comparar el comportamiento del sistema con lo esperado. Esto facilita la identificación de fallos y asegura que las pruebas sean repetibles y consistentes.
              p En entornos profesionales, el diseño de pruebas se basa en técnicas como la partición de equivalencia, análisis de valores límite y pruebas basadas en escenarios, lo que permite cubrir múltiples condiciones sin necesidad de evaluar todas las combinaciones posibles.
            .col-lg-5.col.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img5.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-7.mb-4.mb-md-0.order-2.order-lg-1
              h5 Automatización de pruebas
              p La automatización ha transformado la forma en que se realizan las pruebas, permitiendo ejecutar validaciones de manera repetitiva sin intervención manual. Esto es especialmente útil en procesos donde el #[i software] cambia constantemente, como en metodologías ágiles o integración continua.
              p Las pruebas automatizadas permiten detectar errores de forma temprana, mejorar la cobertura del sistema y reducir el tiempo necesario para validar nuevas versiones. Sin embargo, su implementación requiere un diseño cuidadoso, ya que no todas las pruebas son susceptibles de automatización.
            .col-lg-5.col.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-lg-7.mb-4.mb-md-0.order-2.order-lg-1
              h5 Pruebas en entornos modernos de desarrollo
              p En el desarrollo actual, las pruebas se integran dentro de procesos continuos como CI/CD, donde cada cambio en el código es validado automáticamente antes de ser desplegado. Esto permite mantener un control constante sobre la calidad del #[i software] y evita la acumulación de errores.
              p Además, enfoques como TDD (Test-Driven Development) proponen escribir las pruebas antes del código, lo que garantiza que cada funcionalidad tenga un criterio claro de validación desde su inicio.
            .col-lg-5.col.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src='@/assets/curso/temas/tema4/img7.png', alt='Texto que describa la imagen')
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Casos de prueba y técnicas de creación
    figure.mb-4
      img(src='@/assets/curso/temas/tema4/img8.png', alt='Texto que describa la imagen')
    p.mb-4 Los casos de prueba son la unidad básica mediante la cual se valida el comportamiento de un sistema de #[i software]. Representan escenarios controlados que permiten evaluar si una funcionalidad cumple con los requisitos definidos, estableciendo una relación directa entre lo esperado y lo obtenido durante la ejecución. Desde un enfoque técnico, un caso de prueba no es solo una descripción de pasos, sino una estructura formal que permite reproducir condiciones específicas, facilitando la detección de errores, la validación de resultados y el seguimiento del comportamiento del sistema a lo largo del tiempo.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Estructura técnica de un caso de prueba
    p Un caso de prueba bien construido debe garantizar claridad, repetibilidad y trazabilidad. Esto implica definir con precisión los elementos que intervienen en la validación, evitando ambigüedades que puedan afectar la interpretación de los resultados.
    p.mb-4 La siguiente tabla detalla lo que incluye cada componente:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Componentes estructurales de un caso de prueba
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Componente
                  th Propósito técnico
                  th Valor en la validación
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Identificador.
                  td Permite su control y trazabilidad.
                  td Organización del proceso.
                tr 
                  th Descripción.
                  td Define el objetivo de la prueba.
                  td Contexto de evaluación.
                tr(style="background-color: #F3F9FF;")
                  th Condiciones iniciales.
                  td Estado previo requerido.
                  td Control del entorno.
                tr
                  th Datos de entrada.
                  td Información a evaluar.
                  td Simulación de escenarios.
                tr(style="background-color: #F3F9FF;")
                  th Resultado esperado.
                  td Comportamiento correcto.
                  td Referencia de validación.
                tr
                  th Resultado obtenido.
                  td Resultado real.
                  td Comparación objetiva.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Construcción y técnicas de casos de prueba: enfoque sistemático
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img9.png', alt='Infografía de matriz RACI')
      .col-lg-7
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema4/img10.svg', alt='Infografía de matriz RACI')
          .col-lg-9
            p El proceso de construcción de casos de prueba no es arbitrario; se basa en el análisis de requisitos y en la identificación de escenarios relevantes. Esto implica traducir funcionalidades en condiciones verificables, asegurando que cada aspecto del sistema sea evaluado de forma controlada.
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Un diseño adecuado considera tanto el comportamiento esperado como situaciones límite y condiciones excepcionales, lo que permite detectar errores que no son evidentes en escenarios básicos. Este enfoque evita la ejecución de pruebas innecesarias y optimiza la cobertura del sistema.
        p Por su parte, las técnicas de diseño de pruebas permiten estructurar los casos de manera lógica, reduciendo la cantidad de pruebas necesarias sin afectar la calidad de la validación. Estas técnicas no buscan probar todo, sino probar lo necesario de forma inteligente.
    p Se invita a analizar la siguiente tabla que sintetiza lo relacionado con estas técnicas:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Técnicas de diseño y su aplicación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Técnica
                  th Principio de funcionamiento
                  th Aplicación práctica
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Partición de equivalencia.
                  td Agrupa entradas similares.
                  td Reduce cantidad de pruebas.
                tr 
                  th Valores límite.
                  td Evalúa extremos.
                  td Detecta errores críticos.
                tr(style="background-color: #F3F9FF;")
                  th Tablas de decisión.
                  td Analiza combinaciones.
                  td Sistemas con múltiples condiciones.
                tr
                  th Transición de estados.
                  td Evalúa cambios de estado.
                  td Sistemas dinámicos.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Claves para un diseño efectivo de casos de prueba
    p.mb-4 Uno de los principales desafíos en la creación de casos de prueba es lograr una cobertura adecuada sin generar redundancia. La cobertura se refiere al grado en que las pruebas evalúan las funcionalidades del sistema, mientras que la eficiencia busca minimizar el número de pruebas necesarias.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Un equilibrio entre ambos aspectos permite validar el sistema de forma completa sin afectar el tiempo ni los recursos del proyecto. Esto se logra mediante la aplicación de técnicas de diseño y la priorización de escenarios críticos.
        p.mb-0 Igualmente, es importante tener en cuenta que un diseño inadecuado de casos de prueba puede generar resultados poco confiables o dificultar la detección de errores.
    p Entre los problemas más frecuentes se encuentran la falta de claridad en los resultados esperados, la duplicación de escenarios, la omisión de condiciones límite y la ausencia de trazabilidad con los requisitos. 
    p.mb-0 Estos errores afectan la calidad del proceso de pruebas y pueden llevar a conclusiones incorrectas sobre el estado del sistema.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Pruebas unitarias de #[i software]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img12.png', alt='Infografía de matriz RACI')
      .col-lg-7
        p Las pruebas unitarias constituyen el nivel más básico y fundamental del proceso de validación en el desarrollo de #[i software]. Su propósito es verificar el comportamiento correcto de unidades individuales de código, como funciones, métodos o clases, de manera aislada. Este enfoque permite detectar errores en etapas tempranas, cuando su corrección es menos costosa y más controlable.
        .p-4.cajon.color-primario
          p.mb-0 A diferencia de otros tipos de pruebas, las pruebas unitarias no evalúan la interacción entre componentes, sino que se centran exclusivamente en el funcionamiento interno de una unidad específica. Esto implica que cada prueba se ejecuta en un entorno controlado, donde las dependencias externas son simuladas o eliminadas, garantizando que el resultado dependa únicamente del código evaluado.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Naturaleza técnica de las pruebas unitarias
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p Desde una perspectiva estructural, una prueba unitaria se basa en la comparación entre un resultado esperado y el resultado obtenido, al ejecutar una unidad de código bajo condiciones específicas. Este proceso se apoya en #[i frameworks] especializados que permiten automatizar la ejecución y validación de los resultados.
        .p-4.mb-2.cajon.color-primario
          p Una característica esencial es su independencia, lo que implica que cada prueba debe ejecutarse sin depender de otras. Esto garantiza que los errores puedan identificarse con precisión y que el comportamiento del sistema sea predecible.
        p Desde esta perspectiva técnica, la siguiente imagen permite determinar el aislamiento de la unidad de código y la comparación entre el resultado obtenido y el esperado, elementos centrales de la prueba unitaria. Su análisis facilita comprender cómo se estructuran estas pruebas y prepara el terreno para abordar su aplicación y automatización en los apartados siguientes:
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img13.png', alt='Infografía de matriz RACI')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 4.
          span Enfoque de prueba unitaria
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema4/img14.svg', alt='Figura 4 que representa el flujo básico de una prueba unitaria, en el que entradas de prueba se aplican a una unidad de código aislada. El resultado obtenido se compara con el resultado esperado, determinando si la prueba es exitosa o fallida, mientras las dependencias externas se muestran separadas y no intervienen en la ejecución.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema4/img14_1.svg', alt='Figura 4 que representa el flujo básico de una prueba unitaria, en el que entradas de prueba se aplican a una unidad de código aislada. El resultado obtenido se compara con el resultado esperado, determinando si la prueba es exitosa o fallida, mientras las dependencias externas se muestran separadas y no intervienen en la ejecución.')
    p Una prueba unitaria bien diseñada incluye elementos que permiten estructurar la validación de forma clara y repetible. Estos componentes no solo definen la prueba, sino que garantizan su consistencia y se pueden representar de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Elementos técnicos de una prueba unitaria
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Elemento
                  th Función específica
                  th Impacto en la prueba
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Datos de entrada.
                  td Definen el escenario a evaluar.
                  td Control del comportamiento.
                tr  
                  th Unidad evaluada.
                  td Código bajo prueba.
                  td Objeto de validación.
                tr(style="background-color: #F3F9FF;")
                  th Resultado esperado.
                  td Define el comportamiento correcto.
                  td Base de comparación.
                tr
                  th Resultado obtenido.
                  td Resultado real de ejecución.
                  td Evidencia.
                tr(style="background-color: #F3F9FF;")
                  th Aserción (#[i assert]).
                  td Verifica la igualdad entre resultados.
                  td Determina éxito o fallo.
    p Estos elementos permiten que la prueba sea automatizable y reproducible en cualquier entorno.    
    p.mb-4 Las pruebas unitarias suelen organizarse bajo un patrón estructural que facilita su comprensión y mantenimiento. Este patrón divide la prueba en tres etapas claramente definidas:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        PasosA.color-primario(tipo="n")
          .row
            .col-lg-10.mb-4.mb-md-0
              h3 Preparación (#[i arrange])
              p Se configuran los datos de entrada, se inicializan los objetos necesarios y se establecen las condiciones iniciales del entorno de prueba. En esta fase también se simulan o aíslan las dependencias externas, con el fin de garantizar que la unidad de código se evalúe de forma controlada.
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img15.svg', alt='Texto que describa la imagen')

          .row
            .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema4/img16.svg', alt='Texto que describa la imagen')
            .col-lg-10
              h3 Ejecución (#[i act])
              p Se invoca la unidad de código que se desea probar, aplicando la lógica bajo prueba con los datos y condiciones definidos en el paso anterior. Esta etapa representa la acción central de la prueba unitaria.
          .row
            .col-lg-10
              h3 Validación (#[i assert])
              p Se compara el resultado obtenido durante la ejecución con el resultado esperado previamente establecido. Esta verificación permite determinar si el comportamiento de la unidad de código es correcto o si existen desviaciones que indiquen un error.
            .col-lg-2.d-none.d-lg-block.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema4/img17.svg', alt='Texto que describa la imagen')
    p Una de las características más importantes de las pruebas unitarias es el aislamiento. Para lograrlo, se utilizan técnicas que permiten simular el comportamiento de dependencias externas, evitando que la prueba dependa de bases de datos, servicios o archivos reales.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img18.png', alt='Texto que describa la imagen')         
      .col-lg-5     
        p Las pruebas unitarias se ejecutan mediante herramientas que permiten automatizar su ejecución y validar resultados de manera inmediata. Estas herramientas se integran con entornos de desarrollo y sistemas de integración continua.
        .p-4.cajon.color-secundario
          p.mb-0 Entre las más utilizadas se encuentran JUnit (Java), NUnit (.NET), PyTest (Python) y Jest (JavaScript). Estas plataformas permiten estructurar pruebas, ejecutar múltiples casos y generar reportes detallados.
    p Las pruebas unitarias permiten medir la cobertura del código; es decir, el porcentaje de código que ha sido evaluado mediante pruebas. Sin embargo, una alta cobertura no garantiza calidad si las pruebas no están bien diseñadas.
    .row.justify-content-center.align-items-center
      .col-lg-10    
        .p-4.cajon.color-secundario
          p El objetivo no es alcanzar el 100 % de cobertura, sino asegurar que las partes críticas del sistema estén correctamente validadas. Esto implica priorizar funcionalidades sensibles y escenarios de alto impacto.

</template>
<script>
export default {
  name: 'Tema4',
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
