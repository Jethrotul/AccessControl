<template>
  <div>
    <h1>Editor Acceso Restringido</h1>
    <div class="containerEditor">
      <div class="profilePicEditor">
        <img class="picSizedEditor" src="@/assets/img/perfil_default.jpg" alt />
      </div>
      <div class="dataEditor">
        <form>
          <p>Nombre</p>
          <input v-model="message" placeholder="Nombre" />
          <p>Apellidos</p>
          <input v-model="message" placeholder="Apelidos" />
          <select v-model="Selected">
            <option disabled value selected>¿Acceso?</option>
            <option>Permitido</option>
            <option>Denegado</option>
          </select>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AccessEditor extends Vue {}
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
  flex-direction:column;
  justify-content:flex-start;
}
</style>
