<template>
  <div class="container py-4">
      <div class="row">
        <div class="col">
          <PesquisarVaga/>
        </div>
      </div>

      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
           <Vaga :titulo="vaga.titulo" :descricao="vaga.descricao" :salario="vaga.salario" :modalidade="vaga.modalidade" :tipo="vaga.tipo" :publicacao="vaga.publicacao"/>
        </div>
      </div>

      <div class="row mt-5">
          <div class="col-4">
            <Indicador titulo="Vagas abertas" valor="100" bg="bg-dark" color="text-white"/>
          </div>
            <div class="col-4">
            <Indicador titulo="Profissionais cadastrados" valor="225"  bg="bg-dark" color="text-white"/>
          </div>
            <div class="col-4">
           <Indicador titulo="Visitantes online" :valor="usuariosOnline"  bg="bg-ligth" color="text-dark"/>
          
          </div>
      </div>
  </div>
</template>

<script>
  import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
  import Indicador from "@/components/comuns/Indicador.vue";
  import Vaga from "@/components/comuns/Vaga.vue";

  export default{
    name: 'Home',
    components: {
      PesquisarVaga,
      Indicador,
      Vaga
    },
    data: () => ({
        usuariosOnline: 0,
        vagas: []
    }),

    methods: {
      getUsuariosOnline(){
       this.usuariosOnline = Math.floor(Math.random() * 101) //entre 0 e 100
      }
    },

     created(){
      setInterval(this.getUsuariosOnline, 2000) //a cada 2 segundo a função getUsuariosOnline será executada

    },
    activated(){ 
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted(){
      this.emitter.on('filtrarVagas', vaga => {
        // console.log('estamos no componente Home', vaga);
        const vagas = JSON.parse(localStorage.getItem('vagas'))
        this.vagas  = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))

       

      })  
    }

  }
  
</script>

<style>
    
</style>
