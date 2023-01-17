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
.card{
  background-color: transparent;
  border: #202020;
}

.card:hover{
  box-shadow: 3px 5px 3px #26252663;
  transition: all .5s ease-in-out;
}
.card-header{
  font-size: 1.4rem;
  background-color: #a488b72d;
  color: #f6f6f8;
  font-weight: 500;
}
.card-body{
  background-color: #feedff3b;
  color: #f6f6f8;
  border-radius: 0 0 6px 6px;
}
</style>
