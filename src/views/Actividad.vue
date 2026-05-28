<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      Actividad(:cuestionario="cuestionario")
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Herramientas y prácticas en el desarrollo de software',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar de manera integral los conocimientos sobre fundamentos de programación, herramientas de desarrollo, arquitecturas de software, pruebas, documentación y gestión del desarrollo, con el fin de fortalecer la comprensión técnica y la toma de decisiones en contextos reales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de un lenguaje de programación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar hardware directamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir interfaces gráficas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir la comunicación entre humanos y máquinas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar sistemas operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los lenguajes permiten traducir instrucciones humanas a código ejecutable por la máquina.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a un paradigma de programación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El hardware utilizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La forma en que se estructura y organiza el código.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tipo de servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los paradigmas definen cómo se piensa y se construye el software.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es un ejemplo de paradigma de programación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compilador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'API.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programación orientada a objetos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Framework.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La programación orientada a objetos es uno de los paradigmas más utilizados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es la función principal de un IDE?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar servidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar el desarrollo de software.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Un IDE integra herramientas para escribir, ejecutar y depurar código.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué diferencia a un framework de una librería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El framework define la estructura del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La librería controla el sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El framework es más pequeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No hay diferencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El framework impone una arquitectura, mientras la librería es usada bajo demanda.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función principal de un servidor web?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar lógica de negocio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Gestionar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entregar contenido al cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Crear APIs.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El servidor web responde solicitudes HTTP con contenido.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué hace un servidor de aplicaciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestiona archivos estáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ejecuta lógica del negocio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Renderiza HTML únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacena datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se encarga del procesamiento interno del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es un paradigma común en APIs modernas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'REST.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'SQL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'HTML.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'CSS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! REST es ampliamente usado por su simplicidad y escalabilidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es el objetivo de las pruebas de software?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Verificar que el sistema funcione correctamente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las pruebas validan el comportamiento del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué evalúan las pruebas unitarias?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El sistema completo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Componentes individuales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usuarios finales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se enfocan en funciones o métodos específicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué es un caso de prueba?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un error del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una prueba automática.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un escenario definido para valida.r funcionalidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un lenguaje de programación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite evaluar condiciones específicas del sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es el propósito de la documentación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar el código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el tamaño del sistema.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilitar la comprensión del software.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite que otros entiendan y usen el sistema.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué caracteriza un buen manual de usuario?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lenguaje técnico complejo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Información desordenada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enfoque en tareas del usuario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo para desarrolladores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Debe ser claro y orientado a la acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué significa el principio DRY?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar rápido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No repetir código.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar rápido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir errores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Evita duplicidad y mejora mantenimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué busca el principio KISS?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistemas complejos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Código largo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Simplicidad en soluciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso de múltiples tecnologías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La simplicidad mejora comprensión y mantenimiento.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es el objetivo de la gestión en software?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear código.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar interfaces.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar hardware.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificar y controlar el desarrollo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La gestión organiza y supervisa el proyecto.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué representa un costo directo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Salarios del equipo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Internet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Está directamente relacionado con el desarrollo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué factor influye más en el costo del software?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Complejidad del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tipo de teclado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamaño de pantalla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La complejidad aumenta esfuerzo y costo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué caracteriza una estimación inicial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta precisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bajo riesgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Detalle completo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta incertidumbre.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se realiza con poca información disponible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué permite la validación de la estimación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar errores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ajustar el proyecto según resultados reales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar pruebas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Permite corregir desviaciones y mejorar la planificación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
