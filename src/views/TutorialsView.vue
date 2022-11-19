<template>
  <TutorialsComp />
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
</style>
