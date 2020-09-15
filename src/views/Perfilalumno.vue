<template>
    <b-row align-v="start">
        <b-col lg="2" md="4" sm="2" style="background-color: #B7D124; height: 70rem;">
            <b-container class="d-flex justify-content-center" style="max-height: 16rem;">
                <b-img fluid :src="require('@/assets/profile/kid.svg')"></b-img>
            </b-container>            
            <b-container>
                <button @click= "botonCurso()"><b-img fluid :src = "require('@/assets/profile/cursos.svg')"></b-img></button>
            </b-container>
            <b-container>
                <button @click= "botonProfesores()"><b-img fluid :src = "require('@/assets/profile/profesores.svg')"></b-img></button>
            </b-container> 
            <b-container>
                <button @click= "botonTutores()"><b-img fluid :src = "require('@/assets/profile/tutores.svg')"></b-img></button>
            </b-container> 
            <b-container>
                <button @click= "botonProgreso()"><b-img fluid :src = "require('@/assets/profile/progreso.svg')"></b-img></button>
            </b-container> 
            <b-container>
                <button @click= "botonAsistencia()"><b-img fluid :src = "require('@/assets/profile/asistencia.svg')"></b-img></button>
            </b-container> 
            <b-container>
                <button @click= "botonReforzamiento()"><b-img fluid :src = "require('@/assets/profile/reforzamiento.svg')"></b-img></button>
            </b-container> 
        </b-col>
        <b-col lg="10" md="8" sm="10" style="background-color: #B7D124; height: 10rem;">
            <b-col cols="12">
                <b-container style=" position: absolute;">
                <router-link to="/"><b-img fluid-grow :src="require('@/assets/profile/header.svg')"></b-img></router-link>
            </b-container>
            </b-col>
            <b-col cols="12" id="contenido-inicial">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/contenido.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-col cols="12" id="contenido-cursos" class="disabled">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/cursoslista.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-col cols="12" id="contenido-profesores" class="disabled">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/contenido.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-col cols="12" id="contenido-tutores" class="disabled">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/contenido.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-col cols="12" id="contenido-progreso" class="disabled">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/progresolista.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-col cols="12" id="contenido-asistencia" class="disabled">
                <b-container style="margin-top: 120px;">
                <b-img fluid :src="require('@/assets/profile/contenido.svg')" style="width: 1000px; height: 450px"></b-img>
                </b-container>
            </b-col>
            <b-row cols="12" id="contenido-reforzamiento" class="disabled" align-h="center">
                <b-container style="margin-top: 120px;" class="center" align-h="center">
                    <b-list-group>
                        <b-list-group-item class="d-flex justify-content-center"><b-button variant="success"><a target="_blank" href="http://127.0.0.1:5500/animacion/index.html" style="decoration: none; color: white;">Figuras 3D</a></b-button></b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-center"><b-button variant="success"><a target="_blank" href="http://127.0.0.1:5500/index.html" style="decoration: none; color: white;">Colisión de figuras 3D</a></b-button> </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-center"><b-button variant="success"><a target="_blank" href="http://127.0.0.1:5500/geografia/index.html" style="decoration: none; color: white;">Planetas</a></b-button> </b-list-group-item>               
                        <b-list-group-item class="d-flex justify-content-center"><b-button variant="success"><a target="_blank" href="http://127.0.0.1:5500/casa.html" style="decoration: none; color: white;">Simulación de una casa</a></b-button> </b-list-group-item>
                        <b-list-group-item class="d-flex justify-content-center"><b-button variant="success"><a target="_blank" href="http://127.0.0.1:5500/rayos/index.html" style="decoration: none; color: white;">Figuras 3D básicas</a></b-button> </b-list-group-item>  
                        <b-list-group-item class="d-flex justify-content-center">Proximamente más...</b-list-group-item>
                        <router-link to="/demos"><b-list-group-item class="d-flex justify-content-center">Demos en celular</b-list-group-item>  </router-link>                      
                    </b-list-group>
                </b-container>
            </b-row>
        </b-col>        
    </b-row>
</template>

<script>
export default {
    name: 'Perfilalumno',
    data: () => {
       return{
            secciones : [
            {
                img: require('@/assets/profile/cursos.svg'),
                boton: "botonCurso()"
            },
            {
                img: require('@/assets/profile/profesores.svg'),
                boton: "botonProfesores()"
            },
            {
                img: require('@/assets/profile/tutores.svg'),
                boton: "botonTutores()"
            },
            {
                img: require('@/assets/profile/progreso.svg'),
                boton: "botonProgreso()"
            },
            {
                img: require('@/assets/profile/asistencia.svg'),
                boton: "botonAsistencia()"
            },
            {
                img: require('@/assets/profile/reforzamiento.svg'),
                boton: "botonReforzamiento()"
            },
        ]
       }
    },
    methods: {
        botonCurso: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoProfesores.classList.add('disabled')
            contenidoTutores.classList.add('disabled')
            contenidoProgreso.classList.add('disabled')
            contenidoAsistencia.classList.add('disabled')
            contenidoReforzamiento.classList.add('disabled')
        },
        botonProfesores: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoCursos.classList.add('disabled')
            contenidoTutores.classList.add('disabled')
            contenidoProgreso.classList.add('disabled')
            contenidoAsistencia.classList.add('disabled')
            contenidoReforzamiento.classList.add('disabled')
        },
        botonTutores: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoProfesores.classList.add('disabled')
            contenidoCursos.classList.add('disabled')
            contenidoProgreso.classList.add('disabled')
            contenidoAsistencia.classList.add('disabled')
            contenidoReforzamiento.classList.add('disabled')
        },
        botonProgreso: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoProfesores.classList.add('disabled')
            contenidoTutores.classList.add('disabled')
            contenidoCursos.classList.add('disabled')
            contenidoAsistencia.classList.add('disabled')
            contenidoReforzamiento.classList.add('disabled')
        },
        botonAsistencia: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoProfesores.classList.add('disabled')
            contenidoTutores.classList.add('disabled')
            contenidoProgreso.classList.add('disabled')
            contenidoCursos.classList.add('disabled')
            contenidoReforzamiento.classList.add('disabled')
        },
        botonReforzamiento: function () {
            var contenidoInicial = document.getElementById("contenido-inicial");
            var contenidoCursos = document.getElementById("contenido-cursos");
            var contenidoProfesores = document.getElementById("contenido-profesores");
            var contenidoTutores = document.getElementById("contenido-tutores");
            var contenidoProgreso = document.getElementById("contenido-progreso");
            var contenidoAsistencia = document.getElementById("contenido-asistencia");
            var contenidoReforzamiento = document.getElementById("contenido-reforzamiento");
            contenidoInicial.removeAttribute('class')
            contenidoCursos.removeAttribute('class')
            contenidoProfesores.removeAttribute('class')
            contenidoTutores.removeAttribute('class')
            contenidoProgreso.removeAttribute('class')
            contenidoAsistencia.removeAttribute('class')
            contenidoReforzamiento.removeAttribute('class')
            contenidoInicial.classList.add('disabled')
            contenidoProfesores.classList.add('disabled')
            contenidoTutores.classList.add('disabled')
            contenidoProgreso.classList.add('disabled')
            contenidoAsistencia.classList.add('disabled')
            contenidoCursos.classList.add('disabled')
        },
  }
}
</script>

<style scoped>

.disabled {
    display: none;
}
</style>