<template>
  <div class="main"><TutorialsComp /></div>
</template>

<script>
// @ is an alias to /src
import TutorialsComp from '@/components/TutorialsComp.vue'
export default {
  name: 'TutorialsView',
  components: { TutorialsComp }
}
</script>
<style scoped>
.search {
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;

}
.main{
  min-height: 100vh;
  background-image: url('../assets/background2.png');
  background-repeat: no-repeat;
  overflow: auto;
}
</style>
