<template>
  <HomeComp/>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'
export default {
  name: 'HomeView',
  components: { HomeComp }
}
</script>
<style scoped>
.logo{
  margin-top: 10rem;
}
.search{
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;

}
</style>
