<template>
  <div class="container mt-4">
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>listado de productos aja</h2>
    </div>
    <div class="col-sm-6 text-right">
      <b-button variant="primary" href="/productos/crear">nuevo</b-button>
    </div>
   <p class="mt-3">Página número: {{ currentPage }}</p>

      <b-table responsive striped hover :fields="fields" :items="producto" id="list_producto" :per-page="perPage" :current-page="currentPage" small>
        <template slot="acciones" slot-scope="row"> 
          <b-button b-col lg="4" class="pb-2" size="sm" variant="outline-success">Editar</b-button>
          <b-button b-col lg="4" class="pb-2" size="sm" variant="outline-danger" @click="eliminarProducto(row.item.id)">Eliminar</b-button>
        </template><!--la variable debe llamarse a la variable del fields en script-->
      </b-table>
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="list_producto"></b-pagination>
    </div>
  </div>
</template>

<script>
import { db } from '../../services/firebase'
export default{
    asyncData(){
        return db.collection("productos").get().then((productoSnap)=>{//Llamar a una coleccion que recibe una cadena de texto
            let producto =[]
            productoSnap.forEach((value)=>{//productosSnap es un arreglo
                producto.push({id:value.id,...value.data()})//con data lo recuperamos y asignamos a producto
            })
            return{
                perPage: 10, //Número de páginas a mostrar
                currentPage: 1, //Desde de donde inicia la página
                producto
            }
        })
    },
    computed: {
      rows(){
        return this.producto.length;//VARIABLE COMPUTADA --- CÓMPUTO DE FILAS 
      }
    }, data(){
        return{
        fields: ['cantidad', 'nombre', 'precio', 'acciones']
    };
    },
    methods:{
      eliminarProducto(id){
        let index;
        this.producto.map((value,key)=>{
          if(value.id==id){
            index=key;
          }
        });
        db.collection('productos').doc(id).delete().then(()=>{
          this.producto.splice(index,1);        
      });
    },
     
}    
};
</script>