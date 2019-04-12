<template>
  <div class="container">
    <h1>NUEVO PRODUCTO</h1>
    <b-form @submit.prevent="guardarProducto" >
      <b-form-group>
        <label for="imagen">inserte imagen</label>
        <b-form-file  accept=".jpg, .png"
          placeholder="inserte imagen"
          name="imagen"
          id="imagen"
    
        ></b-form-file>

        <label for="nombre">nombre</label>
        <b-form-input id="nombre" v-model="form.nombre" required placeholder="ingresae nombre"></b-form-input>

        <label for="precio">precio</label>
        <b-form-input  v-model="form.precio" id="precio" type="number" required placeholder="pesos colombia"></b-form-input>

        <label for="precio">cantidad</label>
        <b-form-input v-model="form.cantidad" id="cantidad" type="number" required placeholder="cuantos quiere"></b-form-input>
      </b-form-group>

      <b-button  variant="primary"  type="submit" :disabled="guardando">guardar</b-button>
      <b-button type="botton" variant="dark">limpiar venta</b-button>

      <div id="guardando" v-if="guardando" class="spinner-border text-info"></div>
    </b-form>


  </div>
</template>
<script>
import{ db } from '../../services/firebase'

export default {
  data(){
    return{
      form:{
      nombre:'',
      precio:'',
      cantidad:''
      },
      guardando: false,
    }

  },
  methods: {
    guardarProducto(){
      this.guardando= true
db.collection("productos").add(this.form).then(res =>{
this.$router.push({
  path: "/productos"
})

})

    }
  }
};
</script>

