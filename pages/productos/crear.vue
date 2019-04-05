<template>
  <div class="container">
    <h1>NUEVO PRODUCTO</h1>
    <b-from id="producto">
      <b-form-group>
        <label for="imagen">inserte imagen</label>
        <b-form-file  accept=".jpg, .png"
          placeholder="inserte imagen"
          name="imagen"
          id="imagen"
        ></b-form-file>

        <label for="nombre">nombre</label>
        <b-form-input id="nombre" required placeholder="ingresae nombre"></b-form-input>

        <label for="precio">precio</label>
        <b-form-input id="precio" required placeholder="pesos colombia"></b-form-input>

        <label for="precio">cantidad</label>
        <b-form-input id="cantidad" required placeholder="cuantos quiere"></b-form-input>
      </b-form-group>

      <b-button type="botton" variant="primary" @click="guardar">guardar</b-button>
      <b-button type="botton" variant="dark">limpiar venta</b-button>
    </b-from>
  </div>
</template>
<script>
export default {
  methods: {
    guardar() {
      datos.push({
        imagen: imagen.value,
        nombre: nombre.value,
        precio: precio.value,
        cantidad: cantidad.vale
      });
    }
  }
};
</script>

