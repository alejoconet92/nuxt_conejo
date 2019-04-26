<template>
  <!--<div>
<a href="/">inicio</a>
<a href="/contactos">contact</a>


  </div-->
  <b-navbar variant="danger" type="dark" toggleable="lg">
    <b-navbar-brand href="/">Soluciones Wi-Fi</b-navbar-brand>
    <b-collapse>
      <!-- para que la barra se agrande -->
    </b-collapse>
    <b-nav-toggle target="menu"></b-nav-toggle>

    <b-collapse is-nav id="menu">
      <!-- crea la barra del menu -->
      <b-navbar-nav>
        <b-nav-item href="/contactos">contacto</b-nav-item>
        <b-nav-item href="/productos">productos</b-nav-item>
           </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


 <script>
export default {};
</script>
 