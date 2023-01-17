<template>
  <div class="home container text-center pb-5 mb*5">
    <typed></typed>
    <form @submit.prevent="qSearch" class="form">
      <div class="row ">
        <div class="input-group search d-flex center">
          <input type="text" v-model="search" class="form-control custom-focus" id="search" aria-describedby="button-addon2"
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
    <div class="mt-3 not-found" v-else-if="(questionSearch != null && questionSearch.length==0)">No encontramos nungun resultado 😓</div>
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
import Typed from './Typed.vue'
import { heapsort } from '@/utilities/sorts'
export default {
  name: 'HomeComp',
  components: { QuestionCard, Typed },
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
  border: #7E7DAC !important;
  transition: .5s;
  background-size: 200% auto;
  background-image: linear-gradient(to right, #DA22FF 0%, #9733EE 51%, #DA22FF 100%);
}
.btn-primary:hover {
  background-position: right center;
    color: #fff;
    text-decoration: none;
}
.custom-focus{
  z-index: 1;

  border-color:#5D5D89;
  background: #ac8df957;
}
.custom-focus:focus{
  box-shadow: none;
  border-color: #5D5D89;
  background-color: #ebd7edb8;
}
.homephoto2{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 300px;
}
.not-found{
  color: white;
}
</style>
