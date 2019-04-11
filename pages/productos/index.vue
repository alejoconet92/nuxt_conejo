<template>
  <div class="container mt-4">
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>listado de productos</h2>
    </div>
    <div class="col-sm-6 text-right">
      <b-button variant="primary" href="/productos/crear">nuevo</b-button>
    </div>
  </div>
    <div class="overflow-auto">
      <b-table responsive striped hover :fields="fields" :items="productos" id="lista_productos" :per-page="perPage" :current-page="currentPage">

 
      </b-table>
 <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
       aria-controls="lista_productos"
    ></b-pagination>

    
    
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
          productos,
          currentPage:1,
          perPage: 8
        }
      })
  },
  data() {
    return {
      fields: ["imagen", "nombre", "precio", "cantidad", "acciones"]
    }
  },
  computed:{
    rows(){
      return this.productos.length
    }
  }
}

</script>