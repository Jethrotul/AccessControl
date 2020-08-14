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
        <select v-model="workersAccess">
          <option disabled value>¿Acceso?</option>
          <option value="true">Permitido</option>
          <option value="false">Denegado</option>
        </select>
        <button v-on:click="addWorker">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from 'firebase';

@Component
export default class AccessEditor extends Vue {
  worker = "";
  workerName = "";
  workerSurname = "";
  workersAccess = true;

  // workers = [
  //   { name: "Diego", surname: "Haz", access: true },
  //   { name: "Juan", surname: "Leal", access: true },
  //   { name: "Lola", surname: "Flores", access: false },
  //   { name: "Perico", surname: "delgado", access: false },
  // ];
  workers = [];

  addWorker() {
    firebase.database().ref('workers').push({name: this.worker.name, surname: this.worker.surname, access: this.worker.access})
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)});
    console.log("fiesta");
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
