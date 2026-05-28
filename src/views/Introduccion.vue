<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo presenta una visión integral del desarrollo de #[i software], abordando desde los fundamentos de los lenguajes y paradigmas de programación, que permiten comprender cómo se construyen las soluciones tecnológicas, hasta el uso de herramientas de desarrollo como editores, entornos y #[i frameworks] que facilitan la implementación de aplicaciones.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/intro/img2.svg", style="width: 120px", alt="alt")
      .col-lg-11
        .cajon.color-secundario.p-3
          p.mb-0 Asimismo, se profundiza en el funcionamiento de servidores, servicios #[i web] y APIs, elementos clave en la construcción de sistemas modernos. También incorpora procesos de pruebas de #[i software], incluyendo la creación de casos de prueba y pruebas unitarias, que garantizan la calidad del producto.
    p Igualmente, se resalta la importancia de la documentación y las buenas prácticas de programación, promoviendo el desarrollo de código claro, mantenible y alineado con estándares. Finalmente, se integran aspectos de gestión del desarrollo de #[i software], como la identificación y estimación de costos, permitiendo tomar decisiones informadas y asegurar la viabilidad de los proyectos. De esta manera, se busca formar una visión completa que articule lo técnico con lo estratégico en el proceso de desarrollo de #[i software].  
</template>

<script>
export default {
  name: 'Introduccion',
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
