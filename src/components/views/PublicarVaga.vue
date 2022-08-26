<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da Vaga</label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea type="text" class="form-control" v-model="descricao"></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario">
        <div class="form-text">Informe o salário.</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-control" v-model="modalidade">
          <option value="" disabled>Selecione</option>
          <option value="Home Office">Home Office</option>
           <option value="Hibrido">Hibrido</option>
          <option value="Presencial">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas.</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-control" v-model="tipo">
          <option value="" disabled>Selecione</option>
          <option value="CLT">CLT</option>
          <option value="PJ">PJ</option>
           <option value="Freelancer">Freelancer</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PublicarVaga',
  data: () => ({
      titulo: '',
      descricao: '',
      salario: '',
      modalidade: '',
      tipo: '',
    
     
  }),
  methods: {
    salvarVaga(){

      let tempoDecorrido = Date.now()
      let dataAtual = new Date(tempoDecorrido)
      dataAtual.toISOString()

      let vagas = JSON.parse(localStorage.getItem('vagas')) //recuperando os dados la do localStorage

      if(!vagas) vagas = []

      vagas.push(
         {
            titulo: this.titulo,
            descricao: this.descricao,
            salario: this.salario,
            modalidade: this.modalidade,
            tipo: this.tipo,
            publicacao: dataAtual.toISOString()
         }
      );
      if(this.validaFormulario()) { //se o valida formulario retorna true então envie a vaga para o localStorage
        localStorage.setItem('vagas', JSON.stringify(vagas)) //cadastrando os dados no localStorage
        this.emitter.emit('alerta', {
          tipo: 'sucesso',
          titulo: `A vaga ${this.titulo} foi cadastrada com sucesso`,
          descricao: 'Parabens, a vaga foi cadastradas para que todos os usuarios da plataforma possa visualiza-la'
        });

         this.resetaFormulario();
         
      }else{
         this.emitter.emit('alerta', {
          tipo: 'erro',
          titulo: 'Ops... Não foi possivel realizar o cadastro',
          descricao: 'todos os campos devem ser preenchidos'
          }
      )}

    
    },
     resetaFormulario(){
        this.titulo = '',
        this.descricao = '',
        this.salario = '',
        this.modalidade = '',
        this.tipo = ''
     },
     validaFormulario(){
      let valido = true
        if(this.titulo  === '' || this.descricao  === '' || this.salario  === '' || this.modalidade  === '' || this.tipo === ''){
          valido = false
        }
      return valido
     }
  }
}
</script>

<style></style>
