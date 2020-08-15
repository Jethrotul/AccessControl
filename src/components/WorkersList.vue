<template>
  <div class="containerListWorkers">
    <h1 class="titleAccessName">Permitido</h1>
    <ul>
      <li v-for="(worker, index) in workers" :key="index">
        <p>{{worker.name}} {{worker.surname}} {{worker.access}}</p>
        <Worker v-bind:workers="workers"></Worker>
      </li>
      
    </ul>
    
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Worker from "@/components/Worker.vue";
import AccessEditor from "@/components/AccessEditor.vue";
import { db } from "../firebase";
import { IWorker } from '../IWorker'

@Component({
  components: {
    Worker,
    AccessEditor,
  },
})
export default class WorkersList extends Vue {
  hasAccess = true;
  workers: IWorker[] = [];

  mounted() {
    this.getWorkers();
    console.log("montado");
  }

  getWorkers() {
    db.collection("workers")
      .where("hasAccess", "==", this.hasAccess)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = doc.data();
          console.log(doc.id, " => ", data);
          this.workers.push({name: data.name, surname: data.surname, hasAccess: data.hasAccess});
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
}
</script>

<style scoped>
.titleAccessName {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>