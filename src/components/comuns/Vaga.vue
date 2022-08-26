<template>
     <div class="card">
              <div class="card-header bg-dark text-white">
                <div class="row">
                  <div class="col d-flex justify-content-between">
                      <div> {{titulo}}</div>
                      <div>
                        <div class="form-check form-switch">
                          <input type="checkbox" class="form-check-input" v-model="favoritada">
                          <label class="form-check-label">Favoritar</label>
                        </div>
                      </div>
                  </div>
                </div>
               
              </div>
              <div class="card-body">
                <p>{{descricao}}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Salário: {{salario}} | Modalidade: {{modalidade}} | Tipo: {{tipo}} | publicação: {{publicacao}}</small>
              </div>
    </div>
</template>

<script>


    export default{
        name: 'Vaga',
        data: () => ({
          favoritada: false
        }),
        watch: {
          favoritada(valorNovo){
            if(valorNovo){
              this.emitter.emit('favoritarVaga', this.titulo)
            }else{
              this.emitter.emit('desfavoritarVaga', this.titulo)
            }
          }
        },  
        props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao'],
       
    }

</script>