<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <AccessEditor></AccessEditor>
    <WorkersList></WorkersList>
    <WorkersList></WorkersList>
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
</style>
