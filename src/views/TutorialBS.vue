<template>
  <div class="home container text-center">
    <div class="borderbot mb-5">
      <h2>{{ tutorial.title }}</h2>
    </div>
    <div>
      <p class="tesxt-start">{{ tutorial.content }}</p>
    </div>
    <div>
      <p class="tesxt-start">...</p>
    </div>
    <div class="d-flex justify-content-center mt-2">
      <div v-for="(x, i) in sortedA" :key="i" class="m-1">
        <span class="badge" :class="i !== bin ? 'bg-primary' :'bg-success'">{{x}}</span>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <input type="number" v-model.number="entrada" class="form-control childInp" id="child" />
      <button type="button" class="btn btn-primary" @click="search">Search</button>
    </div>
    <div v-if="bin!=-1 && bin!=''" class="d-flex justify-content-center mt-2">
      <div class="m-1">
        <p> Encontrado en la posicion {{bin}} 😃</p>
      </div>
    </div>
    <div v-else-if="bin != ''" class="d-flex justify-content-center mt-2">
      <div class="m-1">
        El numero no se encuentra en el arreglo 😓
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { bs } from '@/utilities/search'
export default {
  name: 'QuestionView',
  data () {
    return {
      a: [2, 4, 5, 6, 7, 3, 6, 7, 8],
      entrada: null,
      bin: ''
    }
  },
  computed: {
    ...mapState({
      tutorials: state => state.tutorials
    }),
    tutorial () {
      return this.tutorials.find(t => t.id === 'bs')
    },
    sortedA () {
      const x = this.a
      return x.sort()
    }
  },
  methods: {
    console () {
      console.log(this.a)
      this.a.sort()
      console.log(this.a)
      console.log(bs(this.a, 3))
    },
    search () {
      if (this.entrada !== '') {
        this.bin = bs(this.sortedA, this.entrada)
      }
    }
  }
}
</script>
<style scoped>
.borderbot {
  border-bottom: .3px solid rgba(173, 173, 173, 0.623);
}

.childInp {
  max-width: 6rem;
}
</style>
