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
.card:hover {
  box-shadow: 2px 2px 2px #cecece;
  transition: all .5s ease-in-out;
}
</style>
