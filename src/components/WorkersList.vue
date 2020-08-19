<template>
  <div class="containerListWorkers">
    <h1 class="titleAccessName" v-if="hasAccess">Con Acceso</h1>
    <h1 class="titleAccessName" v-else>Sin Acceso</h1>
    <ul class="listOfWorkers">
      <li v-for="(worker, index) in workers" :key="index">
        <worker :worker="worker"></worker>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Worker from "@/components/Worker.vue";
import AccessEditor from "@/components/AccessEditor.vue";
import { db } from "../firebase";
import { IWorker } from "../IWorker";
import { EventBus } from "@/bus";

@Component({
  components: {
    Worker,
    AccessEditor,
  },
})
export default class WorkersList extends Vue {
  workers: IWorker[] = [];
  @Prop({ default: false }) readonly hasAccess!: boolean;

  mounted() {
    this.getWorkers();
  }

  created() {
    EventBus.$on("workerAdded", (worker: IWorker) => {
      if (worker.hasAccess == this.hasAccess) {
        this.workers.push(worker);
        this.sort();
      }
    });
    EventBus.$on("workerChanged", (worker: IWorker) => {
      const filteredWorkers = this.workers.filter(
        (search) => worker.id !== search.id
      );
      const addingWorker = () => {
        if (worker.hasAccess == this.hasAccess) {
          this.workers.push(worker);
          this.sort();
        }
      };
      return (this.workers = filteredWorkers), addingWorker();
    });
  }

  sort() {
    this.workers.sort((a, b) => {
      let sorted = a.surname.localeCompare(b.surname);
      if (sorted == 0) {
        sorted = a.name.localeCompare(b.name);
      }
      return sorted;
    });
  }

  getWorkers() {
    this.workers = [];
    db.collection("workers")
      .where("hasAccess", "==", this.hasAccess)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          this.workers.push({
            id: doc.id,
            name: data.name,
            surname: data.surname,
            hasAccess: data.hasAccess,
          });
        });
        this.sort();
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

.listOfWorkers {
  list-style:none
}
</style>