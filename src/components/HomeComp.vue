<template>
  <div class="home container text-center pb-5 mb*5">
    <div class="logo"><img src="../assets/1.png"/></div>
    <form @submit.prevent="qSearch">
      <div class="row ">
        <div class="form-group search d-flex center">
          <input type="text" v-model="search" class="form-control" id="search" aria-describedby="button-addon2"
            placeholder="Search...">
          <button class="btn btn-primary" type="submit" id="button-addon2"><span class="bi bi-search"></span>
          </button>
        </div>
      </div>
    </form>
    <div v-if="loading" class="mt-3">
      <div class="spinner-border text-info mt-3" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="mt-3" v-else-if="(questionSearch != null && questionSearch.length==0)">No encontramos nungun resultado 😓</div>
    <div v-else-if="questionSearch!= null" class="d-flex justify-content-center mt-3 row">
      <div v-for="question in questionSearch" :key="question.id" class=" d-flex justify-content-center col-12">
      <RouterLink class="anone" :to="`question/${question.id}`"><QuestionCard :question="question" /></RouterLink>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import QuestionCard from './QuestionCard.vue'
import { heapsort } from '@/utilities/sorts'
export default {
  name: 'HomeComp',
  components: { QuestionCard },
  data () {
    return {
      search: '',
      questionSearch: null,
      loading: false
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions
    })
  },
  methods: {
    console () {
      console.log(this.search)
      const a = [{ rating: 1 }, { rating: 10 }]
      heapsort(a, a.length)
      console.log(a)
    },
    qSearch () {
      this.loading = true
      this.questionSearch = this.questions.filter(q => {
        const title = q.title.toString().toLowerCase()
        const content = q.content.toString().toLowerCase()
        const searchTerm = this.search.toLowerCase()
        return (
          title.includes(searchTerm) || content.includes(searchTerm))
      })
      this.loading = false
    }
  }
}
</script>
<style scoped>
.logo {
  margin-top: 1rem;
}

.search {
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 25rem;
}
.anone{
  text-decoration: none;
  color: inherit;
}
.btn-primary{
  background-color: #233dfff5 !important;
  border-color: #0c23d3f8 !important;
}
.btn-primary:hover {
  background-color: #233dffe8 !important;
  border-color: #0c23d3e5 !important;
}
</style>
