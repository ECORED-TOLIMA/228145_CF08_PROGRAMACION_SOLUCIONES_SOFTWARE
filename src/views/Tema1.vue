<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de los lenguajes y paradigmas de programación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt").img400.m-auto
      .col-lg-8
        .p-4.bgf9.mb-4
          p.mb-0 Los lenguajes de programación constituyen la base sobre la cual se desarrollan los sistemas informáticos, permitiendo traducir necesidades humanas en instrucciones que pueden ser ejecutadas por una máquina. Su correcta comprensión no solo implica conocer su sintaxis, sino entender su lógica, estructura y propósito dentro del desarrollo de #[i software].
        p.mb-0 Por otra parte, los paradigmas de programación representan enfoques conceptuales que determinan la forma en que se construyen las soluciones, influyendo directamente en la organización del código, la reutilización de componentes y la eficiencia del sistema. La combinación adecuada entre lenguaje y paradigma permite desarrollar #[i software] más robusto, mantenible y escalable
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Lenguajes de programación: fundamento estructural 
    p Un lenguaje de programación no es solo un medio para escribir código, sino un sistema formal de representación computacional que define cómo se estructuran, interpretan y ejecutan las instrucciones dentro de un entorno informático.
    p Desde un enfoque técnico, los lenguajes se construyen sobre tres pilares:
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
          .tarjeta.bgf9.w-100
            .p-4
              h5.text-center Nivel de abstracción
              p.text-center Determina qué tan cerca está el lenguaje del hardware o del razonamiento humano.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
          .tarjeta.bgf9.w-100
            .p-4
              h5.text-center Modelo de ejecución
              p.text-center Define cómo se procesa el código (compilación o interpretación).
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
          .tarjeta.bgf9.w-100
            .p-4
              h5.text-center Tipado
              p.text-center Regula el manejo de datos (estático, dinámico, fuerte o débil).
    p La siguiente tabla ejemplifica la clasificación del lenguaje:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Clasificación funcional de lenguajes de programación
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Clasificación
                  th Característica principal
                  th Ejemplo
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Bajo nivel.
                  td Cercano al hardware.
                  td Ensamblador.
                tr  
                  th Alto nivel.
                  th Cercano al lenguaje humano.
                  th Python.
                tr(style="background-color: #F3F9FF;")
                  th Compilados.
                  th Traducción previa a ejecución.
                  th C++.
                tr
                  th Interpretados.
                  th Ejecución directa.
                  th JavaScript.
    p Los aspectos clave de los lenguajes destacan lo siguiente:
    .tarjeta--container.row.mb-4
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Definen cómo se escriben las instrucciones.
      .col.tarjeta.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Determinan el nivel de abstracción.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Influyen en el rendimiento del sistema.
      .col.tarjeta.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')
          
        p.mb-0.text-center Condicionan la facilidad de mantenimiento.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Estructura lógica de un lenguaje de programación (profundización)
    p La estructura lógica de un lenguaje define cómo se organizan las instrucciones para formar programas coherentes. Esta estructura no es arbitraria, sino que responde a reglas que garantizan su correcta ejecución.
    p.mb-4 Todo lenguaje se compone de elementos que permiten construir programas de forma organizada; encontrando:
    .row.justify-content-center.align-items-center
      .col-lg-3
        .bloque-texto-gg.bgf10.mb-4
          .bloque-texto-gg__texto.p-4
            p Sintaxis.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img9.svg')})`}"
          )
      .col-lg-3
        .bloque-texto-gg.bgf10.mb-4
          .bloque-texto-gg__texto.p-4
            p Semántica.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img10.svg')})`}"
          )
      .col-lg-3
        .bloque-texto-gg.bgf10.mb-4
          .bloque-texto-gg__texto.p-4
            p Control de flujo.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img11.svg')})`}"
          )
      .col-lg-3
        .bloque-texto-gg.bgf10.mb-4
          .bloque-texto-gg__texto.p-4
            p Tipos de datos.
          .bloque-texto-gg__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img12.svg')})`}"
          )
    p Más allá de estos elementos, los lenguajes modernos incorporan estructuras que permiten construir #[i software] complejo, como es:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.d-none.d-lg-block
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='Infografía de matriz RACI')
            .tarjeta.bgf6.p-3(x="14.5%" y="80%" numero="+")
              p.mb-0 Ejecución paso a paso en un orden lógico y predefinido, donde cada instrucción se procesa después de la anterior sin desviaciones
            .tarjeta.bgf6.p-3(x="38.5%" y="80%" numero="+")
              p.mb-0 Toma de decisiones basada en la evaluación de condiciones, permitiendo que el programa siga distintos caminos según el resultado
            .tarjeta.bgf6.p-3(x="62%" y="80%" numero="+")
              p.mb-0 Repetición controlada de procesos que se ejecutan mientras una condición se mantiene verdadera o por un número determinado de iteraciones
            .tarjeta.bgf6.p-3(x="85.5%" y="80%" numero="+")
              p.mb-0 División del programa en funciones o clases que encapsulan tareas específicas, facilitando la organización y reutilización del código
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img13_1.svg', alt='Matriz RACI para dispositivos móviles')
    p.mb-4 Es importante tener presente que la organización lógica de un programa se da así:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.d-none.d-lg-block.mb-4
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img14.svg', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img14_1.svg', alt='Matriz RACI para dispositivos móviles')
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Paradigmas de programación: enfoque conceptual
    p Los paradigmas no son herramientas, sino modelos mentales que definen cómo se estructura la solución de un problema. Cada paradigma introduce una forma distinta de pensar el desarrollo. Los paradigmas son modelos que guían la forma en que se resuelven los problemas mediante programación. No definen el lenguaje, sino el enfoque lógico aplicado.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La elección del paradigma influye directamente en la complejidad y mantenibilidad del sistema.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Relación entre lenguaje y paradigma
    p Un lenguaje de programación no está limitado a un único paradigma; por el contrario, los lenguajes modernos suelen ser multiparadigma, lo que permite aplicar distintos enfoques según la naturaleza del problema que se desea resolver. De este modo, un mismo lenguaje puede soportar múltiples paradigmas, combinando sus ventajas y ofreciendo mayor flexibilidad, expresividad y eficiencia en el proceso de desarrollo de #[i software].
    p Dentro de los lenguajes y paradigmas asociados se destacan:
    .row.justify-content-center.align-items-center
      .col-lg-10.d-none.d-lg-block.mb-4
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img15.png', alt='Infografía de matriz RACI')
            .tarjeta.bgf6.p-3(x="30%" y="23%" numero="+")
              .h5.mb-2 Java
              p Lenguaje principalmente orientado a objetos e imperativo, diseñado para promover la reutilización de código, la portabilidad entre plataformas y el desarrollo de aplicaciones robustas y escalables.
            .tarjeta.bgf6.p-3(x="30%" y="70%" numero="+")
              .h5.mb-2 JavaScript
              p Lenguaje con fuerte soporte funcional y orientado a eventos, fundamental en el desarrollo #[i web], donde permite crear aplicaciones interactivas y responder dinámicamente a acciones del usuario.
            .tarjeta.bgf6.p-3(x="76.5%" y="25%" numero="+")
              .h5.mb-2 Python
              p Lenguaje multiparadigma que integra enfoque funcional, orientado a objetos e imperativo, destacándose por su sintaxis sencilla, alta legibilidad y amplio uso en ciencia de datos, automatización y desarrollo de #[i software].
            .tarjeta.bgf6.p-3(x="73.5%" y="70%" numero="+")
              .h5.mb-2 C++
              p Lenguaje multiparadigma que combina programación procedimental, orientada a objetos y genérica, ofreciendo alto rendimiento y control de bajo nivel, ampliamente utilizado en sistemas, videojuegos y #[i software] de alto desempeño.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img15_1.png', alt='Matriz RACI para dispositivos móviles')
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Lenguajes de programación: tipos, características y usos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los lenguajes de programación constituyen el medio formal mediante el cual se establecen instrucciones precisas para que un sistema computacional ejecute tareas específicas. Sin embargo, desde una perspectiva más profunda, un lenguaje no debe entenderse únicamente como una herramienta de codificación, sino como un modelo de comunicación estructurada entre el pensamiento humano y la lógica de máquina.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-lg-1.order-2
        p Cada lenguaje incorpora reglas sintácticas y semánticas que permiten representar algoritmos, pero su verdadero valor radica en el nivel de abstracción que ofrece para resolver problemas; es decir, en la capacidad de simplificar la complejidad del hardware y traducirla en estructuras comprensibles para el desarrollador.
        .cajon.color-secundario.p-4.mb-2
          p.mb-0 En este sentido, los lenguajes de programación operan como capas intermedias que desacoplan la lógica del negocio de la ejecución física, permitiendo que el desarrollador se concentre en la solución del problema sin necesidad de gestionar directamente los detalles del hardware.
        p Para comprender realmente cómo funciona un lenguaje, es necesario analizarlo desde varias dimensiones que influyen directamente en su comportamiento y aplicabilidad:
      .col-lg-4.col-8.mb-4.mb-lg-0.order-lg-2.order-1
        figure
          img(src='@/assets/curso/temas/tema1/img17.svg', alt='Matriz RACI para dispositivos móviles')
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img18.png' alt='AvatarTop')
      .col-lg-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Nivel de abstracción")
            p Determina qué tan lejos está el lenguaje del hardware. Lenguajes de alto nivel permiten trabajar con conceptos más cercanos al problema, mientras que los de bajo nivel ofrecen mayor control sobre los recursos del sistema
          .row(numero="2" titulo="Modelo de ejecución")
            p Define cómo se procesa el código. Puede ser mediante compilación (traducción previa), interpretación (ejecución directa) o modelos híbridos (compilación intermedia con optimización en tiempo de ejecución)
          .row(numero="3" titulo="Sistema de tipos")
            p Regula cómo se manejan los datos. Un tipado estricto permite detectar errores antes de la ejecución, mientras que un tipado flexible facilita el desarrollo rápido, pero puede introducir fallos en tiempo de ejecución
          .row(numero="4" titulo="Paradigma soportado")
            p Indica el enfoque lógico que el lenguaje permite aplicar (orientado a objetos, funcional, etc.), condicionando la forma en que se estructura el código
          .row(numero="5" titulo="Entorno de ejecución")
            p Incluye la plataforma sobre la cual se ejecuta el programa (máquina virtual, sistema operativo, navegador), influyendo en la portabilidad y el rendimiento
    p El concepto clave para entender los lenguajes de programación es la abstracción. Un lenguaje abstrae tres niveles principales:
    SlyderB.mb-4(:datos="datosSlyder")
    p La elección de un lenguaje de programación no es una decisión superficial, ya que influye directamente en el rendimiento del sistema, la productividad del equipo de desarrollo, la calidad y mantenibilidad del código, la escalabilidad del sistema y la capacidad de integración con otras tecnologías, aspectos que en conjunto determinan la eficiencia y sostenibilidad de una solución de #[i software].
    p La tipología útil en proyectos reales combina la forma en que se ejecuta el código con el propósito para el cual se utiliza, tal como se aprecia en la siguiente tabla:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de lenguajes según ejecución y propósito
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Tipo
                  th Cómo funciona
                  th Cuándo usarlo
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Compilados.
                  td Se traducen a binario antes de ejecutarse.
                  td Sistemas de alto rendimiento.
                tr 
                  th Interpretados.
                  th Se ejecutan línea a línea.
                  th Desarrollo rápido y flexible.
                tr(style="background-color: #F3F9FF;")
                  th Híbridos (bytecode/JIT).
                  th Compilan a un intermedio y optimizan en ejecución.
                  th Apps empresariales y multiplataforma.
                tr
                  th Específicos de dominio (DSL).
                  th Enfocados a un problema concreto.
                  th Configuración, consultas, automatización.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img22.png' alt='AvatarTop')
      .col-lg-7
        p Más allá del “tipo”, un lenguaje de programación se evalúa por un conjunto de propiedades que impactan directamente el ciclo de desarrollo, como el tipado, la gestión de memoria, los paradigmas que soporta, la solidez de su ecosistema y su portabilidad. Estos factores influyen en la detección de errores, la eficiencia del desarrollo, el mantenimiento del código y la capacidad del lenguaje para adaptarse a distintos entornos y necesidades técnicas.
        .cajon.color-primario.p-4.mb-2
          p.mb-0 El uso de un lenguaje, por tanto, está condicionado por el tipo de sistema que se desea construir; no existe un lenguaje “mejor” en términos absolutos, sino uno más adecuado al problema y al contexto de aplicación. Esta relación se evidencia en su adopción según el dominio, como en el desarrollo #[i web], aplicaciones móviles, ciencia de datos o sistemas embebidos, donde cada área privilegia lenguajes con características alineadas a sus requerimientos.
        .bgf11.p-4
          .mb-0 Elegir un lenguaje implica evaluar variables técnicas y organizacionales. Esta decisión impacta todo el ciclo de vida del #[i software].
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Paradigmas de programación y su aplicación en el desarrollo de #[i software]
    p Los paradigmas de programación son modelos conceptuales que orientan la forma de pensar y estructurar soluciones de #[i software]. No constituyen lenguajes en sí mismos, sino enfoques que determinan cómo se gestiona el estado, el flujo de ejecución y la organización del código. En el desarrollo moderno, estos enfoques no se utilizan de manera aislada, sino que se combinan según las necesidades técnicas y contextuales del problema a resolver.
    figure.mb-4
      img(src='@/assets/curso/temas/tema1/img23.png' alt='AvatarTop')
    p Desde una perspectiva técnica, los paradigmas se diferencian principalmente por la forma en que manejan el estado, controlan la ejecución y promueven la modularidad. Estas diferencias no solo influyen en la sintaxis, sino también en la arquitectura, el rendimiento y la mantenibilidad del sistema. En la siguiente tabla se sintetizan los rasgos distintivos de los paradigmas más representativos:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Rasgos técnicos por paradigma
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Paradigma
                  th Gestión de estado
                  th Flujo de control
                  th Modularidad
                  th Fortalezas
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Imperativo.
                  td Estado mutable.
                  td Secuencial/condicional.
                  td Procedimientos.
                  td Control fino, rendimiento.
                tr 
                  th Orientado a objetos (OO).
                  td Estado encapsulado.
                  td Mensajes entre objetos.
                  td Clases/objetos.
                  td Reutilización, modelado del dominio.
                tr(style="background-color: #F3F9FF;")
                  th Funcional.
                  td Inmutable.
                  td Composición de funciones.
                  td Funciones puras.
                  td Predicibilidad, paralelismo.
                tr(style="background-color: #F3F9FF;")
                  th Declarativo.
                  td Implícito.
                  td Motor de evaluación.
                  td Reglas/consultas.
                  td Simplicidad, expresividad.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p En proyectos reales, la elección del paradigma se alinea con requisitos no funcionales como el rendimiento, la concurrencia o la facilidad de mantenimiento, así como con los patrones arquitectónicos adoptados. Esta relación se refleja en el uso predominante de ciertos paradigmas según el tipo de sistema y el dominio de aplicación, como se muestra a continuación.
        .cajon.color-secundario.mb-2.p-4
          p En la práctica, los lenguajes actuales permiten aplicar distintos paradigmas por capa o módulo, lo que facilita combinar modelado orientado a objetos, procesamiento funcional, enfoques reactivos y configuraciones declarativas dentro de un mismo sistema. Esta flexibilidad constituye una de las principales fortalezas del desarrollo de #[i software] contemporáneo.
        p Basado en lo anterior, la siguiente imagen resume las ideas desde una visión global del lenguaje de programación moderno:
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/img24.svg' alt='AvatarTop')
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 1.
          span Lenguajes de programación modernos y enfoque multiparadigma
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img25.svg', alt='Figura 1 que relaciona las acciones que componen un lenguaje de programación moderno, ilustrando la combinación de múltiples paradigmas y enfoques de desarrollo, así como la influencia del contexto, los requisitos del sistema y el ecosistema tecnológico en la construcción de soluciones de <em>software</em> mantenibles, escalables y adaptables.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema1/img25_1.svg', alt='Figura 1 que relaciona las acciones que componen un lenguaje de programación moderno, ilustrando la combinación de múltiples paradigmas y enfoques de desarrollo, así como la influencia del contexto, los requisitos del sistema y el ecosistema tecnológico en la construcción de soluciones de <em>software</em> mantenibles, escalables y adaptables.')
      
      


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    datosSlyder: [
      {
        titulo: 'Abstracción del hardware',
        texto:
          'Evita la necesidad de trabajar directamente con detalles de bajo nivel, como direcciones de memoria o registros del procesador, permitiendo que el programador se concentre en la lógica del sistema.',
        imagen: require('@/assets/curso/temas/tema1/img19.png'),
      },
      {
        titulo: 'Abstracción del problema',
        texto:
          'Permite modelar soluciones a partir de estructuras lógicas y conceptuales que representan el dominio del problema, facilitando su comprensión y traducción a código.',
        imagen: require('@/assets/curso/temas/tema1/img20.png'),
      },
      {
        titulo: 'Abstracción del proceso',
        texto:
          'Organiza la ejecución del programa mediante funciones, objetos o flujos de control, lo que mejora la claridad, el mantenimiento y la reutilización del <em>software</em>.',
        imagen: require('@/assets/curso/temas/tema1/img21.png'),
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
