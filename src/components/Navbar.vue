<template>
    <b-navbar toggleable="lg" type="dark" style="background-color: #061B3A">
        <b-navbar-brand href="#" class="col-4"><img class="img-fluid" src="../assets/logoInicio.svg" alt="Logo Plavied"><!-- P L A V I E D --></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <!-- <b-nav-item href="#">Link</b-nav-item> -->

                <b-nav-item-dropdown split split-href="#/loginapoderado" text="Iniciar sesión" right>
                <b-dropdown-item to="/loginapoderado">Apoderado</b-dropdown-item>
                <b-dropdown-item to="/loginalumno">Alumno</b-dropdown-item>
                <b-dropdown-item to="/loginprofesor">Profesor</b-dropdown-item>
                <b-dropdown-item to="/logintutor">Tutor</b-dropdown-item>
                <b-dropdown-item to="/loginadministrador">Administrador</b-dropdown-item>
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
        </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>