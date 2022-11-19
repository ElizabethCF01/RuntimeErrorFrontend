<template>
  <div class='home container text-center'>
    <div class='borderbot mb-5'>
      <h2>{{ tutorial.title }}</h2>
    </div>
    <div>
      <p class='tesxt-start'>{{ tutorial.content }}</p>
    </div>
    <div>
      <p class='tesxt-start'>...</p>
    </div>
    <div class='d-flex justify-content-center mt-2 mb-5 pb-5'>
      <GraphComp/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import GraphComp from '@/components/GraphComp.vue'
export default {
  name: 'GraphView',
  components: { GraphComp },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      tutorials: (state) => state.tutorials
    }),
    tutorial () {
      return this.tutorials.find((t) => t.id === 'gph')
    }
  }
}
</script>
<style scoped>
.borderbot {
  border-bottom: 0.3px solid rgba(173, 173, 173, 0.623)
}

.childInp {
  max-width: 6rem
}
</style>
