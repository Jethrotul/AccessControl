<template>
  <div class="containerListWorkers">
  <h1 class="titleAccessName">Permitido</h1>
  <Worker></Worker>
  <Worker></Worker>
  <Worker></Worker>
  <Worker></Worker>
  <Worker></Worker>
  <Worker></Worker>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import Worker from '@/components/Worker.vue';

@Component({
    components: {
        Worker
    }
})
export default class WorkersList extends Vue {
    
    
}
</script>

<style scoped>
.titleAccessName {
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>