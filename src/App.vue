<template>
  <div id="app">

    <div>
<label>Name:</label>
<input type="text" v-model='name'>
<button>Add</button>
    </div>





    <AccessEditor></AccessEditor>
    <div class="workerList">
      <WorkersList></WorkersList>
      <WorkersList></WorkersList>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import AccessEditor from "./components/AccessEditor.vue";
import Worker from "./components/Worker.vue";
import WorkersList from "./components/WorkersList.vue";



@Component({
  components: {
    AccessEditor,
    Worker,
    WorkersList,
  },
})
export default class App extends Vue {
  data(){
    return {
      name:'John cena'
    }
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.workerList {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
