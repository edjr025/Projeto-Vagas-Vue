import { createApp } from 'vue'
import App from './App.vue'

//importanto o mitt
import mitt from "mitt";

//criar a instância do pacote mitt
const emitter = mitt()

//iniciar a instância do vue com base no componente app
//createApp(App).mount('#app')
const app = createApp(App)

//configurar a instância do pacote mitt com sendo uma propriedade global
//essa propriedade estará disponivel para todas as intâncias de componentes do app
app.config.globalProperties.emitter = emitter


//associar a instância do vue com o elemento html de id app
app.mount("#app")