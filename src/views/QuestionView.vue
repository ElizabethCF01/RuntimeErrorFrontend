<template>
  <div class="main">
    <div class="home container text-center">
    <div class="borderbot mb-5">
      <h2 class="title">{{ question.title }}</h2>
      <div class="content">
        <p>{{ question.content }}</p>
      </div>
    </div>
    <div class="title">{{ question.answers.length }} answers</div>
    <div v-for="ans in answers" :key="ans.id">
      <AnswereCard :answere="ans" :idq="id" :id="ans.id"/>
    </div>
  </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AnswereCard from '@/components/AnswereCard.vue'
import { heapsort } from '@/utilities/sorts'
export default {
  name: 'QuestionView',
  components: { AnswereCard },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions
    }),
    question () {
      return this.questions.find(q => q.id === this.id)
    },
    answers () {
      const a = []
      for (let i = 0; i < this.question.answers.length; i++) {
        a[i] = (this.question.answers[i])
        // console.log(this.question.answers[i])
      }
      heapsort(a, a.length)
      // console.log(a)
      return a
    }
  },
  methods: {
    console () {
      // console.log(this.question)
    }
  }
}
</script>
<style scoped>
.borderbot{
  border-bottom: .3px solid rgba(173, 173, 173, 0.623);
}
.main{
  min-height: 100vh;
  background-image: url('../assets/background2.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: auto;
  padding-top: 5rem;
}
.title{
color:white;
}
.content{
  color:white;
}
</style>
