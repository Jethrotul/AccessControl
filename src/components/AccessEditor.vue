<template>
  <div>
    <h1>Editor Acceso Restringido</h1>
    <div class="containerEditor">
      <div class="profilePicEditor">
        <img class="picSizedEditor" src="@/assets/img/perfil_default.jpg" alt />
      </div>
      <div class="dataEditor">
        <input type="text" v-model="workerName" placeholder="Nombre" />
        <input type="text" v-model="workerSurname" placeholder="Apellidos" />
        <select v-model="workerAccess">
          <option disabled value selected>¿Acceso?</option>
          <option v-bind:value="true">Permitido</option>
          <option v-bind:value="false">Denegado</option>
        </select>
        <button v-on:click="addWorker">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { db } from "../firebase";
import { IWorker } from "@/IWorker";

@Component
export default class AccessEditor extends Vue {
  workerName = "";
  workerSurname = "";
  workerAccess = false;

  addWorker() {
    const worker: IWorker = {
      name: this.workerName,
      surname: this.workerSurname,
      hasAccess: this.workerAccess,
    };

    db.collection("workers")
      .add(worker)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        // añadir emit para hacer un getworkers desde workerlist
        // añadir mensaje de añadido debajo de botón
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        // añadir mensaje de error debajo de botón
      });
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
