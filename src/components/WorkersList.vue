<template>
  <div class="containerListWorkers">
  <h1 class="titleAccessName">Permitido</h1>
  <!-- <ul>
      <li v-for="(worker, index) in workers" :key="index">
        <p>{{worker.name}} {{worker.surname}} {{worker.access}}</p>
      </li>
    </ul> -->
  <Worker></Worker>
  <Worker></Worker>
  
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import Worker from '@/components/Worker.vue';
import AccessEditor from '@/components/AccessEditor.vue';

@Component({
    components: {
        Worker,
        AccessEditor
    }
})
export default class WorkersList extends Vue {}
</script>

<style scoped>
.titleAccessName {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>