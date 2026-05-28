<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Herramientas de desarrollo de #[i software]
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las herramientas de desarrollo de #[i software] son el conjunto de aplicaciones que permiten diseñar, construir, probar, documentar y mantener sistemas informáticos. Su uso adecuado impacta directamente en la productividad del equipo, la calidad del código y la eficiencia del proceso de desarrollo.
        p.mb-0 En el contexto actual, el desarrollo no depende de una sola herramienta, sino de un ecosistema integrado, donde cada componente cumple una función específica dentro del ciclo de vida del #[i software].
    p Las herramientas se organizan según la etapa del desarrollo en la que aportan valor, permitiendo estructurar el trabajo de manera más eficiente. Entre ellas se encuentran:
    SlyderF(columnas="col-lg-6 col-xl-4").mb-4
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img2.svg' alt='AvatarTop')
        h2.text-center Edición y codificación
        p.text-center Escritura y estructuración del código fuente mediante herramientas que facilitan la legibilidad, la corrección de errores y la productividad del desarrollador.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
        h2.text-center Gestión del proyecto
        p.text-center Organización y seguimiento de tareas, recursos y tiempos para coordinar el trabajo del equipo y cumplir los objetivos del desarrollo.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
        h2.text-center Control de versiones
        p.text-center Registro y seguimiento de los cambios en el código, permitiendo colaboración, trazabilidad y recuperación de versiones anteriores.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img4_1.svg' alt='AvatarTop')
        h2.text-center Pruebas
        p.text-center Validación del #[i software] mediante la detección de errores y la verificación de que el sistema cumple con los requisitos definidos.
      .tarjeta.bgfondo--slyderf.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema2/img4_2.svg' alt='AvatarTop')
        h2.text-center Integración y despliegue
        p.text-center Automatización de los procesos de integración del código y publicación de la aplicación en los entornos correspondientes.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .p-4.cajon.color-primario
          p.mb-0 No existe una herramienta universal; el valor está en cómo se combinan dentro del flujo de trabajo.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-1.order-lg-2
        p Los entornos de desarrollo integrados (IDE) y los editores de código constituyen el punto de entrada al proceso de desarrollo de #[i software]. Estas herramientas permiten escribir y estructurar el código, detectar errores de forma temprana y ejecutar programas dentro de un mismo entorno, incorporando funcionalidades como resaltado de sintaxis, autocompletado, depuración e integración con compiladores o intérpretes, lo que mejora la productividad y la calidad del código.
        .p-4.cajon.color-secundario.mb-2  
          p.mb-0 El desarrollo de #[i software] moderno es, en gran medida, un proceso colaborativo, por lo que resulta indispensable contar con herramientas que faciliten la organización del trabajo y la coordinación entre los miembros del equipo. La gestión de tareas, el seguimiento de avances, la asignación de responsabilidades y la documentación compartida permiten mantener una visión clara del proyecto y asegurar la coherencia del trabajo, especialmente en equipos distribuidos.        
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img5.png' alt='AvatarTop')
    .row
      .col-lg-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img6.svg' alt='AvatarTop')
      .col-lg-10
        p Por su parte, el control de versiones cumple un papel fundamental al permitir registrar y gestionar los cambios realizados sobre el código fuente. A través del historial de modificaciones, el trabajo en paralelo mediante ramas, la integración de cambios y la recuperación de versiones anteriores, estas herramientas garantizan trazabilidad, colaboración efectiva y control sobre la evolución del #[i software]. 
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Editores de código y entornos de desarrollo
    p Los editores de código y los entornos de desarrollo (IDE) son herramientas esenciales en la construcción de #[i software], ya que proporcionan el espacio donde el desarrollador escribe, organiza, prueba y depura el código. Aunque ambos cumplen funciones similares, se diferencian en su nivel de complejidad e integración.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema2/img7.svg' alt='AvatarTop')
      .col-lg-9
        p Un editor de código está orientado a la edición ligera y flexible, mientras que un IDE ofrece un entorno completo que integra múltiples herramientas en una sola plataforma, optimizando el flujo de trabajo del desarrollador. La principal diferencia no radica solo en las funcionalidades, sino en el nivel de integración y automatización que ofrecen.
    p.mb-4 La siguiente tabla, clarifica un poco estas diferencias:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Diferenciación técnica editor y entornos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr
                  th Característica
                  th Editor de código
                  th Entorno de desarrollo (IDE)
              tbody
                tr(style="background-color: #F3F9FF;")
                  th Complejidad.
                  td Baja.
                  td Alta.
                tr 
                  th Integración.
                  td Limitada.
                  td Completa.
                tr(style="background-color: #F3F9FF;")
                  th Rendimiento.
                  td Ligero.
                  td Más robusto.
                tr
                  th Funcionalidad.
                  td Edición básica.
                  td Desarrollo integral.
    p.mb-4 Más allá de su tipo, estas herramientas incorporan las siguientes funcionalidades que impactan directamente en la productividad:
    .row.justify-content-center.BG01.align-items-center.px-5.mb-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img8.png", alt="alt").img400.m-auto
      .col-lg-8
        SlyderF.p-4(columnas="col-lg-4 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img9.svg", alt="alt").img100.m-auto
            h5.text-center Autocompletado inteligente
            p.text-center.mb-0 Reduce errores y acelera la escritura.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img10.svg", alt="alt").img100.m-auto
            h5.text-center Resaltado de sintaxis
            p.text-center.mb-0 Mejora la lectura del código
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img11.svg", alt="alt").img100.m-auto
            h5.text-center Depuración (#[i debugging])
            p.text-center.mb-0 Permite identificar fallos en ejecución.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img11_1.svg", alt="alt").img100.m-auto
            h5.text-center Gestión de proyectos
            p.text-center.mb-0 Organiza archivos y dependencias
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema2/img11_2.svg", alt="alt").img100.m-auto
            h5.text-center Integración con control de versiones
            p.text-center.mb-0 Facilita el trabajo colaborativo.
    p Los editores de código están diseñados para ser rápidos, ligeros y altamente configurables, lo que los hace ideales para desarrolladores que requieren adaptabilidad, destacando:
    .tarjeta--container.row.mb-4
      .col.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img12.svg', alt='Texto que describa la imagen')
          
        h5.text-center Bajo consumo de recursos.
      .col.tarjeta.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img13.svg', alt='Texto que describa la imagen')
          
        h5.text-center Amplia personalización mediante extensiones.
      .col.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img14.svg', alt='Texto que describa la imagen')
          
        h5.text-center Soporte para múltiples lenguajes.
      .col.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/img15.svg', alt='Texto que describa la imagen')
          
        h5.text-center Uso eficiente en proyectos pequeños o medianos.
    p.mb-4 Los IDE están diseñados para ofrecer un entorno completo que integra todas las herramientas necesarias para el desarrollo y ofrecen:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img16.svg', alt='Texto que describa la imagen')
      .col-lg-5
        ol.lista-ol--cuadro.lista-ol--separador.mb-4
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Compilación y ejecución integrada.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Análisis estático de código.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Refactorización automática.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Gestión avanzada de dependencias.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Integración con bases de datos y servidores.
        .cajon.color-secundario.p-4
          p.mb-0 La elección entre editor o IDE depende del contexto del proyecto y del perfil del desarrollador.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 #[i Frameworks] y herramientas de apoyo al desarrollo
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1
        .p-4.cajon.color-secundario.mb-2
          p.mb-0 Los #[i frameworks] y herramientas de apoyo son componentes clave en el desarrollo moderno, ya que proporcionan estructuras predefinidas, funcionalidades reutilizables y automatización de tareas, permitiendo construir aplicaciones de manera más eficiente y organizada.
        p A diferencia de los lenguajes de programación, los #[i frameworks] no definen cómo se escribe el código, sino cómo se estructura y se organiza dentro de un entorno específico, promoviendo buenas prácticas y reduciendo la complejidad del desarrollo.
        p.mb-0 Un framework es un conjunto de librerías, reglas y convenciones que establecen una base sobre la cual se construyen aplicaciones. Su principal característica es la inversión de control, donde el framework define el flujo general y el desarrollador implementa los componentes específicos.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img17.png', alt='Texto que describa la imagen')
    .BG022.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')
        .col-lg-6
          .p-4.bgf12.border
            p Sus características esenciales son:
            ol.lista-ol--cuadro
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Proporcionan arquitectura base (ej. MVC).
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Reducen la necesidad de código repetitivo.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Integran componentes reutilizables.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Estandarizan el desarrollo.
              li
              i.fas.fa-computer(style="color: #FFB758;")
              |  Facilitan la escalabilidad.
    p La siguiente es su estructura:
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figure 2.
          span Estructura funcional de un framework
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='Figura 2 muestra un esquema simplificado de la estructura funcional de un framework, donde se representan sus componentes principales de manera jerárquica: la arquitectura base, las librerías integradas, la configuración y el código del desarrollador, organizados de manera jerárquica.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema2/img19_1.svg', alt='Figura 2 muestra un esquema simplificado de la estructura funcional de un framework, donde se representan sus componentes principales de manera jerárquica: la arquitectura base, las librerías integradas, la configuración y el código del desarrollador, organizados de manera jerárquica.')
    p Los #[i frameworks] se especializan según el tipo de aplicación que se desea desarrollar, lo que permite optimizar soluciones específicas.
    p.mb-4 La clasificación de #[i frameworks] por contexto incluye estos tipos:

    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bgf5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img20.svg', alt='Texto que describa la imagen')
          
        h5.text-center #[i Frontend]
        p Desarrollo de interfaces de usuario centradas en la experiencia y la interacción, responsables de la presentación visual de la información, la accesibilidad y la comunicación eficiente con los servicios del #[i backend].
      .col-md.tarjeta.bgf6.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img21.svg', alt='Texto que describa la imagen')
          
        h5.text-center #[i Backend]
        p Construcción de la lógica del servidor que gestiona procesos internos, reglas de negocio, almacenamiento y acceso a datos, así como la seguridad y la escalabilidad del sistema.
      .col-md.tarjeta.bgf9.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img22.svg', alt='Texto que describa la imagen')
          
        h5.text-center #[i Full stack]
        p Desarrollo de aplicaciones completas que integran #[i frontend] y #[i backend], permitiendo una visión integral de la arquitectura, el flujo de datos y la coherencia funcional del #[i software].
      .col-md.tarjeta.bgf3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img22.svg', alt='Texto que describa la imagen')
          
        h5.text-center Móviles
        p Desarrollo de aplicaciones para dispositivos móviles que consideran las limitaciones y características del entorno, como la movilidad, el consumo de recursos, la adaptación a distintas plataformas y la experiencia del usuario.
    p.mb-4 Algunos ejemplos representativos:

    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b #[i Frontend] 
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | React
            li.mb-0
              i.lista-ul__vineta
              | Angular
            li.mb-0
              i.lista-ul__vineta
              | Vue
              
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b #[i Frontend] 
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Spring Boot
            li.mb-0
              i.lista-ul__vineta
              | Django
            li.mb-0
              i.lista-ul__vineta
              | Express
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b #[i Full stack] 
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Laravel
            li.mb-0
              i.lista-ul__vineta
              | Next.js
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-adicional-1.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Móvil 
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              | Flutter
            li.mb-0
              i.lista-ul__vineta
              | React Native

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Estas herramientas complementan el uso de #[i frameworks], facilitando tareas adicionales que no forman parte directa del código, pero son esenciales para el proceso.


</template>

<script>
export default {
  name: 'Tema2',
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
