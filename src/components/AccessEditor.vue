<template>
  <div>
    <h1>Editor Acceso Restringido</h1>
    <div class="containerEditor">
      <div class="profilePicEditor">
        <Upload> </Upload>
        <!-- <img class="picSizedEditor" src="@/assets/img/perfil_default.jpg" alt /> -->
      </div>
      <div class="dataEditor">
        <input type="text" v-model="worker.name" placeholder="Nombre" />
        <input type="text" v-model="worker.surname" placeholder="Apellidos" />
        <select v-model="worker.hasAccess">
          <option disabled value selected>¿Acceso?</option>
          <option v-bind:value="true">Permitido</option>
          <option v-bind:value="false">Denegado</option>
        </select>
        <button @click="accept">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { db } from "../firebase";
import { IWorker } from "@/IWorker";
import { EventBus } from "@/bus";
import Upload from "./Upload.vue";

@Component({
  components: {
    Upload,
  },
})
export default class AccessEditor extends Vue {
  worker: IWorker = {
    id: null,
    name: "",
    surname: "",
    hasAccess: false,
  };

  created() {
    EventBus.$on("editWorker", (worker: IWorker) => {
      this.worker = worker;
    });
  }

  accept() {
    if (this.worker.id == null) {
      this.addWorker();
    } else {
      this.updateWorker();
    }
  }

  addWorker() {
    db.collection("workers")
      .add(this.worker)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.worker.id = docRef.id;
        EventBus.$emit("workerAdded", this.worker);
        // añadir mensaje de añadido debajo de botón
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        // añadir mensaje de error debajo de botón
      });
  }

  updateWorker() {
    if (this.worker.id != null) {
      db.collection("workers")
        .doc(this.worker.id)
        .update({
          name: this.worker.name,
          surname: this.worker.surname,
          hasAccess: this.worker.hasAccess,
        })
        .then(() => {
          //console.log("worker updated");
          EventBus.$emit("workerChanged", this.worker);
        })
        .catch((error) => {
          console.error("Error updating worker: ", error);
          // añadir mensaje de error debajo de botón
        });
    }
  }
}
</script>


<style scoped>
.containerEditor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #f1f1f1;
  width: 600px;
  margin: auto;
}

.picSizedEditor {
  width: 250px;
  height: 250px;
}

.dataEditor {
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
