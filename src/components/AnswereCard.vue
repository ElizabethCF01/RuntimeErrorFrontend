<template>
  <div class="card border-secondary mb-3 text-start" style="min-width: 40rem;">
    <div class="card-body row justify-content-between">
      <div class="col-9">
        <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-person"></i> {{ answere.user.name }}</h6>
      <p class="card-text">{{ answere.content }}
      </p>
    </div>
    <div class="col-3 text-end"><i class="bi bi-hand-thumbs-down"></i>{{ answere.rating}}<i class="bi bi-hand-thumbs-up"></i></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AnswareCard',
  props: {
    answere: Object,
    idq: String,
    id: String
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    sum () {
      const data = { id: this.idq, ans: this.id, rating: 1 }
      this.$store.commit('setRateAnsware', data)
      console.log(data)
    },
    sub () {
      const data = { id: this.idq, ans: this.id, rating: -1 }
      this.$store.commit('setRateAnsware', data)
      console.log(data)
    }
  }
}
</script>
<style scoped>
.search {
  margin: 0 auto;
  margin-top: 2rem;
  max-width: 25rem;

}
</style>
