<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El recorrido formativo ha abordado de manera integrada los fundamentos técnicos y de gestión del desarrollo de #[i software], articulando la calidad del código, las pruebas y la prevención de errores con la estructuración, mantenibilidad y aplicación de principios de diseño orientados a la evolución del sistema. De forma complementaria, se analizó el papel de los manuales de usuario y la redacción técnica como elementos clave para la adopción y su uso efectivo, enfatizando la claridad, la secuencialidad y la adecuación al perfil del usuario. Asimismo, se estudió la gestión del proyecto como un ciclo continuo de planificación, ejecución, medición y corrección, incorporando control, seguimiento, gestión de riesgos, comunicación y enfoques metodológicos. Finalmente, se profundizó en la naturaleza de los costos del #[i software], su comportamiento no lineal, los distintos tipos de costos, la estimación y los mecanismos de ajuste ante desviaciones, proporcionando una visión integral que permite comprender el desarrollo de #[i software] como un proceso técnico, organizacional y económico orientado a la calidad y la viabilidad de proyectos reales.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza los elementos clave del desarrollo de software, comenzando por los lenguajes y paradigmas de programación como base del diseño de soluciones. A continuación, integra las herramientas de desarrollo y los servidores y servicios que soportan la construcción y ejecución de aplicaciones. El mapa incorpora luego las pruebas de software y la documentación como mecanismos de calidad y mantenibilidad, y finaliza con los aspectos de gestión, resaltando los costos y la estimación como factores determinantes para la viabilidad de los proyectos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({}),
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
