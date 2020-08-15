<template>
  <div id="app">
    <AccessEditor></AccessEditor>
    <div class="workerList">
      <WorkersList hasAccess="true"></WorkersList>
      <WorkersList hasAccess="false"></WorkersList>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import AccessEditor from "./components/AccessEditor.vue";
import Worker from "./components/Worker.vue";
import WorkersList from "./components/WorkersList.vue";
import { db } from "./firebase";

@Component({
  components: {
    AccessEditor,
    Worker,
    WorkersList,
  },
})
export default class App extends Vue {}

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
