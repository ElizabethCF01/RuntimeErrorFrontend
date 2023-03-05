<template>
  <div class="main">
    <HomeComp/>
  </div>
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

.search{
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;
}
.main{
  min-height: 100vh;
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
