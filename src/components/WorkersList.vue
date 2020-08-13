<template>
  <div>
  <h1>Test WorkersList</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>