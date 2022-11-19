<template>
  <div class="card border-secondary mb-3" style="min-width: 40rem;">
    <div class="card-header">{{ question.title }}</div>
    <div class="card-body">
      <p class="card-text">{{ question.content }}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'QuestionCard',
  props: {
    question: Object
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
.card:hover{
  box-shadow: 2px 2px 2px #cecece;
  transition: all .5s ease-in-out;
}
</style>
