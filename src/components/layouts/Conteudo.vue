<template>
  <div>
      <keep-alive>
           <component :is="conteudo" />
      </keep-alive>
  </div>
</template>

<script>
  import Home from "../views/Home.vue";  //podemos mudar isso para @/components/views/Home.vue
  import PublicarVaga from "../views/PublicarVaga.vue"; // @/components/views/PublicarVaga.vue

  export default{
    name: 'Conteudo',
    props: {
      conteudo:{
          type: String,
          required: true
      }
    },
    components:{
      Home,
      PublicarVaga
    }
  }
</script>

<style>
  
</style>
