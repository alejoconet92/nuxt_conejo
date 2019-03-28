<template>
  <div>



    <h1>hola {{msg}}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar"
     class=" btn btn-primary">guardar</button>

     <b-button variant="info">guardar</b-button>
    <table>
      <tr>
        <th>nombre</th>
      </tr>
      <tr v-for="(item,index) in municipio" :key="index">
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import navbar from '../components/navbar'
//import contacto from './contactos' es un ejemplo



export default {
  components: { navbar },
  data() {
    return {
      msg: "alejandro delgado",
      municipio: ["mocoa", "villagarzon", "puerto asis"]
    };
  },

  methods:{
    guardar() {
     this.municipio.push(this.msg)
     this.msg=''
    }
  }
};
</script>
