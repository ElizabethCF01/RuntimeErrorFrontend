<template>
  <div class="home container text-center" @click="console">
    <div class="borderbot mb-5">
      <h2>{{ tutorial.title }}</h2>
    </div>
      <div>
        <p class="tesxt-start">{{ tutorial.content }}</p>
      </div>
      <div>
        <p class="tesxt-start">...</p>
      </div>
      <div class="d-flex flex-column justify-content-center row">
        <div class="d-flex col-12 justify-content-center">
          <input type="number" v-model.number="newChild" class="form-control childInp" id="child" />
          <button type="button" class="btn btn-primary" @click="add">Add</button>
          <button type="button" class="btn btn-secondary" @click="poll">Poll</button>
        </div>
        <p class="mt-1"><span class="badge bg-info">{{root}}</span></p>
      </div>
      <div v-if="heap.heap.length>0" class="d-flex justify-content-center mt-2">
        <div v-for="(h, i) in heap.heap" :key="i" class="m-1">
          <span class="badge" :class="i > 0 ? 'bg-primary' :'bg-success'" >{{h}}</span>
        </div>
      </div>
      <div v-else class="d-flex justify-content-center mt-2">
        <p>The heap is empty...</p>
      </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { MaxHeap } from '@/utilities/priorityQueue'
export default {
  name: 'QuestionView',
  data () {
    return {
      heap: new MaxHeap(),
      newChild: '',
      root: ''
    }
  },
  computed: {
    ...mapState({
      tutorials: state => state.tutorials
    }),
    tutorial () {
      return this.tutorials.find(t => t.id === 'pq')
    }
  },
  methods: {
    add () {
      if (this.newChild) {
        this.heap.insert(this.newChild)
      }
    },
    poll () {
      this.root = this.heap.poll()
      console.log(this.root)
    }
  }
}
</script>
<style scoped>
.borderbot {
  border-bottom: .3px solid rgba(173, 173, 173, 0.623);
}
.childInp{
  max-width: 6rem;
}
</style>
