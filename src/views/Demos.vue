<template>
    <div>
        <Navbar/>       
        <div class="container d-flex absolute-center">
            <video src="../demos/demo1.mp4"  controls width="340" height="600">                            
            </video>
            <video src="../demos/demo2.mp4"  controls width="340" height="600">                            
            </video>
            <video src="../demos/demo3.mp4"  controls width="340" height="600">                            
            </video>
            <video src="../demos/demo4.mp4"  controls width="340" height="600">                            
            </video>
        </div>
        <footer class="row" style="padding: 60px; background-color: #061B3A">
      <div class="col-lg-4 col-md-4 col-sm-12">
          <img class="img-fluid" src="../assets/logoInicio.svg" alt="Logo Plavied">
          <p class="text-info">P L A V I E D Web © 2020</p>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
          <h2 class="text-info">Menú</h2>
                <b-navbar-nav class="ml-auto">
                <!-- <b-nav-item href="#">Link</b-nav-item> -->

                <b-nav-item-dropdown text="Iniciar sesión" right>
                <router-link to="/loginapoderado"><b-dropdown-item>Apoderado</b-dropdown-item></router-link>
                <router-link to="/loginalumno"><b-dropdown-item>Alumno</b-dropdown-item></router-link>

                <b-dropdown-item >Profesor</b-dropdown-item>
                <b-dropdown-item href="/logintutor">Tutor</b-dropdown-item>
                <b-dropdown-item href="/loginadministrador">Administrador</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Registrarse" right>
                <b-dropdown-item href="#">Apoderado</b-dropdown-item>
                <b-dropdown-item href="#">Alumno</b-dropdown-item>
                <b-dropdown-item href="#">Profesor</b-dropdown-item>
                <b-dropdown-item href="#">Tutor</b-dropdown-item>
                <b-dropdown-item href="#">Administrador</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item href="#">Nosotros</b-nav-item>
                <b-nav-item href="#">Contáctanos</b-nav-item>
                <b-nav-item href="#">Preguntas</b-nav-item>
            </b-navbar-nav>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
          <h2 class="text-info">Soporte</h2>
          <b-navbar-nav class="ml-auto">
                <!-- <b-nav-item href="#">Link</b-nav-item> -->
                <b-nav-item href="#">plaviedsoporte@gmail.com</b-nav-item>
                <b-nav-item href="#">WhatsApp</b-nav-item>
                <b-nav-item href="#">934465838</b-nav-item>
            </b-navbar-nav>
          <!-- <ul style="list-style: none; ">
              <li>
                  <p>plaviedsoporte@gmail.com</p>
              </li>
              <li>
                  <p>WhatsApp</p>
              </li>
              <li>
                  <p>934465838</p>
              </li>
          </ul> -->
      </div>
      <div>

      </div>
    </footer>
    </div>

</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Demos',
    components: {
        Navbar
    },
}
</script>

<style>

</style>