<template>
  <div class="card border-secondary mb-3 text-start" style="min-width: 50rem;">
    <div class="card-header">{{ tutorial.title }}</div>
    <div class="card-body">
      <p class="card-text">{{ tutorial.content }}...</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TutorialCard',
  props: {
    tutorial: Object
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>
<style scoped>
.logo {
  margin-top: 10rem;
}
.search {
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;

}
.card{
  border-color: rgba(198, 154, 248, 0.548) !important;
  background-color: #feedff3b;
  color: white;
}
.card-subtitle{
  color: rgba(255, 255, 255, 0.767) !important;
  font-weight: 500;
}
.card:hover{
  box-shadow: 3px 5px 3px #26252663;
  transition: all .5s ease-in-out;
}
</style>
