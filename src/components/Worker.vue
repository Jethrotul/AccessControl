<template>
  <div class="card">
    <div class="profilePic" >
    <img class="picSized" src="@/assets/img/perfil_default.jpg" alt="Profile Picture" />
    </div>
    <div class="dataCard">
      <p>Nombre</p>
      <h3>Apellidos</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccessEditor from "@/components/AccessEditor.vue"

@Component({
  components: {
    AccessEditor
  }
})
export default class Worker extends Vue {}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #f1f1f1;
  width: 300px;
  margin: auto;
  margin-bottom: 7%;
}
.dataCard {
    text-align: center;
    color:#356881;
}

.picSized {
  width: 100px;
  height: 100px;
}
</style>