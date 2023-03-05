<template>
    <div class="main d-flex justify-content-center d-flex align-items-center">
      <LoginForm/>
    </div>
</template>
<script>
// @ is an alias to /src
/* eslint-disable */
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'loginPage',
    components: {LoginForm},
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style scoped>
  .main{
    min-height: 100vh;
    background-image: url('../assets/background2.png');
    background-repeat: no-repeat;
    overflow: auto;
    color: white;
    padding-top: 4rem;
  }
  .h-100{
    height: 100vh;
  }
</style>
