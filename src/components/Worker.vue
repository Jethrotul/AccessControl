<template>
  <div class="card" @click="selected">
    <div class="profilePic">
      <img class="picSized" src="@/assets/img/perfil_default.jpg" alt="Profile Picture" />
    </div>
    <div class="dataCard">
      <p >{{worker.name}}</p>
      <h3>{{worker.surname}}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { EventBus } from '@/bus';

@Component({
  components: {
    
  },
})
export default class Worker extends Vue {
  @Prop({default: 'Error'}) readonly worker!: string;

  selected () {
    EventBus.$emit("editWorker", this.worker);
    //console.log(this.worker);
  }
  

}
</script>


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
  color: #356881;
}

.picSized {
  width: 100px;
  height: 100px;
}
</style>