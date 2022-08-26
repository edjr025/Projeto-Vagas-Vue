<template>
    <div>
     
       <VagasFavoritas/>
       <Topo @navegar="componente = $event"/>
        <Alerta v-if="exibirAlerta" :tipo="alerta.tipo">
          <template v-slot:titulo>
            <h5>{{alerta.titulo}}</h5>
          </template>
          <template v-slot:descricao>
            <p>{{alerta.descricao}}</p>
          </template>
        </Alerta>
       <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
        
    </div>
   
</template>

<script>
  import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue";
  import Topo from "./components/layouts/Topo.vue"; //podemos mudar isso para @/components/layouts/Topo.vue   .... importando componentes com alias @
  import Conteudo from "./components/layouts/Conteudo.vue";
  import Alerta from "@/components/comuns/Alerta.vue";

  export default {
    name: 'App',
    components: {
      Topo,
      Conteudo,
      VagasFavoritas,
      Alerta
    },
    data:() => ({
      visibilidade: true,
      componente: 'Home',
      exibirAlerta: false,
      alerta: {titulo: '', descricao: '', tipo: ''}
    }),

    mounted(){
      this.emitter.on('alerta', (a) => {
        this.alerta = a
        console.log(this.alerta);
        this.exibirAlerta = true
        setTimeout(() => this.exibirAlerta = false, 3000)
      })
    }
  }
</script>

<style scoped>
  
</style>
