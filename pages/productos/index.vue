<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>listado de productos</h2>
    </div>
    <div class="col-sm-6">
      <b-button variant="primary" href="/productos/crear">nuevo</b-button>
          </div>
          <div>

  
    <b-table striped hover :items="data"></b-table>
  


          </div>
  </div>
</template>

<script>
export default {
  data(){
return{
  data:[
    {
'id':'1', 'nombre':'conejo', 'precio':'20.000', 'cantidad':'45',
    }
  ]
}

  }

}
</script>


