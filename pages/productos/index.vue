<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>listado de productos</h2>
    </div>
    <div class="col-sm-6">
      <b-button variant="primary" href="/productos/crear">nuevo</b-button>
    </div>
    <div>
      <b-table responsive striped hover :fields="fields" :items="productos"></b-table>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";

export default {

  asyncData() {
    return db.collection("productos").get().then((productosSnap) => {
        let productos = []
        productosSnap.forEach((value) => {
          
          productos.push(value.data())
        })
        
        return {
          productos
        }
      })
  },
  data() {
    return {
      fields: ["imagen", "nombre", "precio", "cantidad", "acciones"]
    }
  },
}

</script>