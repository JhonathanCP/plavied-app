<template>
  <div>    
        <Navbar/>
        <!-- <b-container>
            <b-jumbotron bg-variant="white" fluid header-level="4">
                <template v-slot:header>Aprende de una manera más fácil 
                y divertiva con PLAVIED</template>
                <template v-slot:lead>
                    <b-row>
                        <b-col lg="8" md="8" sm="12"><p>Plataforma virtual de educación para estudiantes del nivel primaria 
                        en donde podrán aprender de una forma más dinámica, divertida e interactiva con el entorno real.</p></b-col>
                        <b-col lg="4" md="4" sm="6"><b-img fluid center b></b-img></b-col>                                      
                    </b-row>
                </template>                
                <hr class="my-4">
                <b-button variant="success" href="#">Ver más</b-button>
            </b-jumbotron>            
        </b-container> -->
        <b-container>
      <div style="width: 95%;margin: auto; margin-top:40px;background-color: white;" class="rounded">
        <div class="row">
          <br>
        </div>
        <div class="row">
          <div class="col-lg-12" style="text-align: center">
            <h1>Aprende de una manera más fácil y divertiva con PLAVIED</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7">
            <div class="rounded" style="margin: 5px;padding:10px;height: 95%;">
              <p>Plataforma virtual de educación para estudiantes del nivel primaria
                en donde podrán aprender de una forma más dinámica, divertida e interactiva con el entorno real
                proporcionada por la plataforma de PLAVIED</p>
              <button type="button" class="btn btn-success">Ver más</button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="rounded border-secondary">
              <img src="../assets/ninoBanner.jpg" alt="niño" style="padding:5px;width:100%;height:100%;">
            </div>
          </div>
        </div>
      </div>
    </b-container>
    <b-container>
        <div class="w-100" style="background-color: white; margin-top: 40px;margin-bottom: 20px;">
        <div class="row" style="text-align: center;">
            <div class="col-lg-12" style="text-align: center; padding-top:20px;">
            <h1>¿Por qué elegir PLAVIED?</h1>
            <p>Te ayudamos a que el proceso de enseñanza-aprendizaje sea:</p>
            </div>
        </div>
        <div style="width: 85%; margin: 0 auto;">
            <div class="row" >
            <div class="col-lg-4 col-md-6 col-sm-12 rounded" style="text-align: center; background-color: rgb(255, 255, 255);" v-for="(item,index) in cards" v-bind:key="index">
                <div style="width: 10rem; height: 150px; margin: auto; padding:10px;">
                    <img :src= item.img alt="" style="width:100%; height: 100%; border-radius: 20%;">
                </div>
                <div class="w-100">
                <p>{{item.descripcion}}</p>
                </div>
            </div>          
            </div>
        </div>          
        </div>
    </b-container>
    <!-- Contactanos -->
    <div class="w-100" style="position:relative;">
      <div class="w-100">
        <img class="foto w-100"
          src="https://www.notiactual.com/wp-content/uploads/2016/11/ni%C3%B1os-crianza-750x400.jpg" alt="niños"
          style="height:400px; filter: brightness(30%);">
      </div>
      <div style="width:100%;position:absolute; top:0;left:0">
        <div style="text-align: center; width:100%; padding-top:40px;">
          <p style="font-size: 4rem; color: #FFFFFF;" >Contáctanos</p>
          <div style="margin: 0 auto;">
            <div>
              <div class="d-flex justify-content-center">
                <div>
                  <b-icon icon="phone" font-scale="4" variant="light"></b-icon>;
                </div>
                <div style="padding-top:20px;">
                  <p style="font-size: 30px; color: #FFFFFF;">934465838</p>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div>
                  <b-icon icon="envelope" font-scale="4" variant="light"></b-icon>;
                </div>
                <div style="padding-top:20px;">
                  <p style="font-size: 30px; color: #FFFFFF;">plaviedsoporte@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

    <!-- redes sociales-->

    <section  style="background: #FCE3AF;">
      <div>
          <div style="text-align: center; width:100%; padding-top:40px;">
            <h1>Redes Sociales</h1>
          </div>
          <div>
            <ul style="list-style: none;" class="d-flex justify-content-between">
              <li class="col-lg-1 col-md-4 col-sm-6">
                <img src="../assets/facebook.svg" class="img-fluid" >
              </li>
              <li class="col-lg-1 col-md-4 col-sm-6">
                <img src="../assets/whatsapp.svg" class="img-fluid"> 
              </li>
              <li class="col-lg-1 col-md-4 col-sm-6">
                <img src="../assets/youtube.svg" class="img-fluid">
              </li>
              <li class="col-lg-1 col-md-4 col-sm-6">
                <img src="../assets/instagram.svg" class="img-fluid">
              </li>
              <li class="col-lg-1 col-md-4 col-sm-6">
                <img src="../assets/gorjeo.svg" class="img-fluid">
              </li>
            </ul>
          </div>
      </div>
    </section>

    <!-- FOOTER-->
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
                <router-link to="/loginalumno"><b-dropdown-item>alim</b-dropdown-item></router-link>

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
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data: () =>{
      return {
          cards: [
              {
                  img: require('../assets/cards/niñoExpli.png'),
                  descripcion: "Fácil de usar como tu ambiente virtual favorito"
              },
              {
                  img: require('../assets/cards/niñosIntegra.png'),
                  descripcion: "Integrar al apoderado, alumno y profesor"
              },
              {
                  img: require('../assets/cards/NiñoCompu.png'),
                  descripcion: "Simular objetos virtuales en el entorno real"
              },
              {
                  img: require('../assets/cards/pngegg.png'),
                  descripcion: "Tener apoyo  online de tutores voluntarios"
              },
              {
                  img: require('../assets/cards/Soporte.png'),
                  descripcion: "Equipo que orienta el uso de la plataforma"
              },
              {
                  img: require('../assets/cards/dinero.png'),
                  descripcion: "Plataforma totalmente gratis, sin costo alguno"
              },             
          ]
      }
  }
}
</script>